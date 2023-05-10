import React, { Component } from "react";
import Swal from "sweetalert2";

class FormAccount extends Component {
  validateAccountForm = () => {
    // validate họ tên
    let errorOfHoTen = "";
    let tenDV = document.getElementById("inputHoten").value;
    if (tenDV === "") {
      errorOfHoTen = errorOfHoTen + "Họ tên không được bỏ trống!\n";
    }
    if (tenDV.length > 50) {
      errorOfHoTen += "Họ tên chứa tối đa 50 ký tự.\n";
    }
    var format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    if (format.test(tenDV)) {
      errorOfHoTen += "Họ tên không được chứa ký tự đặc biệt";
    }

    // valitate số điện thoại
    var numbersOnly = /^\+?[0-9]+$/;
    let errorOfSoDienThoai = "";
    let soDienThoai = document.getElementById("inputSoDienThoai").value;
    if (!numbersOnly.test(soDienThoai)) {
      errorOfSoDienThoai += 'Số điện thoại có định dạng không đúng';
    }
    
    if(soDienThoai.length > 20) {
      errorOfSoDienThoai += 'Số điện thoại có độ dài tối đa 20 ký tự';
    }

    let errorOfTenDangNhap = "";
    let tenDangNhap = document.getElementById("inputTenDangNhap").value;
    if(tenDangNhap.length > 20) {
      errorOfTenDangNhap += 'Tên đăng nhập có độ dài tối đa 20 ký tự'
    }
    if (tenDangNhap === "") {
      errorOfTenDangNhap = errorOfTenDangNhap + "Tên đăng nhập không được bỏ trống!\n";
    }

    let errorOfPassword = "";
    let password = document.getElementById("inputPassword").value;
    if(password.length > 50) {
      errorOfPassword += 'Tên đăng nhập có độ dài tối đa 50 ký tự'
    }
    if (password === "") {
      errorOfPassword = errorOfPassword + "Mật khẩu không được bỏ trống!\n";
    }

    if (errorOfHoTen || errorOfSoDienThoai || errorOfTenDangNhap ||errorOfPassword ) {
      Swal.fire(
        'Cảnh báo\n\n Dữ liệu không hợp lệ',
        '',
        'error'
      )
      document.getElementById("errorOfHoTen").innerHTML = typeof errorOfHoTen === "undefined" ? "" : errorOfHoTen;
      document.getElementById("errorOfSoDienThoai").innerHTML = typeof errorOfSoDienThoai === "undefined" ? "" : errorOfSoDienThoai;
      document.getElementById("errorOfTenDangNhap").innerHTML = typeof errorOfTenDangNhap === "undefined" ? "" : errorOfTenDangNhap;
      document.getElementById("errorOfPassword").innerHTML = typeof errorOfPassword === "undefined" ? "" : errorOfPassword;
    }
    else {
      this.alertComfirm();
    }
  };

  alertComfirm = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Xác nhận thêm?',
      text: "Bạn có chắc thêm tài khoản này!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Thêm',
      cancelButtonText: 'Hủy',
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
    if (this.props.showFormAccount === false) return null;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Tạo tài khoản</h5>
          {/* Horizontal Form */}
          <form>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Họ tên</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputHoten" value={this.props.hoTen}
                  onChange={(event) =>
                    this.props.handleFormHoTenChange(event.target.value)
                  }
                />
                <label style={errorLabel} id="errorOfHoTen"></label>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Số điện thoại</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputSoDienThoai" value={this.props.soDienThoai}
                  onChange={(event) =>
                    this.props.handleFormSoDienThoaiChange(event.target.value)
                  } />
                  <label style={errorLabel} id="errorOfSoDienThoai"></label>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Tên đăng nhập</label>
              <div className="col-sm-6">
                <input type="text" className="form-control" id="inputTenDangNhap" value={this.props.tenDangNhap}
                  onChange={(event) =>
                    this.props.handleFormTenDangNhapChange(event.target.value)
                  } />
                  <label style={errorLabel} id="errorOfTenDangNhap"></label>
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-6">
                <input type="password" className="form-control" id="inputPassword" value={this.props.password}
                  onChange={(event) =>
                    this.props.handleFormPasswordChange(event.target.value)
                  } />
                <label style={errorLabel} id="errorOfPassword"></label>
              </div>
            </div>
            {/* <fieldset className="row mb-3" >
              <legend className="col-form-label col-sm-2 pt-0">Vai trò</legend>
              <div className="col-sm-6">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadiosNhanVien" defaultValue="Nhân viên" defaultChecked
                    onChange={(event) =>
                      this.props.handleFormVaiTroChange(event.target.value)
                    } />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Nhân viên
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadiosQuanLy" defaultValue="Quản lý"
                    onChange={(event) =>
                      this.props.handleFormVaiTroChange(event.target.value)
                    } />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Quản lý
                  </label>
                </div>
              </div>
            </fieldset> */}
            <div className="text-center">
              <button type="button" className="btn btn-primary"
                onClick={() => this.validateAccountForm()}
              >Thêm tài khoản
              </button>
              <button type="button" className="btn btn-secondary"
                onClick={() => this.props.renderFormAccount()}
              >Trở về danh sách
              </button>
            </div>
          </form>
        </div>
      </div>


    );
  }
}
export default FormAccount;