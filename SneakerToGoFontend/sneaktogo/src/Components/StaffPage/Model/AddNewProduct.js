import React, { Component } from "react";
import $, { get } from "jquery";

class AddNewProduct extends Component {
    render() {
        return (
            <div className="card-body">
                <div className="row">
                    <div className="col-4">
                        <label>Size</label>
                    </div>
                    <div className="col-4">
                        <label>Giá bán</label>
                    </div>
                    <div className="col-4">
                        <label>Số lượng</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <input type="number" id="sizeOfProduct" />
                    </div>
                    <div className="col-4">
                        <input type="number" id="priceOfProduct" />
                    </div>
                    <div className="col-4">
                        <input type="number" min={1} id="amountOfProduct" />
                    </div>
                </div>
            </div>
        );
    }
}
export default AddNewProduct;