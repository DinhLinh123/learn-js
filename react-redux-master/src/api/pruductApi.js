import axiosClient from "./aoxiosClient";

const productApi = {

      getAll : (params) =>{

            const url = 'https://6013b47c54044a00172ddc4a.mockapi.io/productName';
            return axiosClient.get(url, {params});
      },
}

export default productApi