import React, { useEffect, useState } from "react";
import userStore from "../store/userStore";
import { observer } from "mobx-react-lite";
import Loading from "../components/Loading";
import UserListControlPanel from "../components/UI/UserListControlPanel";
import ChangeUserModal from "../components/ChangeUserModal";
import DeleteUserConfirm from "../components/DeleteUserConfirm";

import { DataGrid } from "@mui/x-data-grid";

const UsersListPage = () => {
    let { getUsersData, usersList, deleteUser, isDataLoad } = userStore;
    let [limitUsersList, setLimitUsersList] = useState(10);

    useEffect(() => {
        setTimeout(() => {
            getUsersData();
        }, 500);
    }, [limitUsersList]);

    const limitPagesFn = (count) => {
        setLimitUsersList(count);
    };

    const columns = [
        { field: "name", headerName: "Name", width: 200 },
        { field: "email", headerName: "E-mail", width: 200 },
        {
            field: "phone",
            headerName: "Phone",
            type: "number",
            width: 180,
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            width: 90,
        },
        {
            field: "gender",
            headerName: "Gender",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 100,
            valueGetter: (gender) => (+gender.value ? "М" : "Ж"),
        },
        {
            field: "buttons",
            headerName: "Actions",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            renderCell: (user) => (
                <>
                    <ChangeUserModal props={user.id} />
                    <DeleteUserConfirm delUser={() => deleteUser(user.id)} />
                </>
            ),
        },
    ];

    const rows = usersList.slice();

    return (
        <div>
            <h2>Список юзеров</h2>
            {isDataLoad ? (
                <>
                    <UserListControlPanel fnLimit={limitPagesFn} />
                    <div style={{ width: 950 }}>
                        <DataGrid
                            disableColumnMenu
                            autoHeight
                            rows={rows}
                            columns={columns}
                            pageSize={limitUsersList}
                            rowsPerPageOptions={[limitUsersList]}
                            sx={{
                                padding: 1,
                                boxShadow: 2,
                                border: 2,
                                borderColor: "gray",
                                "& .MuiDataGrid-cell:hover": {
                                    color: "#51c3e1",
                                },
                            }}
                        />
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default observer(UsersListPage);
