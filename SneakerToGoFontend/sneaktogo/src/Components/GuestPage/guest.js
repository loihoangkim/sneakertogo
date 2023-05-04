import React, { Component } from "react";
import HeaderGuest from "./header-guest";
import SearchGuest from "./search-guest";
import FooterGuest from "./footer-guest";
import Home from './Home'
import About from "../About";
import Shop from './shop';
import Contact from './contact';

class Guest extends Component {
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
                            <HeaderGuest
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
                            <HeaderGuest
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
                            <HeaderGuest
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
        // else if (navpage === 'cart') {
        //     return(
        //         <div>
        //             <div>
        //                 <nav className="navbar navbar-expand-lg navbar-light shadow">
        //                     <HeaderGuest
        //                         openLogin={this.props.openLogin}
        //                          changeNavPage={this.changeNavPage}
        //                     />
        //                 </nav>
        //                 <SearchGuest />
        //                 <Contact />
        //                 <FooterGuest />
        //             </div>
        //         </div>
        //     )
        // }
        // else if (navpage === 'order') {
        //     return(
        //         <div>
        //             <div>
        //                 <nav className="navbar navbar-expand-lg navbar-light shadow">
        //                     <HeaderGuest
        //                         openLogin={this.props.openLogin}
        //                          changeNavPage={this.changeNavPage}
        //                     />
        //                 </nav>
        //                 <SearchGuest />
        //                 <Contact />
        //                 <FooterGuest />
        //             </div>
        //         </div>
        //     )
        // }
        else {
            return (
                <div>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-light shadow">
                            <HeaderGuest
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
export default Guest;