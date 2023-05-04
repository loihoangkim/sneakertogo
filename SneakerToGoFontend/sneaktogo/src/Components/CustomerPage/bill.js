import React, { Component } from "react";
import $, { get } from "jquery";
import axios from "axios";

class Bill extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            userId: sessionStorage.getItem("UserId"),
            bills: []
        }
    }

    getConfigToken() {
        let config = {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("Token"),
                "Content-type": "application/json"
            }
        };
        return config;
    }

    componentDidMount = () => {
        let config = this.getConfigToken();
        var url = 'https://localhost:7193/api/v1/Bills/findByUserID?userID=' + this.state.userId;
        axios.get(url, config).then((response) => {
            this.setState({
                bills: response.data,
            });
        });
        console.log(this.state.bills);
    }


    renderListBill = () => {
        if(this.state.bills.length === 0 ) return(
            <div className="container text-center" style={{marginTop:100}}>
                <h2 className="h2">Bạn chưa có hóa đơn nào cả!</h2>
                <button className="btn btn-primary btn-lg" style={{marginBottom:100}}
                    onClick={() => this.props.changeNavPage('shop')}
                >Bắt đầu mua sắm tại đây</button>
            </div>
        )
        return this.state.bills.map((item, index) => {
            return (
                <div class="container card w-75" style={{marginTop:50}} >
                    
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container" >
                {this.renderListBill()}
            </div>

        );
    }
}
export default Bill;