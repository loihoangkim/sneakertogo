import React, { Component } from "react";


class ModelList extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            "option": "trang chủ"
        }
    }

    render() {
        if (this.props.showListModel === false) return null;
        else {
            //console.log(this.props.categories)
            return (
                <div>
                    <div class="container b-2" style={{margin: 20}}>
                        <div class="row">
                            <div class="col-10 text-left p-0">
                                <p class="h2">Danh sách sản phẩm</p>
                            </div>
                            <div class="col-2">
                                <button className="btn btn-primary text-center" style={{marginTop: 12}}
                                    onClick = { () => this.props.onOffModelAdd()}
                                >
                                    Thêm sản phẩm
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="table table-bordered">
                        <table class="table table-bordered align-middle">
                            <thead class="table-dark fs-3">
                                <tr>
                                    <th>STT</th>
                                    <th>Hình ảnh</th>
                                    <th>Tên sản</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.renderModelList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
}
export default ModelList;