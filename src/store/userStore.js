import React from 'react';
import {makeAutoObservable} from "mobx";
import {instance} from "../API/ConfigAxios";

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    usersList = [];

    usersAmount = 0;

    limitUsersListStore = 10;

    getUsersData = async (limit = 10, page = 1) => {
        let response = await instance.get('users', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        this.usersList = response.data;
        this.getUsersAmount()
    }

    getUsersAmount = async () => {
        let response = await instance.get('users');
        this.usersAmount = response.data.length;
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
        this.getUsersData(this.limitUsersListStore, 1)
    }

    deleteUser = async (id) => {
        await instance.delete('users/' + id)
        this.getUsersData(this.limitUsersListStore, 1)
    }

    setLimitUsersListStore = (num) => {
        this.limitUsersListStore = num;
    }

    sortByName = () => {
        this.usersList.sort((a, b) => a.name.localeCompare(b.name))
    }

    sortByAge = () => {
        this.usersList.sort((a, b) => a.age - b.age)
    }

}

export default new UserStore();