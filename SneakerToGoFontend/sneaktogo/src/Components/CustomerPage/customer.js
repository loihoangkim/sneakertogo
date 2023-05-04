import React, { Component } from "react";
import SearchGuest from "./../GuestPage/search-guest";
import FooterGuest from "./../GuestPage/footer-guest";
import Home from './../GuestPage/Home'
import About from "../About";
import Shop from './../GuestPage/shop';
import Contact from './../GuestPage/contact';
import HeaderCustomer from './header-customer';
import Cart from './cart';
import Bill from './bill';
import Payment from './payment'

class Customer extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            navpage: 'home',
        }
    }

    changeNavPage = ( value ) => {
        this.setState({
            navpage: value,
        })
    }


    render() {
        let navpage = this.state.navpage;
        if (navpage === 'about') {
            return(
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light shadow">
                            <HeaderCustomer
                                openLogin={this.props.openLogin}
                                changeNavPage={this.changeNavPage}
                            />
                        </nav>
                        <SearchGuest />
                        <About />
                        <FooterGuest />
                    </div>
                </div>
            )
        }
        else if (navpage === 'shop') {
            return(
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light shadow">
                            <HeaderCustomer
                                openLogin={this.props.openLogin}
                                changeNavPage={this.changeNavPage}
                            />
                        </nav>
                        <SearchGuest />
                        <Shop />
                        <FooterGuest />
                    </div>
                </div>
            )
        }
        else if (navpage === 'contact') {
            return(
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light shadow">
                            <HeaderCustomer
                                openLogin={this.props.openLogin}
                                changeNavPage={this.changeNavPage}
                            />
                        </nav>
                        <SearchGuest />
                        <Contact />
                        <FooterGuest />
                    </div>
                </div>
            )
        }
        else if (navpage === 'cart') {
            return(
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light shadow">
                            <HeaderCustomer
                                openLogin={this.props.openLogin}
                                 changeNavPage={this.changeNavPage}
                            />
                        </nav>
                        <SearchGuest />
                        <Cart 
                            changeNavPage={this.changeNavPage}
                        />
                        <FooterGuest />
                    </div>
                </div>
            )
        }
        else if (navpage === 'bill') {
            return(
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light shadow">
                            <HeaderCustomer
                                openLogin={this.props.openLogin}
                                 changeNavPage={this.changeNavPage}
                            />
                        </nav>
                        <SearchGuest />
                        <Bill />
                        <FooterGuest />
                    </div>
                </div>
            )
        }
        else if (navpage === 'payment') {
            return(
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light shadow">
                            <HeaderCustomer
                                openLogin={this.props.openLogin}
                                 changeNavPage={this.changeNavPage}
                            />
                        </nav>
                        <SearchGuest />
                        <Payment />
                        <FooterGuest />
                    </div>
                </div>
            )
        }

        else {
            return (
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light shadow">
                            <HeaderCustomer
                                openLogin={this.props.openLogin}
                                 changeNavPage={this.changeNavPage}
                            />
                        </nav>
                        <SearchGuest />
                        <Home />
                        <FooterGuest />
                    </div>
                </div>
            );
        }
    }
}
export default Customer;