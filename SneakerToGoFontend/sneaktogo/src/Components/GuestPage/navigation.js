import React, { Component } from "react";
import $, { get } from "jquery";

class Navigation extends Component{
    constructor(pros){
      super(pros)
      this.state = {
        "option": "trang chủ"
      }
    }

    render(){
        if(this.props.displayList === false ) return null;
        return(
            <div className="container" >
              <div className="row mt-5 mt-2" >
                <div className="col-2">
                    <img src="./assets/images/Nike.png" className="img-thumbnail"/>
                    </div>
                <div className="col-2">
                    <img src="./assets/images/Adidas.png" className="img-thumbnail"/>
                    </div>
                <div className="col-2">
                    <img src="./assets/images/Puma.png" className="img-thumbnail"/>
                    </div>
                <div className="col-2">
                    <img src="./assets/images/MLB.png" className="img-thumbnail"/>
                    </div>
                <div className="col-2">
                    <img src="./assets/images/Balenciaga.png" className="img-thumbnail"/>
                    </div>
                <div className="col-2">
                    <img src="./assets/images/Converse.png" className="img-thumbnail"/>
                    </div>
              </div>
            </div>
        );
    }
}
export default Navigation;