import React from 'react';
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import userStore from "../store/userStore";
import DeleteUserConfirm from "./DeleteUserConfirm";
import ChangeUserModal from "./ChangeUserModal"



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
            <TableCell align="right">{props.gender ? "М" : "Ж"}</TableCell>
            <TableCell align="right">
                <ChangeUserModal props={props.id}/>
                <DeleteUserConfirm delUser={() => deleteUser(props.id)}/>
            </TableCell>
        </TableRow>
     );
};

export default NewUser;