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
            name: '',
            slug: '',
            descreption: '',
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
    }

    getNewCode = () => {
        let url = 'https://localhost:7193/api/v1/Brands/new-code';
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                newCode: response.data,
            });
        });
    }

    postData = () => {
        let config = this.getConfigToken();
        var today = new Date();
        var month;
        if( (today.getMonth()+1) < 10 ) {
            month = '0'+ (today.getMonth()+1);
        }
        else {
            month = (today.getMonth()+1);
        }
        var day;
        if(today.getDate()< 10)  {
            day = '0'+today.getDate();
        }
        else {
            day = today.getDate();
        }
        var date = today.getFullYear()+'-'+month+'-'+day;
        let logo = this.state.name + '.png';
        //var userId = localStorage.getItem("UserName");
        axios
            .post("https://localhost:7193/api/v1/Brands", {
                brandId: this.state.newCode,
                name: this.state.name,
                descreption: this.state.descreption,
                banner: '',
                slug: this.state.slug,
                createAt: date,
                createBy: 1,
                updateAt: date,
                updateBy: 1,
                logo: logo,
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
                    <td> 
                        <img src={"./assets/Images/" + brand.logo} style={{width:100}}/>
                    </td>
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

    // onImageLogoChangeGetName = event => {
    //     if (event.target.files && event.target.files[0]) {
    //       let logo = event.target.files[0];
    //       this.setState({
    //         logo: URL.createObjectURL(logo)
    //       });
    //     }
    // };

    // onImageBannerChangeGetName = event => {
    //     if (event.target.files && event.target.files[0]) {
    //       let banner = event.target.files[0];
    //       this.setState({
    //         banner: URL.createObjectURL(banner)
    //       });
    //     }
    // };




    onOffBrandAdd = () => {
        this.getNewCode();
        this.setState({
            showListBrand: !this.state.showListBrand,
            showAddBrand: !this.state.showAddBrand,
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
            Brandslug: '',
            Brandname: '',
            name: '',
            slug: '',
            descreption: '',
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
                    name = {this.state.name}
                    slug = {this.state.slug}
                    descreption = {this.state.descreption}
                    handleFormNameChange = {this.handleFormNameChange}
                    handleFormSlugChange = {this.handleFormSlugChange}
                    handleFormDescreptionChange = {this.handleFormDescreptionChange}
                    newCode = {this.state.newCode}
                    postData = {this.postData}
                />
            </div>

        );
    }
}
export default BrandManagement;