import React from 'react';
import {makeAutoObservable} from "mobx";
import axios from "axios";

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    getUserData = async () => {
        let response = await axios.get('http://localhost:3000/users');
        console.log(response)
        return response.data;
    }


    addUser = (object) => {
    }

    changeUser = (id) => {

    }

    deleteUser = (id) => {
        return this.userData = this.userData.filter(user => user.id != id);
    }


}

export default new UserStore();