import React, { Component } from "react";

class FooterGuest extends Component {
    render() {
        return (
            <footer className="bg-light text-center text-lg-start">
                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2023 Copyright:
                    <a className="text-dark" href="https://sneakertogo.com/">
                        Sneaker to go
                    </a>
                </div>
                {/* Copyright */}
            </footer>



        );
    }
}
export default FooterGuest;