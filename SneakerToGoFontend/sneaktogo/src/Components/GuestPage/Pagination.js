import React, { Component } from "react";
import $, { get } from "jquery";

class PaginationGuest extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            "option": "trang chủ"
        }
    }
    render() {
        if( this.props.displayList === false ) return null;
        return (
            <div className="container">
                <nav aria-label="Page navigation example text-center" className="pt-2 ">
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} >Previous</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} >1</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} >2</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} >3</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} >4</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} >5</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} >Next</button>
                </nav>
            </div>
        );
    }
}
export default PaginationGuest;