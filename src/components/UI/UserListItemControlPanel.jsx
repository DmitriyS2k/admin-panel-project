import React, {useState} from 'react';
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const UserListItemControlPanel = ({fnLimit}) => {
    let [ limitUsersList, setLimitUsersList ] = useState(10)

    return (
        <div className="control-panel">
            <Box sx={{ minWidth: 100, maxWidth: 100 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Кол-во</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={limitUsersList}
                        label="age"
                        onChange={e => {setLimitUsersList(e.target.value)
                        fnLimit(e.target.value)
                        }}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export default UserListItemControlPanel;