import React, { Component } from "react";
import axios from "axios";
import ModelList from "./ModelList";
import ModelAdd from "./ModelAdd";
import Swal from 'sweetalert2';
import ModelEdit from "./ModelEdit";
import EditProduct from "./EditProduct";


class ModelManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddModel: false,
            showEditModel: false,
            showListModel: true,
            Models: [],
            newCode: '',
            name: '',
            descreption: '',
            Brands: [],
            Categories: [],
            brandID: 0,
            newCodeImages1: 0,
            newCodeImages2: 0,
            newCodeImages3: 0,
            products: [],
            brandIDAdd: 0,
            categoryIdAdd: 0,
            userId: sessionStorage.getItem("UserId"),
            productToEdit: {},
            editProductScreen: false,
            sizeEdit:0,
            priceEdit:0,
            quantityEdit:0,
            fakePriceEdit:0,
            importPriceEdit:0,
            idProductToEdit: 0,
        };
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

    componentDidMount = (
        url = "https://localhost:7193/api/v1/Models/all"
    ) => {
        this.getData(url);
    };

    getData = (url) => {
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                Models: response.data,
            });
        });
    }

    getNewCode = () => {
        let url = 'https://localhost:7193/api/v1/Models/new-code';
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                newCode: response.data,
            });
        });
    }

    getNewCodeImage = () => {
        let url1 = 'https://localhost:7193/api/Images/new-code';
        let config = this.getConfigToken();
        axios.get(url1, config).then((response) => {
            this.setState({
                newCodeImages1: response.data,
            });
        });
    }

    getNewCodeImage2 = () => {
        let url1 = 'https://localhost:7193/api/Images/new-code2';
        let config = this.getConfigToken();
        axios.get(url1, config).then((response) => {
            this.setState({
                newCodeImages2: response.data,
            });
        });
    }

    getNewCodeImage3 = () => {
        let url1 = 'https://localhost:7193/api/Images/new-code3';
        let config = this.getConfigToken();
        axios.get(url1, config).then((response) => {
            this.setState({
                newCodeImages3: response.data,
            });
        });
    }

    getIdBrand = (value) => {
        this.setState({
            brandID: value,
        })
    }

    postData = () => {
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
        // var fileName2 = this.state.name + '(2).png';
        // var fileName3 = this.state.name + '(3).png';

        axios
            .post("https://localhost:7193/api/v1/Models", {
                ModelId: this.state.newCode,
                name: this.state.name,
                descreption: this.state.descreption,
                brandID: this.state.brandIDAdd,
                categoryID: this.state.categoryIdAdd,
                createAt: date,
                createBy: this.state.userId,
                updateAt: date,
                updateBy: this.state.userId,
                isDelete: 0,
                totalQuantity: 0,
                totalOrder: 0,
                totalRevenue: 0,
                totalSales: 0, 

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
                Swal.fire(
                    'Không thể thực hiện thêm!',
                    'Đã xảy ra một vấn đề nào đó',
                    'warning'
                )
                console.log(error);
            });
        //this.deleteStateValue();
        this.componentDidMount();
        this.onOffModelAdd();
        return this.postImage();
    };

    postImage = () => {
        this.postImage1();
    }

    postImage1 = () => {
        var fileName = this.state.name + '(1).png';
        let config = this.getConfigToken();
        axios
            .post("https://localhost:7193/api/Images", {
                imageId: this.state.newCodeImages1,
                path: fileName,
                alt: "string",
                isDelete: "false",
                modelId: this.state.newCode,
            }, config);

        return this.postImage2();
    }

    postImage2 = () => {
        var fileName2 = this.state.name + '(2).png';
        let config = this.getConfigToken();
        axios
            .post("https://localhost:7193/api/Images", {
                imageId: this.state.newCodeImages2,
                path: fileName2,
                alt: "string",
                isDelete: "false",
                modelId: this.state.newCode,
            }, config);

        return this.postImage3();
    }

    postImage3 = () => {
        var fileName3 = this.state.name + '(3).png';
        let config = this.getConfigToken();
        axios
            .post("https://localhost:7193/api/Images", {
                imageId: this.state.newCodeImages3,
                path: fileName3,
                alt: "string",
                isDelete: "false",
                modelId: this.state.newCode,
            }, config);
    }


    getProductList = (id) => {
        let config = this.getConfigToken();
        let urlProduct = 'https://localhost:7193/api/Products/filter?id=' + id;
        axios.get(urlProduct, config).then((response) => {
            this.setState({
                product: response.data,
            });
        });
    }

    deleteProduct = (value) => {
        let config = this.getConfigToken();
        let url = 'https://localhost:7193/api/Products/' + value;
        axios.delete(url, config).then((response) => {
            Swal.fire(
                'Xóa thành công!',
                'Thay đổi đã xảy ra',
                'success'
            )
        });
    }

    renderProductList = () => {
        return this.state.products.map((product, index) => {
            return (
                <tr>
                    <td style={{ width: "10%" }}>
                        {index + 1}
                    </td>
                    <td>
                        {product.size}
                    </td>
                    <td>{product.price}</td>
                    <td>
                        {product.quanlityRemainning}
                    </td>
                    <td>
                        <button type="button" className="btn btn-danger" onClick={() => this.deleteProduct(product.productId)} >Xóa</button>
                        <button type="button" className="btn btn-success" onClick={() => this.onProductEdit(product)} >Sửa</button>
                    </td>
                </tr>
            );
        });
    }

    

    clearInputModel = () => {
        this.setState({
            name: '',
            descreption: '',
        })
    }


    renderModelList = () => {
        return this.state.Models.map((Model, index) => {
            return (
                <tr>
                    <td style={{ width: "10%" }}>
                        {index + 1}
                    </td>
                    <td>
                        <img src={"./assets/Images/" + Model.name + "(1).png"} alt="image11" style={{ width: 100 }} />
                    </td>
                    <td>{Model.name}</td>
                    <td>
                        <button type="button"
                            className="btn btn-warning p-3 ms-3"
                            style={{ marginTop: -70 }}
                            onClick={() => this.onOffModelEdit(Model)}
                        >
                            Chi tiết
                        </button>
                    </td>
                </tr>
            );
        });
    }



    onOffModelAdd = () => {
        this.getNewCode();
        this.getNewCodeImage();
        this.getNewCodeImage2();
        this.getNewCodeImage3();
        this.clearInputModel();
        this.setState({
            showListModel: !this.state.showListModel,
            showAddModel: !this.state.showAddModel,
        });
    }

    onOffModelEdit = (Model) => {
        // this.getProductList(Model.modelId);
        let config = this.getConfigToken();
        let urlProduct = 'https://localhost:7193/api/Products/filter?id=' + Model.modelId;
        axios.get(urlProduct, config).then((response) => {
            this.setState({
                products: response.data,
                name: Model.name,
                showListModel: !this.state.showListModel,
                showEditModel: !this.state.showEditModel,
                descreption: Model.descreption,
                modelIdToEdit: Model.modelId,
            });
        });
        //console.log(this.state.products);
        // this.setState({
        //     name: Model.name,
        //     showListModel: !this.state.showListModel,
        //     showEditModel: !this.state.showEditModel,
        //     descreption: Model.descreption
        // });
    }

    offModelAdd = () => {
        this.setState({
            showListModel: !this.state.showListModel,
            showEditModel: !this.state.showEditModel,
        });
    }

    handleFormNameChange = (value) => {
        this.setState({
            name: value,
        });
    };

    handleFormSlugChange = (value) => {
        this.setState({
            slug: value,
        });
    };

    handleFormDescreptionChange = (value) => {
        this.setState({
            descreption: value,
        });
    };

    handleFormBrandChange = (value) => {
        this.setState({
            brandIDAdd: value,
        });
        console.log(this.state.brandIDAdd)
    }

    handleFormCategoryChange = (value) => {
        this.setState({
            categoryIdAdd: value,
        });
        console.log(this.state.categoryIdAdd)
    }

    onProductEdit = (product) => {
        this.setState({
            editProductScreen: true,
            sizeEdit:product.size,
            priceEdit:product.price,
            quantityEdit:product.quanlityRemainning,
            fakePriceEdit:product.priceFake,
            importPriceEdit:product.ImportPrice,
            idProductToEdit: product.productId,
            idModelOfProductEdit: product.modelId
        })
    }

    offProductEdit = () => {
        this.setState({
            editProductScreen: false,
        })
    }

    handleFormSizeEditChange = (value) => {
        this.setState({
            sizeEdit: value,
        })
    }

    handleFormPriceEditchange = (value) => {
        this.setState({
            priceEdit: value,
        })
    }

    handleFormQuantityEditchange = (value) => {
        this.setState({
            quantityEdit: value,
        })
    }

    handleFormImportPriceEditChange = (value) => {
        this.setState({
            importPriceEdit: value,
        })
    }

    handleFormFakePriceEditChange = (value) => {
        this.setState({
            fakePriceEdit: value,
        })
    }

    updateProduct = () => {
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
        var url = 'https://localhost:7193/api/Products/' + this.state.idProductToEdit
        axios
            .put(url, {
                productId: this.state.idProductToEdit,
                size: this.state.sizeEdit,
                price: this.state.priceEdit,
                quanlityRemainning: this.state.quantityEdit,
                modelId: this.state.idModelOfProductEdit,
                isDelete: 'false',
                createAt: date,
                createBy: this.state.userId,
                updateAt: date,
                updateBy: this.state.userId,
                priceFake: this.state.fakePriceEdit,
                ImportPrice: this.state.importPriceEdit
            }, config)
            .then( response => {
                    Swal.fire(
                        'Sửa thành công!',
                        'Thay đổi đã xảy ra',
                        'success'
                    )
            })
            .catch(error => {
                Swal.fire(
                    'Không thể thực hiện Sửa!!',
                    'Đã xảy ra một vấn đề nào đó',
                    'warning'
                )
            });
    }


    renderComboboxBrand = () => {
        let config = this.getConfigToken();
        axios.get("https://localhost:7193/api/v1/Brands", config)
            .then((response) => {
                this.setState({
                    Brands: response.data,
                });
            });
        return this.state.Brands.map((brand, index) => {
            return (
                <option value={brand.brandId}>{brand.name}</option>
            );
        });
    }

    renderComboboxCategory = () => {
        let config = this.getConfigToken();
        axios.get("https://localhost:7193/api/v1/Categories", config)
            .then((response) => {
                this.setState({
                    Categories: response.data,
                });
            });
        return this.state.Categories.map((category, index) => {
            return (
                <option value={category.categoryId}>{category.name}</option>
            );
        });
    }

    deleteStateValue = () => {
        this.setState({
            name: '',
            descreption: '',
        })
    }

    render() {
        return (
            <div>
                <ModelList
                    showListModel={this.state.showListModel}
                    renderModelList={this.renderModelList}
                    onOffModelAdd={this.onOffModelAdd}
                />
                <ModelAdd
                    Brands={this.state.Brands}
                    renderComboboxBrand={this.renderComboboxBrand}
                    renderComboboxCategory={this.renderComboboxCategory}
                    showAddModel={this.state.showAddModel}
                    descreption={this.state.descreption}
                    name={this.state.name}
                    handleFormDescreptionChange={this.handleFormDescreptionChange}
                    handleFormNameChange={this.handleFormNameChange}
                    postData={this.postData}
                    getIdBrand={this.getIdBrand}
                    onOffModelAdd={this.onOffModelAdd}
                    brandIDAdd={this.state.brandIDAdd}
                    categoryIdAdd={this.state.categoryIdAdd}
                    handleFormBrandChange={this.handleFormBrandChange}
                    handleFormCategoryChange={this.handleFormCategoryChange}
                    deleteStateValue={this.deleteStateValue}
                />
                <ModelEdit
                    showEditModel={this.state.showEditModel}
                    onOffModelEdit={this.onOffModelEdit}
                    renderComboboxBrand={this.renderComboboxBrand}
                    renderComboboxCategory={this.renderComboboxCategory}
                    name={this.state.name}
                    offModelAdd={this.offModelAdd}
                    descreption={this.state.descreption}
                    renderProductList={this.renderProductList}
                    modelIdToEdit={this.state.modelIdToEdit}
                />
                <EditProduct
                    sizeEdit={this.state.sizeEdit}
                    priceEdit={this.state.priceEdit}
                    quantityEdit={this.state.quantityEdit}
                    fakePriceEdit={this.state.fakePriceEdit}
                    importPriceEdit={this.state.importPriceEdit}
                    editProductScreen={this.state.editProductScreen}
                    handleFormSizeEditChange =  {this.handleFormSizeEditChange}
                    handleFormPriceEditchange =  {this.handleFormPriceEditchange}
                    handleFormQuantityEditchange =  {this.handleFormQuantityEditchange}
                    handleFormImportPriceEditChange =  {this.handleFormImportPriceEditChange}
                    handleFormFakePriceEditChange =  {this.handleFormFakePriceEditChange}
                />
                <button type="button" className="btn btn-success px-5 p-2" style={{ display: this.state.editProductScreen ? 'inline' : 'none',margin: 20 }}
                    id="saveButton" onClick={() => this.updateProduct()}
                >Lưu
                </button>
                <button type="button" className="btn btn-info px-5 p-2" style={{ display: this.state.editProductScreen ? 'inline' : 'none' }}
                    id="saveButton" onClick={() => this.offProductEdit()}
                >Trở về
                </button>
            </div>

        );
    }
}
export default ModelManagement;