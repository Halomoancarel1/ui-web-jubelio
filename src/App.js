import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';



@inject('ProductStore')


@observer class App extends Component {


    findProduct = async (e) => {
      e.preventDefault();
      const productNo = this.product.value;
      await this.props.ProductStore.getProduct(productNo)
      this.product.value = '';
    }

    postProduct = async (e) => {
      e.preventDefault();
      let returnValue = new Object();
      returnValue.product_name = this.refs.name.value;
      returnValue.product_code = this.refs.code.value;
      returnValue.product_url = this.refs.image.value;
      returnValue.product_desc = this.refs.desc.value;
      returnValue.product_price = parseInt(this.refs.price.value);
      await this.props.ProductStore.postProduct(returnValue)
    }

    findProductBySku = async (e) => {
      e.preventDefault();
      const sku = this.sku.value;
      await this.props.ProductStore.getProductBySku(sku)

    }

    updateProduct = async (e) => {
      e.preventDefault();
      let returnValueLocal = new Object();
      returnValueLocal.id = this.refs.idLocal.value;
      returnValueLocal.product_name = this.refs.nameLocal.value;
      returnValueLocal.product_desc = this.refs.descLocal.value;
      returnValueLocal.product_price = parseInt(this.refs.priceLocal.value);
      await this.props.ProductStore.putProduct(returnValueLocal)
    }

    findProductBySkuDelete = async (e) => {
      e.preventDefault();
      const sku = this.skuDelete.value;
      await this.props.ProductStore.getProductBySkuDelete(sku)

    }

    deleteProductBySku = async (e) => {
      e.preventDefault();
      const id = this.idLocalDelete.value;
      await this.props.ProductStore.deleteProduct(id)
    }

    render(){
    const { ProductStore } = this.props;
    console.log(ProductStore.returnProductBySku)

    return (
      <div className="App">

        <form>
          <h1>Get From Elevenia</h1>
          <input type="text" placeholder="Enter Product Code" ref={input => this.product = input} />
          <button onClick={e => this.findProduct(e)} >Find Code</button><br/>

          <h2>{ProductStore.returnProducts.message}</h2>
          <img src={ProductStore.products.productimage} alt="Gambar Product" width={300} height={300}/><br/>
          <h4>{ProductStore.products.productname}</h4><br/>
          <textarea readOnly  ref="desc" type="text" value={ProductStore.products.productdescription} cols={40} rows={10} /><br/>
          <input readOnly  ref="code"  type="text" value={ProductStore.products.productcode} /><br/>
          <input readOnly  ref="price"  type="text" value={ProductStore.products.productprice} /><br/>
          <button onClick={e => this.postProduct(e)} >Save Product</button><br/>

          <input ref="image" type="hidden" value={ProductStore.products.productimage}   />
          <input ref="name" type="hidden" value={ProductStore.products.productname}/>

        </form>

        <form>
          <h1>Get From Database By SKU</h1>
          <input type="text" placeholder="Enter SKU" ref={input => this.sku = input} />
          <button onClick={e => this.findProductBySku(e)} >Find Code</button><br/>

          <img src={ProductStore.returnProductBySku.product_url} alt="Gambar Product" width={300} height={300}/><br/>
          <h4>{ProductStore.returnProductBySku.product_name}</h4><br/>
          <textarea ref="descLocal" type="text" value={ProductStore.returnProductBySku.product_desc} cols={40} rows={10} /><br/>
          <input ref="codeLocal"  type="text" value={ProductStore.returnProductBySku.product_code} /><br/>
          <input ref="priceLocal"  type="text" value={ProductStore.returnProductBySku.product_price} /><br/>
          <button onClick={e => this.updateProduct(e)} >Update Product</button><br/>

          <input ref="imageLocal" type="hidden" value={ProductStore.returnProductBySku.product_url}   />
          <input ref="idLocal" type="hidden" value={ProductStore.returnProductBySku.id}   />
          <input ref="nameLocal" type="hidden" value={ProductStore.returnProductBySku.productname}/>

        </form>
        <form>
          <h1>Delete From Database By SKU</h1>
          <input type="text" placeholder="Enter SKU" ref={input => this.skuDelete = input} />
          <button onClick={e => this.findProductBySkuDelete(e)} >Find Code</button><br/>
          <img src={ProductStore.returnProductDeleteBySku.product_url} alt="Gambar Product" width={300} height={300}/><br/>
          <b>Hapus product berikut?</b><br/>
          <button onClick={e => this.deleteProductBySku(e)} >Delete Product</button><br/>

          <input ref="idLocalDelete" type="hidden" value={ProductStore.returnProductDeleteBySku.id}   />

        </form>
      </div>
    );
  }
}

export default App;
