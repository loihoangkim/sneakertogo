import React, { Component } from "react";
import axios from "axios";
import ModelList from "./ModelList";
import ModelAdd from "./ModelAdd";
import Swal from 'sweetalert2'


class ModelManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddModel: false,
            showEditModel: false,
            showListModel: true,
            Models: [],
            newCode: '',
            logo: '',
            banner: '',
            name: '',
            slug: '',
            descreption: '',
            Brands: [],
            Categories: []
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
        url = "https://localhost:7193/api/v1/Models"
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

    postData = () => {
        let config = this.getConfigToken();
        axios
            .post("https://localhost:7193/api/v1/Models", {
                ModelId: this.state.newCode,
                name: this.state.Modelname,
                slug: this.state.Modelslug,
                descreption: this.state.descreption,
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
            });
        this.deleteStateValue();
        this.componentDidMount();
        this.onOffModelAdd();
    };

    renderModelList = () => {
        return this.state.Models.map((Model, index) => {
            return (
                <tr>
                    <td style={{ width: "10%" }}>
                        {index + 1}
                    </td>
                    <td>logooo</td>
                    <td>{Model.name}</td>
                    <td>{Model.slug}</td>
                    <td>
                        <button type="button"
                            className="btn btn-warning p-3 ms-3"
                            style={{ minWidth: 100 }}
                        //onClick={() => this.onModelEditForm(Model)}
                        >
                            Chỉnh sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success p-3 ms-3"
                            style={{ minWidth: 100 }}
                        //
                        >
                            Xóa
                        </button>
                    </td>
                </tr>
            );
        });
    }

    onImageLogoChange = event => {
        if (event.target.files && event.target.files[0]) {
          let logo = event.target.files[0];
          this.setState({
            logo: URL.createObjectURL(logo)
          });
        }
    };

    onImageBannerChange = event => {
        if (event.target.files && event.target.files[0]) {
          let banner = event.target.files[0];
          this.setState({
            banner: URL.createObjectURL(banner)
          });
        }
    };



    onOffModelAdd = () => {
        this.getNewCode();
        //this.renderComboboxBrand();
        
        this.setState({
            showListModel: !this.state.showListModel,
            showAddModel: !this.state.showAddModel,
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

    deleteStateValue = () => {
        this.setState({
            Modelslug: '',
            Modelname: '',
            name: '',
            slug: '',
            descreption: '',
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
                    <option value={brand.name}>{brand.name}</option>
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
                    <option value={category.name}>{category.name}</option>
                );
        });
    }

    render() {
        return (
            <div>
                {/* <ModelList
                    showListModel={this.state.showListModel}
                    categories={this.state.categories}
                    renderModelList={this.renderModelList}
                    onOffModelAdd = {this.onOffModelAdd}
                />
                <ModelAdd
                    onOffModelAdd = {this.onOffModelAdd}
                    showAddModel = {this.state.showAddModel}
                    logo = {this.state.logo}
                    banner = {this.state.banner}
                    onImageLogoChange = {this.onImageLogoChange}
                    onImageBannerChange = {this.onImageBannerChange}
                    name = {this.state.name}
                    slug = {this.state.slug}
                    descreption = {this.state.descreption}
                    handleFormNameChange = {this.handleFormNameChange}
                    handleFormSlugChange = {this.handleFormSlugChange}
                    handleFormDescreptionChange = {this.handleFormDescreptionChange}
                /> */}
                <div>
                    <button onClick={() => this.onOffModelAdd()} >Add model</button>
                </div>
                <ModelAdd
                    Brands = {this.state.Brands}
                    renderComboboxBrand = {this.renderComboboxBrand}
                    renderComboboxCategory = {this.renderComboboxCategory}
                    showAddModel = {this.state.showAddModel}
                />
            </div>

        );
    }
}
export default ModelManagement;