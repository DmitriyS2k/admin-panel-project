import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { DataGrid } from '@mui/x-data-grid';
import userStore from '../store/userStore';
import Loading from '../components/Loading';
import UserListControlPanel from '../components/UI/UserListControlPanel';
import ChangeUserModal from '../components/ChangeUserModal';
import DeleteUserConfirm from '../components/DeleteUserConfirm';
function UsersListPage() {
    var getUsersData = userStore.getUsersData, usersList = userStore.usersList, deleteUser = userStore.deleteUser, isDataLoad = userStore.isDataLoad;
    var _a = useState(10), limitUsersList = _a[0], setLimitUsersList = _a[1];
    useEffect(function () {
        setTimeout(function () {
            getUsersData();
        }, 500);
    }, [limitUsersList]);
    var limitPagesFn = function (count) {
        setLimitUsersList(count);
    };
    var columns = [
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'email', headerName: 'E-mail', width: 200 },
        {
            field: 'phone',
            headerName: 'Phone',
            type: 'number',
            width: 180,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 100,
            valueGetter: function (gender) { return (+gender.value ? 'М' : 'Ж'); },
        },
        {
            field: 'buttons',
            headerName: 'Actions',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            renderCell: function (user) { return (React.createElement(React.Fragment, null,
                React.createElement(ChangeUserModal, { props: user.id }),
                React.createElement(DeleteUserConfirm, { delUser: function () { return deleteUser(user.id); } }))); },
        },
    ];
    var rows = usersList.slice();
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u0421\u043F\u0438\u0441\u043E\u043A \u044E\u0437\u0435\u0440\u043E\u0432"),
        isDataLoad ? (React.createElement(React.Fragment, null,
            React.createElement(UserListControlPanel, { fnLimit: limitPagesFn }),
            React.createElement("div", { style: { width: 950 } },
                React.createElement(DataGrid, { disableColumnMenu: true, autoHeight: true, rows: rows, columns: columns, pageSize: limitUsersList, rowsPerPageOptions: [limitUsersList], sx: {
                        padding: 1,
                        boxShadow: 2,
                        border: 2,
                        borderColor: 'gray',
                        '& .MuiDataGrid-cell:hover': {
                            color: '#51c3e1',
                        },
                    } })))) : (React.createElement(Loading, null))));
}
export default observer(UsersListPage);
//# sourceMappingURL=UsersListPage.js.map