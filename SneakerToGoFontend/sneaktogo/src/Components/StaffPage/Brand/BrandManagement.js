import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import BrandList from "./BrandList"
import BrandAdd from "./BrandAdd";


class BrandManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddBrand: false,
            showEditBrand: false,
            showListBrand: true,
            brands: [],
            newCode: '',
            logo: '',
            banner: '',
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
        url = "https://localhost:7193/api/v1/Brands"
    ) => {
        this.getData(url);
    };

    getData = (url) => {
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                brands: response.data,
            });
        });
        console.log(this.state.brands)
    }

    // getNewCode = () => {
    //     let url = 'https://localhost:7193/api/v1/Categories/new-code';
    //     let config = this.getConfigToken();
    //     axios.get(url, config).then((response) => {
    //         this.setState({
    //             newCode: response.data,
    //         });
    //     });
    // }

    postData = () => {
        console.log(this.state.newCode)
        let config = this.getConfigToken();
        axios
            .post("https://localhost:7193/api/v1/Categories", {
                BrandId: this.state.newCode,
                name: this.state.Brandname,
                slug: this.state.Brandslug,
                isDelete: 'false',
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
        this.onOffBrandAdd();
    };

    renderBrandList = () => {
        return this.state.brands.map((brand, index) => {
            return (
                <tr>
                    <td style={{ width: "10%" }}>
                        {index + 1}
                    </td>
                    <td>logooo</td>
                    <td>{brand.name}</td>
                    <td>{brand.slug}</td>
                    <td>
                        <button type="button"
                            className="btn btn-warning p-3 ms-3"
                            style={{ minWidth: 100 }}
                        //onClick={() => this.onBrandEditForm(Brand)}
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



    onOffBrandAdd = () => {
        //this.getNewCode();
        this.setState({
            showListBrand: !this.state.showListBrand,
            showAddBrand: !this.state.showAddBrand,
        });
    }

    handleFormNameChange = (value) => {
        this.setState({
            Brandname: value,
        });
    };

    handleFormSlugChange = (value) => {
        this.setState({
            Brandslug: value,
        });
    };

    deleteStateValue = () => {
        this.setState({
            Brandslug: '',
            Brandname: '',
        });
    }

    render() {
        return (
            <div>
                <BrandList
                    showListBrand={this.state.showListBrand}
                    categories={this.state.categories}
                    renderBrandList={this.renderBrandList}
                    onOffBrandAdd = {this.onOffBrandAdd}
                />
                <BrandAdd
                    onOffBrandAdd = {this.onOffBrandAdd}
                    showAddBrand = {this.state.showAddBrand}
                    logo = {this.state.logo}
                    banner = {this.state.banner}
                    onImageLogoChange = {this.onImageLogoChange}
                    onImageBannerChange = {this.onImageBannerChange}
                />
                {/* <BrandAdd
                    onOffBrandAdd = {this.onOffBrandAdd}
                    showAddBrand = {this.state.showAddBrand}
                    handleFormSlugChange = {this.handleFormSlugChange}
                    handleFormNameChange = {this.handleFormNameChange}
                    Brandslug = {this.state.Brandslug}
                    Brandname = {this.state.Brandname}
                    deleteStateValue = {this.deleteStateValue}
                    postData = {this.postData}
                /> */}
            </div>

        );
    }
}
export default BrandManagement;