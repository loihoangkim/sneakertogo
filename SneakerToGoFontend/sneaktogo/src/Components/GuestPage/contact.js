import React, { Component } from "react";
import $, { get } from "jquery";

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <section className="mb-4">
                    {/*Section heading*/}
                    <h2 className="h1-responsive font-weight-bold text-center my-4 h2">
                        Liên hệ với chúng tôi
                    </h2>
                    {/*Section description*/}
                    <p className="text-center w-responsive mx-auto mb-5">
                        Nếu bạn có bất cứ câu hỏi gì? Đừng ngần ngại gửi ngay chúng cho chúng tôi.
                        Đội ngũ của chúng tôi luôn sẵn sàng giải đáp.
                    </p>
                    <div className="row">
                        {/*Grid column*/}
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form
                                id="contact-form"
                                name="contact-form"
                                action="mail.php"
                                method="POST"
                            >
                                {/*Grid row*/}
                                <div className="row">
                                    {/*Grid column*/}
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                            />
                                            <label htmlFor="name" className="">
                                                Tên của bạn
                                            </label>
                                        </div>
                                    </div>
                                    {/*Grid column*/}
                                    {/*Grid column*/}
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                            />
                                            <label htmlFor="email" className="">
                                                Địa chỉ mail
                                            </label>
                                        </div>
                                    </div>
                                    {/*Grid column*/}
                                </div>
                                {/*Grid row*/}
                                {/*Grid row*/}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="form-control"
                                            />
                                            <label htmlFor="subject" className="">
                                                Chủ đề
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/*Grid row*/}
                                {/*Grid row*/}
                                <div className="row">
                                    {/*Grid column*/}
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea
                                                type="text"
                                                id="message"
                                                name="message"
                                                rows={2}
                                                className="form-control md-textarea"
                                                defaultValue={""}
                                            />
                                            <label htmlFor="message">Nội dung</label>
                                        </div>
                                    </div>
                                </div>
                                {/*Grid row*/}
                            </form>
                            <div className="text-center text-md-left">
                                <a
                                    className="btn btn-primary"
                                    onclick="document.getElementById('contact-form').submit();"
                                >
                                    Gửi
                                </a>
                            </div>
                            <div className="status" />
                        </div>
                        {/*Grid column*/}
                        {/*Grid column*/}
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-2x" />
                                    <p>Hoàng Quốc Việt, Cầu Giấy, Hà Nội</p>
                                </li>
                                <li>
                                    <i className="fas fa-phone mt-4 fa-2x" />
                                    <p>+ 01 234 567 89</p>
                                </li>
                                <li>
                                    <i className="fas fa-envelope mt-4 fa-2x" />
                                    <p>contact.sneakertogo@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                        {/*Grid column*/}
                    </div>
                </section>

            </div>
        );
    }
}
export default Contact;