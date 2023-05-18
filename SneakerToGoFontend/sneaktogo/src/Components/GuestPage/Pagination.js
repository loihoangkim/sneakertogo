import React, { Component } from "react";

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
                <nav aria-label="Page navigation example text-center" className="pt-2 " style={{margin: 20}}>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} onClick={() => this.props.changePage('-')} >Previous</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} onClick={() => this.props.changePage('1')} >1</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} onClick={() => this.props.changePage('2')} >2</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} onClick={() => this.props.changePage('3')} >3</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} onClick={() => this.props.changePage('4')} >4</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} onClick={() => this.props.changePage('5')} >5</button>
                    <button className="btn btn-info btn-lg .px-2 " style={{ marginRight: 20 }} onClick={() => this.props.changePage('+')} >Next</button>
                </nav>
            </div>
        );
    }
}
export default PaginationGuest;