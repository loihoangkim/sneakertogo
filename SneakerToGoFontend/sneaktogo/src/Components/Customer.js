import React, { Component } from "react";

class Customer extends Component{
    constructor(pros){
      super(pros)
      this.state = {
        "option": "trang chủ"
      }
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