import React, {useEffect, useState} from 'react';
import userStore from "../store/userStore";
import {observer} from "mobx-react-lite";
import UserListItem from "../components/UserListItem";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import UserListItemControlPanel from "../components/UI/UserListItemControlPanel";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const UsersListPage = () => {
    let { getUsersData, usersList } = userStore;
    let [ limitUsersList, setLimitUsersList ] = useState(10)
    let [ page, setPage ] = useState(1);

    useEffect(() => {
        setTimeout(() => {getUsersData(limitUsersList, page)}, 500)
    }, [limitUsersList])

    const limitPagesFn = (count) => {
        setLimitUsersList(count);
    };

    return (
        <div>
            <h2>Список юзеров</h2>
            {usersList.length ?
                <>
                <UserListItemControlPanel fnLimit={limitPagesFn}/>
                <TableContainer component={Paper}>
                <Table sx={{ minWidth: 950 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {usersList.map(user => <UserListItem user={user} key={user.id}/>)}
                    </TableBody>
                </Table>
            </TableContainer></> : <Loading/>}
            <Pagination/>
        </div>
    );
};

export default observer(UsersListPage);

