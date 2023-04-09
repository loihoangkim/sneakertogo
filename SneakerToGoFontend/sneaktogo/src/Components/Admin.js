import React, { Component } from "react";
import MainPageNav from "./MainPageNav";
import $, { get } from "jquery";

class Admin extends Component{
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
              <h1>Admin</h1>
            </div>
        );
    }
}
export default Admin;