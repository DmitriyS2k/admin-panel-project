import React from 'react';
import {observer} from "mobx-react-lite";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import userStore from "../store/userStore";
import DeleteUserConfirm from "./DeleteUserConfirm";
import ChangeUserModal from "./ChangeUserModal"



const NewUser = ({user}) => {

    let { deleteUser } = userStore;

    return (
        <TableRow
            key={user.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {user.name}
            </TableCell>
            <TableCell align="right">{user.email}</TableCell>
            <TableCell align="right">{user.phone}</TableCell>
            <TableCell align="right">{user.age}</TableCell>
            <TableCell align="right">{+user.gender ? "М" : "Ж"}</TableCell>
            <TableCell align="right">
                <ChangeUserModal props={user.id}/>
                <DeleteUserConfirm delUser={() => deleteUser(user.id)}/>
            </TableCell>
        </TableRow>
     );
};

export default observer(NewUser);