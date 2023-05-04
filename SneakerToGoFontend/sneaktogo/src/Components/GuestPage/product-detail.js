import React, { Component } from "react";
import $, { get } from "jquery";

class ProductDetail extends Component {
    // constructor(pros){
    //   super(pros)
    //   this.state = {
    //   }
    // }


    render() {
        if (this.props.displayDetail === false) return null;
        return (
            <div>
                {this.props.renderDetailProduct()}
            </div>
        );
    }
}
export default ProductDetail;