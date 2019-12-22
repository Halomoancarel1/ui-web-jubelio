import {observable, runInAction, decorate, action} from 'mobx'
import ProductService from './ProductService'



class ProductStore{

  constructor(){
    this.productService = new ProductService();
  }


   products = {};
   returnProducts = {};
   returnProductBySku = {};
   returnProductDeleteBySku = {};
   returnUpdateProduct = {};
   returnProductBySkuDelete = {};
   returnDeleteProduct = {};

   getProduct = async (product) => {
      const returnProduct = await this.productService.get(product)
      runInAction(() => {
        this.products = returnProduct.data;
        console.log(this.products)
    })
  }

  postProduct = async (productModel) => {
    const aaa = await this.productService.post(productModel)
    runInAction(() => {
      console.log(aaa.message)
      this.returnProducts = aaa.message;
    })
  }

  getProductBySku = async (sku) => {
    const aaa = await this.productService.getBySku(sku)
    runInAction(() => {
      this.returnProductBySku = aaa;
    })
  }

  putProduct = async (productModelLocal) => {
    const aaa = await this.productService.updateProduct(productModelLocal)
    runInAction(() => deleteProduct
      this.returnUpdateProduct = aaa.message;
    })
  }

  getProductBySkuDelete = async (sku) => {
    const aaa = await this.productService.getBySkuDelete(sku)
    runInAction(() => {
      this.returnProductDeleteBySku = aaa;
    })
  }

  deleteProduct = async (id) => {
    const aaa = await this.productService.deleteProduct(id)
    runInAction(() => {
      this.returnDeleteProduct = aaa;
    })
  }
}

decorate(ProductStore, {
  returnProducts: observable,
  products: observable,
  returnProductBySku: observable,
  returnUpdateProduct: observable,
  returnProductDeleteBySku: observable,
  returnDeleteProduct: observable,
  getProduct: action,
  postProduct: action,
  getProductBySku: action,
  putProduct: action,
  deleteProduct: action
});

const store = new ProductStore();
export default store;
