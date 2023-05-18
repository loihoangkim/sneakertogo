import React, { Component } from "react";
import $, { get } from "jquery";

class EditProduct extends Component {
    render() {
        if( this.props.editProductScreen === false) return null;
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
                            value={this.props.sizeEdit}
                            onChange={(event) => this.props.handleFormSizeEditChange(event.target.value)}
                        />
                    </div>
                    <div className="col-4">
                        <input type="number" id="priceOfProduct" 
                            value={this.props.priceEdit}
                            onChange={(event) => this.props.handleFormPriceEditchange(event.target.value)}
                        />
                    </div>
                    <div className="col-4">
                        <input type="number" min={1} id="amountOfProduct" 
                            value={this.props.quantityEdit}
                            onChange={(event) => this.props.handleFormQuantityEditchange(event.target.value)}
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
                            value={this.props.importPriceEdit}
                            onChange={(event) => this.props.handleFormImportPriceEditChange(event.target.value)}
                        />
                    </div>
                    <div className="col-6">
                        <input type="number" id="priceOfProduct" 
                            value={this.props.fakePriceEdit}
                            onChange={(event) => this.props.handleFormFakePriceEditChange(event.target.value)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default EditProduct;