import {observable, runInAction, decorate, action} from 'mobx'
import ProductService from './ProductService'



class ProductStore{

  constructor(){
    this.productService = new ProductService();
  }


   products = {};
   returnProducts = {};

   getProduct = async (product) => {
      const returnProduct = await this.productService.get(product)
      runInAction(() => {
        this.products = returnProduct.data;
    })
  }

  postProduct = async (productModel) => {
   const aaa = await this.productService.post(productModel)
   runInAction(() => {
     //console.log(aaa);
     //
   })
   this.returnProducts = aaa.data;
 }
}

decorate(ProductStore, {
  returnProducts: observable,
  products: observable,
  getProduct: action,
  postProduct: action
});

const store = new ProductStore();
export default store;
