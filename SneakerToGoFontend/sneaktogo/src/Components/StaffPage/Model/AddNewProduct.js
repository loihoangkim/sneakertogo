import React, { Component } from "react";
import $, { get } from "jquery";

class AddNewProduct extends Component {
    render() {
        if( this.props.addNewProductScreen === false) return null;
        return (
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <label>Size</label>
                    </div>
                    <div className="col-4">
                        <label>Giá bán thực</label>
                    </div>
                    <div className="col-4">
                        <label>Số lượng</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <input type="number" id="sizeOfProduct" 
                            value={this.props.size}
                            onChange={(event) => this.props.handleFormSizeChange(event.target.value)}
                        />
                    </div>
                    <div className="col-4">
                        <input type="number" id="priceOfProduct" 
                            value={this.props.price}
                            onChange={(event) => this.props.handleFormPricehange(event.target.value)}
                        />
                    </div>
                    <div className="col-4">
                        <input type="number" min={1} id="amountOfProduct" 
                            value={this.props.quantity}
                            onChange={(event) => this.props.handleFormQuantityhange(event.target.value)}
                        />
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-6">
                        <label>Giá nhập</label>
                    </div>
                    <div className="col-6">
                        <label>Giá chưa giảm</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <input type="number" id="sizeOfProduct" 
                            value={this.props.importPrice}
                            onChange={(event) => this.props.handleFormImportPriceChange(event.target.value)}
                        />
                    </div>
                    <div className="col-6">
                        <input type="number" id="priceOfProduct" 
                            value={this.props.fakePrice}
                            onChange={(event) => this.props.handleFormFakePriceChange(event.target.value)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default AddNewProduct;