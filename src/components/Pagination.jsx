import React, {useEffect, useState} from 'react';
import userStore from "../store/userStore";
import PaginationMaterial from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Pagination = ({pageCount, setPageFn}) => {
    let [ currentPage, setCurrentPage ] = useState(1);

    const handleChange = (event, value) => {
        setCurrentPage(value);
        setPageFn(value);
    };

    return (
        <div className="pagination-box">
            <Stack spacing={4}>
                <PaginationMaterial count={pageCount} onChange={handleChange}/>
            </Stack>
        </div>
    );
};

export default Pagination;