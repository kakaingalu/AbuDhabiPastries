import React, { Component } from "react";
import Product from "./Product";
export default class ShoppingCart extends Component {
    //Executes when a component is mounted
    constructor(props) {
        console.log("constructor-ShoppingCart")
        super(props); //calling superclass constructor

        //initialization of the state
        this.state ={
            products: [
            {
                id:1, 
                productName: "Fresh Chocolate Cake", 
                price: 144.00, 
                quantity:0
            },
            {
                id:2, 
                productName: "Red Velvet Cake", 
                price: 107.90, 
                quantity:0
            },
            {
                id:3, 
                productName: "Black Forest Slice Xl", 
                price: 315.00, 
                quantity:0
            },
            {
                id:4, 
                productName: "Blueberry Yogurt Cake", 
                price: 375.00, 
                quantity:0
            },
            {
                id:5, 
                productName: "Cheese Cake", 
                price: 375.00, 
                quantity:0
            },
            {
                id:6, 
                productName: "Swiss Roll Chocolate", 
                price: 315.00, 
                quantity:0
            }]
        }
    }
    render() {
        console.log("render-ShoppingCart")
        return (
            <div className="container-fluid">
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.products.map((prod) => {
                        return <Product 
                        key={prod.id} 
                        product={prod}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        >
                            <button 
                            className="btn btn-primary">
                                Buy Now
                            </button>
                        </Product>;
                    })}
                </div>
            </div>
        )
    }
    /*render ends here*/

    //Executes after constructor and render method(include life cycle of child)
    //components, if any of current component
    componentDidMount() {
        //fetch data from source
        console.log("componentDidMount-ShoppingCart")
    }


    //executes when user clicks the + button
    handleIncrement = (product, maxValue) => {
        //get index of selected product
        let allProducts =[...this.state.products];
        let index = allProducts.indexOf(product);
        
        //increment quantity
        if(allProducts[index].quantity < maxValue)
            allProducts[index].quantity++;

        //update the state of the current component
        //(parent component)
        this.setState({products: allProducts})
    }

    //executes when user clicks the - button
    handleDecrement = (product, minValue) => {
        //get index of selected product
        let allProducts =[...this.state.products];
        let index = allProducts.indexOf(product);

        //decrement quantity
        if(allProducts[index].quantity > minValue)
            allProducts[index].quantity--;

        //update the state of the current component
        //(parent component)
        this.setState({products: allProducts})
    };
    //excutes when the user clicks on Delete (X) button in the Product component
    handleDelete = (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(window.confirm("Are you sure to delete?")) {

        
            //delete products based on index
            allProducts.splice(index, 1);

            //update the state of current component(parent component)
            this.setState({products: allProducts});
        }
    };
}