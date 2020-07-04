import React, { Component } from 'react';
import './Checkout.css';
import './CheckoutResponsive.css';

//Components
import Header from '../../Components/Header/Header';

class Checkout extends Component {

    render(){
        return(
            <div className="Checkout">
                <Header />
                
                <div className="Checkout-main">


                    <div className="Checkout-customerInformation">
                        <h3>Customer Information</h3>
                        <div className="Checkout-userData">
                            <div className="Checkout-newOld">
                                <table className="Checkout-tableNewOld">
                                    <tbody>
                                        <tr>
                                            <td className="Checkout-td-label"><label>Are you?</label></td>
                                            <td className="Checkout-td-radio">
                                                <input type="radio" id="newCustomer" name="newOldCustomer" value="newCustomer"></input>
                                                <label htmlFor="newCustomer">New Customer</label>
                                            </td>
                                            <td  className="Checkout-td-radio">
                                                <input type="radio" id="existingCustomer" name="newOldCustomer" value="existingCustomer"></input>
                                                <label htmlFor="existingCustomer">Existing Customer</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

        
                            {/* style={{display:'none'}} */}
                            <form className="Checkout-form" style={{display:'none'}} >
                                <table className="Checkout-tableForm">
                                    <tbody>
                                        <tr>
                                            <td className="Checkout-td"><label htmlFor="fullName">Full name <span className="Checkout-require">*</span></label></td>
                                            <td  className="Checkout-td-input"><input type="text" id="fullName" className="Checkout-input"/></td>
                                        </tr>
                                        <tr>
                                            <td className="Checkout-td"><label htmlFor="id">Id <span className="Checkout-require">*</span></label></td>
                                            <td><input type="text" id="id" className="Checkout-input"/></td>
                                        </tr>
                                        <tr>
                                            <td className="Checkout-td"><label htmlFor="address">Address <span className="Checkout-require">*</span></label></td>
                                            <td><textarea name="address" id="address" className="Checkout-input" rows="5"></textarea></td>
                                        </tr>
                                        <tr>
                                            <td className="Checkout-td"><label htmlFor="phoneNumber">Phone Number</label></td>
                                            <td><input type="text" id="phoneNumber" className="Checkout-input"/></td>
                                        </tr>
                                        <tr>
                                            <td className="Checkout-td"><label htmlFor="email">Email <span className="Checkout-require">*</span></label></td>
                                            <td><input type="email" id="email" className="Checkout-input"/></td>
                                        </tr>
                                    </tbody>   
                                </table>
                            </form>

                            <div className="Checkout-userExist">
                                <h4>Welcome back, John Doe</h4>
                                <p>ID:123456</p>
                                <p>Address: Main Street United States</p>
                                <p>Phone Number: 000 000 0000</p>
                                <p>Email: johndoe@email.com</p>
                                <p className="Checkout-lookupAgain">Not John? Lookup again</p>
                            </div>



                        </div>
                    </div>


                    <div className="Checkout-orderSummary">
                        <h3>Order Summary</h3>
                        <table className="Checkout-tableOrder">
                            <tbody> 
                                <tr>
                                    <th>Product</th>
                                    <th>Unit Price</th>
                                    <th>Units</th>
                                    <th>Total Price</th>
                                </tr>
                                <tr>
                                    <td>Samsung Galaxy J5</td>
                                    <td>10150</td>
                                    <td>1</td>
                                    <td>10150</td>
                                </tr>
                                <tr>
                                    <td>Adidas Shoes</td>
                                    <td>10000</td>
                                    <td>2</td>
                                    <td>20000</td>
                                </tr>
                                <tr>
                                    <td>Adidas Shoes</td>
                                    <td>10000</td>
                                    <td>2</td>
                                    <td>20000</td>
                                </tr>
                            </tbody> 
                        </table>

                        <div className="Checkout-totalPrice">
                            <p>Total:$87.96</p>
                        </div>

                        <div className="Checkout-button">
                            <button className="Button">Place Order</button>
                        </div>

                    </div>
                </div>


            </div>
        );
    }

}

export default Checkout;