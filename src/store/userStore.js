import React from 'react';
import {makeAutoObservable} from "mobx";
import axios from "axios";

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    usersList = [];

    getUsersData = async () => {
        let response = await axios.get('http://localhost:3000/users');
        this.usersList = response.data;
    }

    getUserData = async (id) => {
        let response = await axios.get(`http://localhost:3000/users/${id}`);
        return response.data;
    }

    addUser = (object) => {
        axios.post(`http://localhost:3000/users`,  object);
    }

    changeUser = async (id, data) => {
        await axios.patch('http://localhost:3000/users/' + id, data)
        this.getUsersData()
    }

    deleteUser = async (id) => {
        await axios.delete('http://localhost:3000/users/' + id)
        this.getUsersData()
    }


}

export default new UserStore();