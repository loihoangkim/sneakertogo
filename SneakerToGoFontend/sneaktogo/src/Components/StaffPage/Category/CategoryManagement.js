import React, { Component } from "react";
import CategoryList from "./CategoryList";
import axios from "axios";
import CategoryAdd from "./CategoryAdd";
import Swal from "sweetalert2";


class CategoryManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddCategory: false,
            showEditCategory: false,
            showListCategory: true,
            categories: [],
            categoryname: '',
            categoryslug: '',
            newCode: '',
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
        url = "https://localhost:7193/api/v1/Categories"
    ) => {
        this.getData(url);
    };

    getData = (url) => {
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                categories: response.data,
            });
        });
        //console.log(this.state.categories)
    }

    getNewCode = () => {
        let url = 'https://localhost:7193/api/v1/Categories/new-code';
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                newCode: response.data,
            });
        });
    }

    postData = () => {
        console.log(this.state.newCode)
        let config = this.getConfigToken();
        axios
          .post("https://localhost:7193/api/v1/Categories", {
            categoryId: this.state.newCode,
            name: this.state.categoryname,
            slug: this.state.categoryslug,
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
        //this.showInsertResult();
        this.componentDidMount();
        this.onOffCategoryAdd();
      };

    renderCategoryList = () => {
        return this.state.categories.map((category, index) => {
            if( category.isDelete === 'true' ) {
                return (
                    <tr>
                        <td style={{ width: "10%" }} className="text-center">
                            {index + 1}
                        </td>
                        <td>{category.name}</td>
                        <td>{category.slug}</td>
                        <td>
                            <button type="button" 
                                className="btn btn-warning p-3 ms-3" 
                                style={{minWidth: 100}}
                                //onClick={() => this.oncategoryEditForm(category)}
                            >
                                Chỉnh sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success p-3 ms-3"
                                style={{minWidth: 100}}
                            //
                            >
                                Bật
                            </button>
                        </td>
                    </tr>
                );
            }
            else {
                return (
                    <tr>
                        <td style={{ width: "10%" }} className="text-center">
                            {index + 1}
                        </td>
                        <td>{category.name}</td>
                        <td>{category.slug}</td>
                        <td>
                            <button type="button" 
                                className="btn btn-warning p-3 ms-3"
                                style={{minWidth: 100}}
                                //
                            >
                                Chỉnh sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger p-3 ms-3"
                                style={{minWidth: 100}}
                                //onClick={() => this.showDeleteConfirmAlert(category)}
                            >
                                Tắt
                            </button>
                        </td>
                    </tr>
                );
            }
        });
    }

    onOffCategoryAdd = () => {
        this.getNewCode();
        this.setState({
            showListCategory: !this.state.showListCategory,
            showAddCategory: !this.state.showAddCategory,
        });
    }

    handleFormNameChange = (value) => {
        this.setState({
          categoryname: value,
        });
      };

    handleFormSlugChange = (value) => {
        this.setState({
          categoryslug: value,
        });
      };

    deleteStateValue = () => {
        this.setState({
            categoryslug: '',
            categoryname: '',
          });
    }

    render() {
        return (
            <div>
                <CategoryList
                    showListCategory={this.state.showListCategory}
                    categories={this.state.categories}
                    renderCategoryList={this.renderCategoryList}
                    onOffCategoryAdd = {this.onOffCategoryAdd}
                />
                <CategoryAdd
                    onOffCategoryAdd = {this.onOffCategoryAdd}
                    showAddCategory = {this.state.showAddCategory}
                    handleFormSlugChange = {this.handleFormSlugChange}
                    handleFormNameChange = {this.handleFormNameChange}
                    categoryslug = {this.state.categoryslug}
                    categoryname = {this.state.categoryname}
                    deleteStateValue = {this.deleteStateValue}
                    postData = {this.postData}
                />
            </div>

        );
    }
}
export default CategoryManagement;