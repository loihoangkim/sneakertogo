import React, { Component } from "react";
import Swal from 'sweetalert2'
import axios from "axios";
import ProductFormImage from './ProductFormImage'
import ProductFormImage2 from './ProductFormImage2'
import ProductFormImage3 from './ProductFormImage3'
import AddNewProduct from "./AddNewProduct";


class ModelAdd extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            "option": "trang chủ"
        }
    }

    validateForm = () => {
        //validate cho tên sản phẩm
        let errorOfName = "";
        let name = document.getElementById("inputName").value;
        if (name === "") {
            errorOfName = errorOfName + "Tên sản phẩm không được bỏ trống!\n";
        }
        if (name.length > 50) {
            errorOfName += "Tên sản phẩm chứa tối đa 50 ký tự.\n";
        }

        let errorOfMota = "";
        let Mota = document.getElementById("inputDescreption").value;
        if (Mota === "") {
            errorOfMota = errorOfMota + "Mô tả sản phẩm không được bỏ trống!\n";
        }
        if (name.length > 500) {
            errorOfMota += "Mô tả sản phẩm chứa tối đa 500 ký tự.\n";
        }
        if (errorOfName || errorOfMota) {
            Swal.fire(
                'Cảnh báo\n\n Dữ liệu không hợp lệ',
                '',
                'error'
            )
            document.getElementById("errorOfMota").innerHTML = typeof errorOfMota === "undefined" ? "" : errorOfMota;
            document.getElementById("errorOfName").innerHTML = typeof errorOfName === "undefined" ? "" : errorOfName;

        }
        else {
            this.alertComfirm();
        }
        //console.log(errorOfName)
        //this.alertComfirm();
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
            title: 'Xác nhận thêm?',
            text: "Bạn có thật sự muốn thêm thương hiệu này này?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Thêm',
            cancelButtonText: 'Hủy',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById("submituploadProduc1").click();
                document.getElementById("submituploadProduc2").click();
                document.getElementById("submituploadProduc3").click();
                this.props.postData();
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

    // renderComboboxBrand = () => {
    //     let config = this.props.getConfigToken();
    //     axios.get("https://localhost:7193/api/v1/Brands", config)
    //         .then((response) => {
    //             this.setState({
    //                 Brands: response.data,
    //             });
    //         });
    //     return this.state.Brands.map((brand, index) => {
    //         return (
    //             <option value={brand.brandId}>{brand.name}</option>
    //         );
    //     });
    // }

    render() {
        const errorLabel = {
            color: "red",
            padding: "10px",
        }
        if (this.props.showAddModel === false) return null;
        else {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Thêm sản phẩm</h5>
                        {/* Vertical Form */}
                        <form className="row g-3">
                            <div className="col-12">
                                <label htmlFor="inputName" className="form-label">
                                    Tên sản phẩm
                                </label>
                                <input type="text" className="form-control" id="inputName"
                                    onChange={(event) => this.props.handleFormNameChange(event.target.value)}
                                    value={this.props.name} />
                                <label id="errorOfName" className="text-danger"></label>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputName" className="form-label">
                                    Thương hiệu
                                </label>
                                <select class="form-select" aria-label="Default select example" id="brandIdOfModel"
                                    value={this.props.brandIDAdd}
                                    onChange={(event) => this.props.handleFormBrandChange(event.target.value)}>
                                    {this.props.renderComboboxBrand()}
                                </select>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputName" className="form-label">
                                    Danh mục sản phẩm
                                </label>
                                <select class="form-select" aria-label="Default select example" id="categoryIdOfModel"
                                    value={this.props.categoryIdAdd}
                                    onChange={(event) => this.props.handleFormCategoryChange(event.target.value)}>
                                    {this.props.renderComboboxCategory()}
                                </select>
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputPassword4" className="form-label">
                                    Mô tả
                                </label>
                                <textarea className="form-control" id="inputDescreption" rows="4" cols="50"
                                    onChange={(event) => this.props.handleFormDescreptionChange(event.target.value)}
                                    value={this.props.descreption} />
                                <label id="errorOfMota" className="text-danger"></label>
                            </div>
                        </form>
                        {/* Vertical Form */}
                    </div>
                    <div className="card-body">
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">
                                Hình ảnh 1
                            </label>
                            <ProductFormImage />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">
                                Hình ảnh 2
                            </label>
                            <ProductFormImage2 />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">
                                Hình ảnh 3
                            </label>
                            <ProductFormImage3 />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="px-2 mt-3">
                            <button type="button" className="btn btn-primary px-5 p-2" style={{ marginRight: 50 }}
                                onClick={() => this.validateForm()}
                            >Thêm
                            </button>
                            <button type="button" className="btn btn-secondary px-5 p-2" style={{ marginRight: 50 }}
                                onClick={() => this.props.deleteStateValue()}>
                                Xóa
                            </button>
                            <button type="button" className="btn btn-info px-5 p-2" style={{ marginRight: 50 }}
                                onClick={() => this.props.onOffModelAdd()}
                            >Trở về
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default ModelAdd;