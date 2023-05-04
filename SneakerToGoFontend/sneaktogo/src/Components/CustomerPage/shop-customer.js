import React, { Component } from "react";
import Navigation from "./../GuestPage/navigation";
import ListModel from "./../GuestPage/listModel";
import axios from "axios";
import PaginationGuest from './../GuestPage/Pagination'
import ProductDetail from './../GuestPage/product-detail'
import Swal from "sweetalert2";

class ShopCustomer extends Component {

    constructor(pros) {
        super(pros)
        this.state = {
            models: [],
            pageNumber: 1,
            displayList: true,
            displayDetail: false,
            idToDisplay: 0,
            modelDetail: null,
            productDetail: [],
            nameDetail: '',
            quantityStore: 0,
            desreptionDetail: '',
            numberToDisplay: 1,
            priceToDisplay: null,
            quantity: 1,
            productId: 0,
            modelName: '',
        }
        this.getData("https://localhost:7193/api/v1/Models?page=" + this.state.pageNumber);
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

    onQuantityChange = (value) => {
        this.setState({
            quantity: value,
        })
    }

    componentDidMount = (
        url = "https://localhost:7193/api/v1/Models?page=" + this.state.pageNumber
    ) => {
        this.getData(url);
        // console.log(url)
    };

    getData = (url) => {
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                models: response.data,
            });
            //console.log(response)
        });
        //console.log(this.state.models)
    }

    // openDetailPage = (id) => {
    //     this.getDetailModelData(id);
    //     this.onOffList();
    //     console.log(this.state.modelDetail)
    //     //console.log(id);
    // }

    onOffList = () => {
        //this.getDetailModelData(id);
        this.setState({
            displayList: !this.state.displayList,
            displayDetail: !this.state.displayDetail
        })
    }

    getDetailModelData = (id) => {
        var url = 'https://localhost:7193/api/v1/Models/' + id;
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                modelDetail: response.data,
                nameDetail: response.data.name,
                desreptionDetail: response.data.descreption,
            });
        });
        this.getDetailProductData(id);
        this.onOffList();
    }

    getDetailProductData = (id) => {
        var url = 'https://localhost:7193/api/Products/filter?id=' + id;
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                productDetail: response.data,
            });
        });
    }

    changeNumberToDisplay = (number) => {
        this.setState({
            numberToDisplay: number,
        })
    }

    renderDetailProductSize = () => {
        return this.state.productDetail.map((product, index) => {
            return (
                <div className="col-lg-1" style={{ border: 1 }}>
                    <button className="btn btn-primary"
                        onClick={() => this.showPrice(product.price, product.quanlityRemainning, product.productId,product.modelId)}
                    >{product.size}</button>
                </div>
            );
        });
    }


    showPrice = (price, quantity, productID, modelID) => {
        this.setState({
            priceToDisplay: price,
            quantityStore: quantity,
            productId: productID,
            modelIdToDisplay: modelID
        })
    }

    addToCart = () => {
        this.postCartDetailData();
    }

    postCartDetailData = () => {
        //var url = 'https://localhost:7193/api/CartDetails';
        let config = this.getConfigToken();
        var userId = sessionStorage.getItem("UserId");
        axios
            .post("https://localhost:7193/api/CartDetails", {
                cardId: userId,
                productId: this.state.productId,
                modelId: this.state.modelIdToDisplay,
                quantity: this.state.quantity,
                price: this.state.priceToDisplay,
                modelName: this.state.nameDetail
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
                        'Không thể thực hiện thêm!!',
                        'Đã xảy ra một vấn đề nào đó',
                        'warning'
                    )
                }
            })
            .catch(error => {
                Swal.fire(
                    'Không thể thực hiện thêm!',
                    'Đã xảy ra một vấn đề nào đó',
                    'warning'
                )
                console.log(error);
            });

    }

    checkQuantity = () => {
        //console.log(this.state.quantity)
        if (this.state.quantity < 1) {
            Swal.fire(
                'Không thể thêm!',
                'Số lượng đã nhỏ hơn 1',
                'warning'
            )
        }
        else if (this.state.quantity > this.state.quantityStore) {
            Swal.fire(
                'Không thể thêm!',
                'Số lượng thêm lớn hơn số lượng sẵn có',
                'warning'
            )
        }
        else {
            this.postCartDetailData();
            // console.log(sessionStorage.getItem("UserId"))
        }
    }



    renderDetailProduct = () => {
        return (
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-6">
                            <img
                                className="card-img-top mb-5 mb-md-0"
                                src={"./assets/Images/" + this.state.nameDetail + "(" + this.state.numberToDisplay + ").png"}
                                alt="..."
                                style={{ height: 500 }}
                            />
                            <div className="row">
                                <div className="col-4" onClick={() => this.changeNumberToDisplay(1)} >
                                    <img src={"./assets/Images/" + this.state.nameDetail + "(1).png"} style={{ width: 160 }}></img>
                                </div>
                                <div className="col-4" onClick={() => this.changeNumberToDisplay(2)} >
                                    <img src={"./assets/Images/" + this.state.nameDetail + "(2).png"} style={{ width: 160 }}></img>
                                </div>
                                <div className="col-4" onClick={() => this.changeNumberToDisplay(3)} >
                                    <img src={"./assets/Images/" + this.state.nameDetail + "(3).png"} style={{ width: 160 }}></img>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1 className="display-3 fw-bolder text-danger">
                                {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.state.priceToDisplay)}
                            </h1>
                            <h1 className="display-5 fw-bolder">{this.state.nameDetail}</h1>
                            <p className="lead">
                                {this.state.desreptionDetail}
                            </p>
                            <div className="container" style={{ paddingTop: 20 }}>
                                <div className="row">
                                    {this.renderDetailProductSize()}
                                </div>
                            </div>
                            <div className="d-flex" style={{ paddingTop: 20 }}>
                                <input
                                    className="form-control text-center me-3"
                                    id="inputQuantity"
                                    type="num"
                                    value={this.state.quantity}
                                    style={{ maxWidth: "3rem" }}
                                    onChange={(event) => this.onQuantityChange(event.target.value)}
                                />
                                <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={() => this.checkQuantity()}>
                                    <i className="bi-cart-fill me-1" />
                                    Thêm vào giỏ hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    renderListItem = () => {
        return this.state.models.map((model, index) => {
            return (
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="bg-image hover-zoom ripple shadow-1-strong rounded"
                        onClick={() => this.getDetailModelData(model.modelId)}
                    >
                        <img src={"./assets/Images/" + model.name + "(1).png"} style={{ width: 416, height: 400 }}
                            className="img-thumbnail cursor-pointer"
                            alt="big"
                        />
                        <div
                            className="mask"
                        >
                            <div className="d-flex text-center h-100 h3" style={{ marginLeft: 20 }}>
                                {model.name}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }



    render() {
        return (
            <div className="container">
                <Navigation
                    displayList={this.state.displayList}
                />
                <ListModel
                    getData={this.getData}
                    pageNumber={this.state.pageNumber}
                    models={this.models}
                    renderListItem={this.renderListItem}
                    displayList={this.state.displayList}
                />
                <PaginationGuest
                    displayList={this.state.displayList}
                />
                <ProductDetail
                    displayDetail={this.state.displayDetail}
                    idToDisplay={this.state.idToDisplay}
                    renderDetailProduct={this.renderDetailProduct}
                    modelDetail={this.state.modelDetail}
                />
            </div>
        );
    }
}
export default ShopCustomer;