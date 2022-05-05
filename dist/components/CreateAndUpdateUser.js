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
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import userStore from '../store/userStore';
function CreateAndUpdateUser(_a) {
    var _this = this;
    var props = _a.props, closeFn = _a.closeFn;
    var navigate = useNavigate();
    var addUser = userStore.addUser, changeUser = userStore.changeUser, getUserData = userStore.getUserData;
    var _b = React.useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        gender: '1',
    }), user = _b[0], setUser = _b[1];
    var fetchUser = function () { return __awaiter(_this, void 0, void 0, function () {
        var userFn;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!props)
                        return [2 /*return*/];
                    return [4 /*yield*/, getUserData(props)];
                case 1:
                    userFn = _a.sent();
                    setUser(userFn);
                    return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        fetchUser();
    }, []);
    var validation = yup.object().shape({
        name: yup.string().required('Обязательно'),
        email: yup.string().email('Введите корректный E-mail').required('Обязательно'),
        phone: yup.number().typeError('Должно быть числом').required('Обязательно'),
        age: yup.number().typeError('Должно быть числом').required('Обязательно'),
        gender: yup.string().required('Обязательно'),
    });
    return (React.createElement("div", null,
        React.createElement(Box, { component: "form", sx: {
                '& > :not(style)': { m: 5, width: '500px' },
            }, noValidate: true, autoComplete: "off" },
            React.createElement(Formik, { initialValues: user, validateOnBlur: true, onSubmit: function (values) {
                    if (props) {
                        changeUser(props, values);
                        closeFn();
                    }
                    else {
                        addUser(values);
                    }
                    navigate('/userslistpage');
                }, validationSchema: validation, enableReinitialize: true }, function (_a) {
                var values = _a.values, errors = _a.errors, touched = _a.touched, handleChange = _a.handleChange, handleBlur = _a.handleBlur, isValid = _a.isValid, handleSubmit = _a.handleSubmit, dirty = _a.dirty;
                return (React.createElement("div", { className: "add-user-form" },
                    React.createElement(TextField, { id: "name", label: "\u0418\u043C\u044F", variant: "outlined", type: "text", name: "name", onChange: handleChange, onBlur: handleBlur, value: values.name, error: touched.name && Boolean(errors.name) && true, helperText: touched.name && errors.name }),
                    React.createElement(TextField, { id: "email", label: "E-mail", variant: "outlined", type: "text", name: "email", onChange: handleChange, onBlur: handleBlur, value: values.email, error: touched.email && Boolean(errors.email) && true, helperText: touched.email && errors.email }),
                    React.createElement(TextField, { id: "phone", label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", variant: "outlined", type: "number", name: "phone", onChange: handleChange, onBlur: handleBlur, value: values.phone, error: touched.phone && Boolean(errors.phone) && true, helperText: touched.phone && errors.phone }),
                    React.createElement(TextField, { id: "age", label: "\u0412\u043E\u0437\u0440\u0430\u0441\u0442", variant: "outlined", type: "number", name: "age", onChange: handleChange, onBlur: handleBlur, value: values.age, error: touched.age && Boolean(errors.age) && true, helperText: touched.age && errors.age }),
                    React.createElement(FormControl, null,
                        React.createElement(FormLabel, { id: "gender" }, "\u041F\u043E\u043B"),
                        React.createElement(RadioGroup, { "aria-labelledby": "gender", value: values.gender, name: "gender", row: true, onChange: handleChange, onBlur: handleBlur },
                            React.createElement(FormControlLabel, { value: "0", control: React.createElement(Radio, null), label: "\u0416\u0435\u043D\u0449\u0438\u043D\u0430" }),
                            React.createElement(FormControlLabel, { value: "1", control: React.createElement(Radio, null), label: "\u041C\u0443\u0436\u0447\u0438\u043D\u0430" }))),
                    React.createElement(Button, { variant: "contained", disabled: !isValid && !dirty, onClick: function () { return handleSubmit(); }, type: "submit" }, props ? 'Изменить' : 'Добавить')));
            }))));
}
export default CreateAndUpdateUser;
//# sourceMappingURL=CreateAndUpdateUser.js.map