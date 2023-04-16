import React, { Component } from "react";
import Swal from 'sweetalert2'

class CategoryAdd extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            "option": "trang chủ"
        }
    }

    validateForm = () => {
        // validate cho tên danh mục
        let errorOfName = "";
        let name = document.getElementById("inputName").value;
        if (name === "") {
            errorOfName = errorOfName + "Tên danh mục không được bỏ trống!\n";
        }
        if (name.length > 50) {
            errorOfName += "Tên dịch vụ chứa tối đa 50 ký tự.\n";
        }
        if( errorOfName ) {
            document.getElementById("errorOfName").innerHTML = typeof errorOfName === "undefined" ? "" : errorOfName;
        }
        else {
            this.props.postData();
        }

    }

    createSlug = () => {
        var name, slug;

        //Lấy text từ thẻ input name 
        name = document.getElementById("inputName").value;

        //Đổi chữ hoa thành chữ thường
        slug = name.toLowerCase();

        //Đổi ký tự có dấu thành không dấu
        slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        slug = slug.replace(/đ/gi, 'd');
        //Xóa các ký tự đặt biệt
        slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
        //Đổi khoảng trắng thành ký tự gạch ngang
        slug = slug.replace(/ /gi, "-");
        //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
        //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
        slug = slug.replace(/\-\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-\-/gi, '-');
        slug = slug.replace(/\-\-\-/gi, '-');
        slug = slug.replace(/\-\-/gi, '-');
        //Xóa các ký tự gạch ngang ở đầu và cuối
        slug = '@' + slug + '@';
        slug = slug.replace(/\@\-|\-\@|\@/gi, '');
        //In slug ra textbox có id “slug”
        this.props.handleFormNameChange(name)
        this.props.handleFormSlugChange(slug);
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
            text: "Bạn có thật sự muốn thêm danh mục này?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Thêm!',
            cancelButtonText: 'Hủy!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
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

    render() {
        const errorLabel = {
            color: "red",
            padding: "10px",
          }
        if (this.props.showAddCategory === false) return null;
        else {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Thêm danh mục mới</h5>
                        {/* Horizontal Form */}
                        <form>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Tên danh mục</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputName" value={this.props.categoryname}
                                        onChange={() =>
                                            this.createSlug()
                                        } />
                                </div>
                                <label style={errorLabel} id="errorOfName"></label>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Slug</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="inputSlug" value={this.props.categoryslug}
                                        onChange={(event) =>
                                            this.props.handleFormSlugChange(event.target.value)
                                        }
                                    />
                                </div>
                            </div>
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
                                    onClick={() => this.props.onOffCategoryAdd()}
                                >Trở về
                                </button>
                            </div>
                        </form>{/* End Horizontal Form */}
                    </div>
                </div>
            );
        }
    }
}
export default CategoryAdd;