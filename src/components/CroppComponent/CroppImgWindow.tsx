import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ReactCrop, {
  centerCrop,
  makeAspectCrop,
  Crop,
  PixelCrop,
} from 'react-image-crop';

import { canvasPreview } from './canvasPreview';
import { useDebounceEffect } from './useDebounceEffect';

import 'react-image-crop/dist/ReactCrop.css';

function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );
}

const Input = styled('input')({
  display: 'none',
});

export default function CroppImgWindow({ getBase64 }) {
  const [imgSrc, setImgSrc] = React.useState('');
  const previewCanvasRef = React.useRef<HTMLCanvasElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [crop, setCrop] = React.useState<Crop>();
  const [completedCrop, setCompletedCrop] = React.useState<PixelCrop>();
  const [scale] = React.useState(1);
  const [aspect] = React.useState<number | undefined>(1);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    // @ts-ignore
    const response = previewCanvasRef.current.toDataURL('image/jpeg');
    setOpen(false);
    getBase64(response);
  };

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setOpen(true);
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      // @ts-ignore
      reader.addEventListener('load', () => setImgSrc(reader.result.toString() || ''));
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width
        && completedCrop?.height
        && imgRef.current
        && previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
        );
      }
    },
    100,
    [completedCrop, scale],
  );

  return (
    <>
      <div className="crop-module">
        <div className="Crop-Controls">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label
            htmlFor="contained-button-file"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Input
              accept="image/*"
              id="contained-button-file"
              type="file"
              onChange={(e) => onSelectFile(e)}
            />
            <Button variant="contained" component="span">
              Загрузить
            </Button>
          </label>
        </div>
        <div>
          {Boolean(completedCrop) && (
          <canvas
            ref={previewCanvasRef}
            style={{
              border: '1px solid black',
              borderRadius: '50%',
              objectFit: 'contain',
              // @ts-ignore
              width: 100,
              // @ts-ignore
              height: 100,
            }}
          />
          )}
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Выберите миниатюру
        </DialogTitle>
        <DialogContent>
          {Boolean(imgSrc) && (
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
            circularCrop
          >
            <img
              ref={imgRef}
              alt="Crop me"
              src={imgSrc}
              onLoad={onImageLoad}
            />
          </ReactCrop>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Готово
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
