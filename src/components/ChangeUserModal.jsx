import React, {useState} from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateAndUpdateUser from "./CreateAndUpdateUser";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 630,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ChangeUserModal = ({props}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                style={{marginRight: '10px'}}
                onClick={handleOpen}
            >Edit</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" textAlign={"center"}>
                        Редактировать запись
                    </Typography>
                    <CreateAndUpdateUser props={props}/>
                </Box>
            </Modal>
        </div>
    );
};

export default ChangeUserModal;