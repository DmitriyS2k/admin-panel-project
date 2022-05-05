import React, { useState } from 'react';
import PaginationMaterial from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
function Pagination(_a) {
    var pageCount = _a.pageCount, setPageFn = _a.setPageFn;
    var _b = useState(1), currentPage = _b[0], setCurrentPage = _b[1];
    var handleChange = function (event, value) {
        setCurrentPage(value);
        setPageFn(value);
    };
    return (React.createElement("div", { className: "pagination-box" },
        React.createElement(Stack, { spacing: 4 },
            React.createElement(PaginationMaterial, { count: pageCount, onChange: handleChange }))));
}
export default Pagination;
//# sourceMappingURL=Pagination.js.map