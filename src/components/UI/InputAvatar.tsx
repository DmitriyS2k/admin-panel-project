import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

function InputAvatar() {
  const [imgSrc, setImgSrc] = React.useState(undefined);

  const Input = styled('input')({
    display: 'none',
  });

  const fileInput = React.useRef(null);

  const fileInputPrev = React.useRef(null);

  const fileInputFn = () => {
    // @ts-ignore
    setImgSrc(URL.createObjectURL(fileInput.current.files[0]));
  };

  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label
      htmlFor="contained-button-file"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <span style={{ marginRight: 25 }}>Загрузить аватар:</span>
      <Input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        ref={fileInput}
        onChange={fileInputFn}
      />
      <Button variant="contained" component="span">
        Upload
      </Button>
      <img id="prev-img-input" src={imgSrc} alt="your avatar" ref={fileInputPrev} />
    </label>
  );
}

export default InputAvatar;
