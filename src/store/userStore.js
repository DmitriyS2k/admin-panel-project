import React from 'react';
import {makeAutoObservable} from "mobx";
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
        await instance.delete('users/' + id)
        this.getUsersData()
    }

    searchMethod = (string, searchColumn) => {
        this.usersList = this.usersList.filter((user) => user[searchColumn].indexOf(string) + 1)
    }
}

export default new UserStore();