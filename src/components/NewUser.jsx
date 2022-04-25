import React from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import userStore from "../store/userStore";
import ModalWindow from "./ModalWindow";

import Button from '@mui/material/Button';

const NewUser = ({props}) => {

    let { deleteUser } = userStore;



    return (
        <TableRow
            key={props.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {props.name}
            </TableCell>
            <TableCell align="right">{props.email}</TableCell>
            <TableCell align="right">{props.phone}</TableCell>
            <TableCell align="right">{props.age}</TableCell>
            <TableCell align="right">{props.gender}</TableCell>
            <TableCell align="right">
                <Button variant="contained"
                        color="primary"
                        style={{marginRight: '10px'}}>
                    Edit
                </Button>
                <ModalWindow delUser={() => deleteUser(props.id)}/>
            </TableCell>
        </TableRow>
     );
};

export default NewUser;