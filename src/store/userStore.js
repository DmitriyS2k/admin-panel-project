import React from 'react';
import {makeAutoObservable} from "mobx";
import axios from "axios";

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    getUsersData = async () => {
        let response = await axios.get('http://localhost:3000/users');
        return response.data;
    }


    addUser = (object) => {
        axios.post(`http://localhost:3000/users`,  object);
    }

    changeUser = () => {
        axios.patch('http://localhost:3000/users/5', {name: 'Vova'})
    }

    deleteUser = (id) => {
        axios.delete('http://localhost:3000/users/' + id)
        this.getUsersData();
    }


}

export default new UserStore();