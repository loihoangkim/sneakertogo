import React, { Component } from "react";
import BannerGuest from "./banner-guest";
import TopCategoryGuest from "./topcategory";
import TopNewProduct from "./top-best-product";

class Home extends Component{
    render(){
        return(
            <div>
                <BannerGuest />
                <TopCategoryGuest />
                <TopNewProduct />
            </div>
        );
    }
}
export default Home;