import React, { Component } from "react";


class PageNotFound extends Component {
    render() {
        return (
            <div className="container">
                <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                    <h1>404</h1>
                    <h2>The page you are looking for doesn't exist.</h2>
                    <a className="btn" href="../App.js">Back to home</a>
                </section>
            </div>
        );
    }
}
export default PageNotFound;