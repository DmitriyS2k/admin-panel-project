import React from 'react';
import {makeAutoObservable} from "mobx";
import axios from "axios";
import {instance} from "../API/ConfigAxios";

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    usersList = [];

    getUsersData = async () => {
        let response = await instance.get('users');
        this.usersList = response.data;
    }

    getUserData = async (id) => {
        let response = await instance.get(`users/${id}`);
        return response.data;
    }

    addUser = (object) => {
        instance.post(`users`,  object);
    }

    changeUser = async (id, data) => {
        await instance.patch('users/' + id, data)
        this.getUsersData()
    }

    deleteUser = async (id) => {
        await axios.delete('http://localhost:3000/users/' + id)
        this.getUsersData()
    }


}

export default new UserStore();