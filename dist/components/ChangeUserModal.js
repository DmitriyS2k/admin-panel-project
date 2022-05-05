import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateAndUpdateUser from './CreateAndUpdateUser';
var style = {
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
function ChangeUserModal(_a) {
    var props = _a.props;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var handleOpen = function () { return setOpen(true); };
    var handleClose = function () { return setOpen(false); };
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { variant: "contained", color: "primary", style: { marginRight: '10px' }, onClick: handleOpen }, "Edit"),
        React.createElement(Modal, { open: open, onClose: handleClose, "aria-labelledby": "modal-modal-title", "aria-describedby": "modal-modal-description" },
            React.createElement(Box, { sx: style },
                React.createElement(Typography, { id: "modal-modal-title", variant: "h6", component: "h2", textAlign: "center" }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C"),
                React.createElement(CreateAndUpdateUser, { props: props, closeFn: handleClose })))));
}
export default ChangeUserModal;
//# sourceMappingURL=ChangeUserModal.js.map