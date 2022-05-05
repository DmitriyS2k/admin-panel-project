var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import userStore from '../../store/userStore';
function UserListControlPanel(_a) {
    var fnLimit = _a.fnLimit;
    var searchMethod = userStore.searchMethod, getUsersData = userStore.getUsersData;
    var _b = useState(10), limitUsersList = _b[0], setLimitUsersList = _b[1];
    var _c = useState('name'), searchColumn = _c[0], setSearchColumn = _c[1];
    var _d = useState(''), textSearchField = _d[0], setTextSearchField = _d[1];
    var limitFn = function (e) {
        setLimitUsersList(e.target.value);
        fnLimit(e.target.value);
    };
    var handleChange = function (event) {
        setSearchColumn(event.target.value);
    };
    useEffect(function () {
        function Data() {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getUsersData()];
                        case 1:
                            _a.sent();
                            searchMethod(textSearchField, searchColumn);
                            return [2 /*return*/];
                    }
                });
            });
        }
        Data();
    }, [textSearchField]);
    return (React.createElement("div", { className: "control-panel" },
        React.createElement(Box, { sx: { minWidth: 100, maxWidth: 100 } },
            React.createElement(FormControl, { fullWidth: true },
                React.createElement(InputLabel, { id: "demo-simple-select-label" }, "\u041A\u043E\u043B-\u0432\u043E"),
                React.createElement(Select, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: limitUsersList, label: "\u041A\u043E\u043B-\u0432\u043E", onChange: limitFn },
                    React.createElement(MenuItem, { value: 5 }, "5"),
                    React.createElement(MenuItem, { value: 10 }, "10"),
                    React.createElement(MenuItem, { value: 20 }, "20")))),
        React.createElement("div", { style: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            } },
            React.createElement(Box, { component: "form", sx: {
                    '& > :not(style)': { m: 1, width: 300 },
                }, noValidate: true, autoComplete: "off" },
                React.createElement(TextField, { id: "outlined-basic", label: "\u041F\u043E\u0438\u0441\u043A", variant: "outlined", onChange: function (e) {
                        setTextSearchField(e.target.value);
                    } })),
            React.createElement(Box, { sx: { minWidth: 120 } },
                React.createElement(FormControl, { fullWidth: true },
                    React.createElement(InputLabel, { id: "demo-simple-select-label" }, "\u0427\u0442\u043E \u0438\u0449\u0435\u043C?"),
                    React.createElement(Select, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: searchColumn, label: "\u0427\u0442\u043E \u0438\u0449\u0435\u043C?", onChange: handleChange },
                        React.createElement(MenuItem, { value: "name" }, "\u0418\u043C\u044F"),
                        React.createElement(MenuItem, { value: "email" }, "E-mail")))))));
}
export default UserListControlPanel;
//# sourceMappingURL=UserListControlPanel.js.map