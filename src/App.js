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

    render(){
    const { ProductStore } = this.props;

    return (
      <div className="App">

        <form>
          <input type="text" placeholder="Enter Product Code" ref={input => this.product = input} />
          <button onClick={e => this.findProduct(e)} >Find Code</button><br/>

          <img src={ProductStore.products.productimage} alt="Gambar Product" width={300} height={300}/><br/>
          <h4>{ProductStore.products.productname}</h4><br/>
          <textarea ref="desc" type="text" value={ProductStore.products.productdescription} cols={40} rows={10} /><br/>
          <input ref="code"  type="text" value={ProductStore.products.productcode} /><br/>
          <input ref="price"  type="text" value={ProductStore.products.productprice} /><br/>
          <button onClick={e => this.postProduct(e)} >Save Product</button><br/>

          <input ref="image" type="hidden" value={ProductStore.products.productimage}   />
          <input ref="name" type="hidden" value={ProductStore.products.productname}/>

        </form>
      </div>
    );
  }
}

export default App;
