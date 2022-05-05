import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
function DeleteUserConfirm(_a) {
    var delUser = _a.delUser;
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var handleClickOpen = function () {
        setOpen(true);
    };
    var handleClose = function () {
        setOpen(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { variant: "outlined", color: "error", onClick: handleClickOpen }, "Delete"),
        React.createElement(Dialog, { open: open, onClose: handleClose, "aria-labelledby": "alert-dialog-title", "aria-describedby": "alert-dialog-description" },
            React.createElement(DialogTitle, { id: "alert-dialog-title" }, "\u0422\u043E\u0447\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C?"),
            React.createElement(DialogContent, null,
                React.createElement(DialogContentText, { id: "alert-dialog-description" }, "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u044B.")),
            React.createElement(DialogActions, null,
                React.createElement(Button, { onClick: handleClose }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
                React.createElement(Button, { onClick: function () {
                        handleClose();
                        delUser();
                    }, autoFocus: true }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C")))));
}
export default DeleteUserConfirm;
//# sourceMappingURL=DeleteUserConfirm.js.map