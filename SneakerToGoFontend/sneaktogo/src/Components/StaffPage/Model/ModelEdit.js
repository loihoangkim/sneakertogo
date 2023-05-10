import React, { Component } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import AddNewProduct from "./AddNewProduct";


class ModelEdit extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            "option": "trang chủ",
            addNewProductScreen: false,
            showSave: false,
            size: 0,
            quantity: 0,
            price: 0,
            newProductCode: 0,
            importPrice: 0,
            fakePrice: 0,
            userId : sessionStorage.getItem("UserId")
        }
    }

    validateForm = () => {
        // validate cho tên danh mục
        // let errorOfName = "";
        // let name = document.getElementById("inputName").value;
        // if (name === "") {
        //     errorOfName = errorOfName + "Tên danh mục không được bỏ trống!\n";
        // }
        // if (name.length > 50) {
        //     errorOfName += "Tên dịch vụ chứa tối đa 50 ký tự.\n";
        // }
        // if (errorOfName) {
        //     document.getElementById("errorOfName").innerHTML = typeof errorOfName === "undefined" ? "" : errorOfName;
        // }
        // else {
        //     this.alertComfirm();
        // }
        this.alertComfirm();
    }

    getNewCode = () => {
        let url = 'https://localhost:7193/api/Products/new-code';
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                newProductCode: response.data,
            });
        });
    }

    onOffAddProduct = () => {
        this.getNewCode();
        this.setState({
            addNewProductScreen: !this.state.addNewProductScreen,
            showSave : !this.state.showSave,
        });
        this.deleteForm();
    }

    getConfigToken() {
        let config = {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("Token"),
                "Content-type": "application/json"
            }
        };
        return config;
    }

    postProductData = () => {
        let config = this.getConfigToken();
        var today = new Date();
        var month;
        if ((today.getMonth() + 1) < 10) {
            month = '0' + (today.getMonth() + 1);
        }
        else {
            month = (today.getMonth() + 1);
        }
        var day;
        if (today.getDate() < 10) {
            day = '0' + today.getDate();
        }
        else {
            day = today.getDate();
        }
        var date = today.getFullYear() + '-' + month + '-' + day;
        axios
            .post("https://localhost:7193/api/Products", {
                productId: this.state.newProductCode,
                size: this.state.size,
                price: this.state.price,
                quanlityRemainning: this.state.quantity,
                modelId: this.props.modelIdToEdit,
                isDelete: 'false',
                createAt: date,
                createBy: this.state.userId,
                updateAt: date,
                updateBy: this.state.userId,
                priceFake: this.state.fakePrice,
                ImportPrice: this.state.importPrice
            }, config)
            .then(response => {
                if (response.data) {
                    Swal.fire(
                        'Thêm thành công!',
                        'Thay đổi đã xảy ra',
                        'success'
                    )
                }
                else {
                    Swal.fire(
                        'Không thể thực hiện thêm!',
                        'Đã xảy ra một vấn đề nào đó',
                        'warning'
                    )
                }
            })
            .catch(error => {
                //console.log(error)
                Swal.fire(
                    'Không thể thực hiện thêm!!',
                    'Đã xảy ra một vấn đề nào đó',
                    'warning'
                )
            });
        this.onOffAddProduct();
        this.deleteForm();
    }

    deleteForm() {
        this.setState({
            size: 0,
            quantity: 0,
            price: 0,
            fakePrice: 0,
            importPrice: 0
        })
    }

    handleFormSizeChange = (value) => {
        this.setState({
            size: value,
        });
    };

    handleFormPricehange = (value) => {
        this.setState({
            price: value,
        });
    };

    handleFormQuantityhange = (value) => {
        this.setState({
            quantity: value,
        });
    };

    handleFormFakePriceChange = (value) => {
        this.setState({
            fakePrice: value,
        });
    }

    handleFormImportPriceChange = (value) => {
        this.setState({
            importPrice: value,
        });
    }





    alertComfirm = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Xác nhận sửa?',
            text: "Bạn có thật sự muốn thêm sản này?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Thêm',
            cancelButtonText: 'Hủy',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.postProductData();
                // end comfirmed
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Không có gì xảy ra',
                    'success'
                )
            }
        })
    }

    render() {
        const errorLabel = {
            color: "red",
            padding: "10px",
        }
        if (this.props.showEditModel === false) return null;
        else {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Thông tin sản phẩm</h5>
                        {/* Vertical Form */}
                        <form className="row g-3">
                            <div className="col-12">
                                <label htmlFor="inputName" className="form-label">
                                    Tên sản phẩm
                                </label>
                                <input type="text" className="form-control" id="inputName"
                                    onChange={(event) => this.props.handleFormNameChange(event.target.value)}
                                    value={this.props.name} />
                            </div>
                            {/* <div className="col-12">
                                <label htmlFor="inputName" className="form-label">
                                    Thương hiệu
                                </label>
                                <select class="form-select" aria-label="Default select example" id="brandIdOfModel">
                                    {this.props.renderComboboxBrand()}
                                </select>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputName" className="form-label">
                                    Danh mục sản phẩm
                                </label>
                                <select class="form-select" aria-label="Default select example" id="categoryIdOfModel">
                                    {this.props.renderComboboxCategory()}
                                </select>
                            </div> */}
                            <div className="col-12">
                                <label htmlFor="inputPassword4" className="form-label">
                                    Mô tả
                                </label>
                                <textarea className="form-control" id="inputPassword4" rows="4" cols="50"
                                    onChange={(event) => this.props.handleFormDescreptionChange(event.target.value)}
                                    value={this.props.descreption} />
                            </div>
                        </form>
                        {/* Vertical Form */}
                    </div>
                    <div className="card-body">
                        <label htmlFor="inputAddress" className="form-label">
                            Ảnh sản phẩm
                        </label>
                        <div className="row">
                            <div className="col-4">
                                <img src={"./assets/Images/" + this.props.name + "(1).png"} style={{ width: 300 }} />
                            </div>
                            <div className="col-4">
                                <img src={"./assets/Images/" + this.props.name + "(2).png"} style={{ width: 300 }} />
                            </div>
                            <div className="col-4">
                                <img src={"./assets/Images/" + this.props.name + "(3).png"} style={{ width: 300 }} />
                            </div></div>
                    </div>
                    <div className="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered align-middle">
                                <thead class="table-dark fs-3">
                                    <tr>
                                        <th style={{ width: 200 }}>STT</th>
                                        <th style={{ width: 200 }}>Size</th>
                                        <th style={{ width: 200 }}>Giá </th>
                                        <th style={{ width: 200 }}>Số lượng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.renderProductList()}
                                </tbody>
                            </table>
                        </div>
                        <AddNewProduct
                            addNewProductScreen={this.state.addNewProductScreen}
                            size={this.state.size}
                            price={this.state.price}
                            quantity={this.state.quantity}
                            fakePrice = {this.state.fakePrice}
                            importPrice = {this.state.importPrice}
                            handleFormSizeChange = {this.handleFormSizeChange}
                            handleFormPricehange = {this.handleFormPricehange}
                            handleFormQuantityhange = {this.handleFormQuantityhange}
                            handleFormImportPriceChange = {this.handleFormImportPriceChange}
                            handleFormFakePriceChange = {this.handleFormFakePriceChange}
                        />
                        <button type="button" className="btn btn-primary px-5 p-2" style={{ marginRight: 50,display:!this.state.showSave ? 'inline' : 'none' }}
                            onClick={() => this.onOffAddProduct()}
                        >Thêm phân loại
                        </button>
                        <button type="button" className="btn btn-success px-5 p-2" style={{ display:this.state.showSave ? 'inline' : 'none' }}
                            onClick={() => this.validateForm()} id="saveButton"
                        >Lưu
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="d-grid gap-2" style={{ marginTop: 20 }}>
                            <button type="button" className="btn btn-info px-5 p-2" style={{ marginRight: 50 }}
                                onClick={() => this.props.offModelAdd()}
                            >Trở về
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default ModelEdit;