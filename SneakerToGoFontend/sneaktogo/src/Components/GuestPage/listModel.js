import React, { Component } from "react";
import $, { get } from "jquery";

class ListModel extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            "option": "trang chủ"
        }
    }

    //renderListItem = () => {
        // return this.props.Models.map((model, index) => {
        //     return (
        //         <div className="col-lg-4 col-md-6 mb-4">
        //             <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
        //                 <img src={"./assets/Images/" + model.name + "(1).png"} style={{ width: 416,height:400 }} />
        //                 <div
        //                     className="mask"
        //                     style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        //                 >
        //                     <div className="d-flex justify-content-start align-items-start h-100">
        //                         <h5>
        //                             <span className="badge bg-light pt-2 ms-3 mt-3 text-dark">
        //                                 {model.name}
        //                             </span>
        //                         </h5>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // });
    //}

    render() {
        if( this.props.displayList === false) return null;
        else {
            return (
                <section style={{ backgroundColor: "#eee" }}>
                    <div className="flex-container py-5">
                        <div className="h2">Danh sách sản phẩm</div>
                        <div></div>
                        <div className="row">
                            {this.props.renderListItem()}
                        </div>
                    </div>
                </section>
            );
        }
    }
}
export default ListModel;