import axiosClient from "./axiosClient"

const productApi ={
    getAll : (params) => {
        const url = 'https://603ced5df4333a0017b68a5c.mockapi.io/api/apiaxios';
        return axiosClient.get(url, {params});
    },

    get: (id) => {
        const url = 'https://603ced5df4333a0017b68a5c.mockapi.io/api/newapiaxios';
        return axiosClient.get(url, {id});
    },
}

export default productApi;