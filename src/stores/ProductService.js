const webApiUrl = "http://localhost:6001";
const axios = require('axios');

class ProductService {
  get = async (urlParams) => {
        const options = {
            method: "GET",
        }
     const request = new Request(webApiUrl + "/" + urlParams, options);
     const response = await fetch(request);
     return response.json();
    }

  post = async (data) => {
     //const response = await fetch(webApiUrl + '/' + 'postproduct', { method: 'post', body: model}).then((response) => {
     const request= await axios.post(webApiUrl + '/' + 'postproduct', data)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
      const response = await fetch(request);
      console.log(response)
      return response.json();
    }

  getBySku = async (sku) => {
        const options = {
            method: "GET",
        }
     const request = new Request(webApiUrl + "/" + 'productdetail' + '/' + sku , options);
     const response = await fetch(request);
     return response.json();
    }

  updateProduct = async (sku) => {
        const options = {
            method: "PUT",
        }
     const request = await axios.put(webApiUrl + "/" + 'updateproduct' , options)
     .then((response) => {
       console.log(response);
     }, (error) => {
       console.log(error);
     });
     const response = await fetch(request);
     return response.json();
    }


  getBySkuDelete = async (sku) => {
        const options = {
            method: "GET",
        }
     const request = new Request(webApiUrl + "/" + 'productdetail' + '/' + sku , options);
     const response = await fetch(request);
     return response.json();
    }

  deleteProduct = async (id) => {
        const options = {
            method: "DELETE",
        }
     const request = axios.delete(webApiUrl + "/" + 'deleteproduct' + '/' + id})
     const response = await fetch(request);
     return response.json();
    }


  //function delete

}


export default ProductService;
