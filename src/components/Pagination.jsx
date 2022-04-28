import React, {useEffect, useState} from 'react';
import userStore from "../store/userStore";
import PaginationMaterial from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Pagination = () => {
    let { getPageCount } = userStore;
    let [ totalCountPages, setTotalCountPages ] = useState(0)

    const handleChange = (event, value) => {
        // setPage(value);
    };

    return (
        <div>
            <Stack spacing={2}>
                <PaginationMaterial count={totalCountPages} onChange={handleChange}/>
            </Stack>
        </div>
    );
};

export default Pagination;