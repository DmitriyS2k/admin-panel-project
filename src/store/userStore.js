import React from 'react';
import {makeAutoObservable} from "mobx";
import {instance} from "../API/ConfigAxios";

class UserStore {
    constructor() {
        makeAutoObservable(this);
    }

    usersList = [];

    getPageCount = (limit) => {
        return Math.ceil( this.usersList.length / limit);
    }

    getUsersData = async (limit = 10, page = 1) => {
        let response = await instance.get('users', {
            params: {
                _limit: limit,
                _page: page
            }
        });
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


}

export default new UserStore();