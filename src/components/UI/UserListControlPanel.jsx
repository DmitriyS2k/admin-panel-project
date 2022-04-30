import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import userStore from "../../store/userStore";

const UserListControlPanel = ({ fnLimit }) => {
  let { searchMethod, getUsersData } = userStore;
  let [limitUsersList, setLimitUsersList] = useState(10);
  let [searchColumn, setSearchColumn] = useState("name");
  let [textSearchField, setTextSearchField] = useState("");

  let limitFn = (e) => {
    setLimitUsersList(e.target.value);
    fnLimit(e.target.value);
  };

  let handleChange = (event) => {
    setSearchColumn(event.target.value);
  };

  useEffect(() => {
    async function Data() {
      await getUsersData();
      searchMethod(textSearchField, searchColumn);
    }
    Data();
  }, [textSearchField]);

  return (
    <div className="control-panel">
      <Box sx={{ minWidth: 100, maxWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Кол-во</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={limitUsersList}
            label="Кол-во"
            onChange={limitFn}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: 300 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Поиск"
            variant="outlined"
            onChange={(e) => {
              setTextSearchField(e.target.value);
            }}
          />
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Что ищем?</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={searchColumn}
              label="Что ищем?"
              onChange={handleChange}
            >
              <MenuItem value={"name"}>Имя</MenuItem>
              <MenuItem value={"email"}>E-mail</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default UserListControlPanel;
