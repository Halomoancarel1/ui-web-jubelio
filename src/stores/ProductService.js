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
     axios.post(webApiUrl + '/' + 'postproduct', data)
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
       
    }

  // update = async (model) => {
  //    const request = await axios.post(webApiUrl + "/" + "postproduct", model).then(response => {
  //      console.log(response)
  //    }).catch(error => {
  //      console.log(error)
  //    })
  //    const response = await fetch(request);
  //    return response.json();
  //   }

}


export default ProductService;
