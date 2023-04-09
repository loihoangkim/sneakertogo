import React, { Component } from "react";
import MainPageNav from "./MainPageNav";
import $, { get } from "jquery";

class Customer extends Component{
    constructor(pros){
      super(pros)
      this.state = {
        "option": "trang chủ"
      }
    }
    selectOptionsEvent(target){
      $("#sidebar-nav").find(".nav-link").addClass("collapsed");
      $(target).closest(".nav-link").toggleClass("collapsed");
    }
    render(){
        return(
            <div>
              <h1>Customer</h1>
            </div>
        );
    }
}
export default Customer;