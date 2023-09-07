import React, { Component } from "react";

export default class CustomerList extends Component {
    state ={
        pageTitle: "Customers",
        customersCount: 5,
        customers: [
            {
                id:1, name: "Scarlet", 
                phone: "0766126622",
                address: {
                    city: "Nairobi",
                },
                photo: "https://picsum.photos/id/1010/60" 
            },
            {
                id:2, name: "Lekie", 
                phone: "0766226622",
                address: {
                    city: "Mombasa",
                },
                photo: "https://picsum.photos/id/1011/60" 
            },
            {
                id:3, name: "Senzie", 
                phone: null,
                address: {
                    city: "Nakuru",
                },
                photo: "https://picsum.photos/id/1012/60" 
            },
            {
                id:4, name: "Kimoda", 
                phone: "0746126622",
                address: {
                    city: "Starling",
                },
                photo: "https://picsum.photos/id/1013/60" 
            },
            {
                id:5, name: "Kenyonyo", 
                phone: "0767126622",
                address: {
                    city: "Kisumu",
                },
                photo: "https://picsum.photos/id/1014/60" 
            },
        ],
    };

    render() {
        return (
        <div>
            <h4 className="m-1 p-1">{this.state.pageTitle}

            <span className="badge badge-secondary 
            m-2">
                {this.state.customersCount}
            </span>
            <button className="btn btn-info" onClick=
            {this.onRefreshClick}>Refresh</button>
            </h4>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>photo</th>
                        <th>Customer Name</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                   {this.getCustomerRow()} 
                </tbody>
            </table>
            </div>
        );
    }
    //Executes when the user clicks on refresh button
    onRefreshClick = () => {
        //Update the state using setState method-so that update the browser DOM automatically
        this.setState({
            customersCount: 7
        });
    };

    getPhoneToRender = (phone) => {
        if(phone)
            return phone;
        else
            return <div className="bg-warning p-2 text-center">No Phone</div>; 
    }; 

    getCustomerRow = () => {
        return(this.state.customers.map((cust, index) => {
            return (
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td><img src={cust.photo} alt="Customer"/>
                        <div>
                            <button className="btn btn-sm btn-secondary" 
                            onClick={() => {this.onChangePictureClick(cust, index);}}>
                                Change Picture
                            </button>
                        </div>
                    </td>
                    <td>{cust.name}</td>
                    <td>{this.getPhoneToRender(cust.phone)}</td>
                    <td>{cust.address.city}</td>
                </tr>
            );
        })
    )
    }
    //Excutes when the user clicks on "Change Picture" button in the grid
    //Receives the "customers" object and index of the curently clicked customer
    onChangePictureClick = (cust, index) => {
        // console.log(cust);
        // console.log(index);

        //get existing customers
        var custArr = this.state.customers;
        custArr[index].photo = "https://picsum.photos/id/104/60";

        //update "customers" array in the state
        this.setState({customers:custArr});
    }
}