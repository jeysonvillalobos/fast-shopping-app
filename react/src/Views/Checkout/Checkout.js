import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Checkout.css';
import './CheckoutResponsive.css';

//Components
import Header from '../../Components/Header/Header';

class Checkout extends Component {
    state = {
        newCustomer:true,
        selectedOption:'newCustomer',
        fullName:'',
        id:'',
        address:'',
        phoneNumber:'',
        email:'',
        lookupEmail:''
    };
    componentDidUpdate(){
        if(this.props.users.status === true)
        {
            this.props.history.push('/thanks');
        }
    }
    radioHandle(data){
        this.setState({
            selectedOption: data.target.value
        });
    }
    inputHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    placeOrder() {
        if(this.state.selectedOption === 'newCustomer'){

            let productsIds;
            productsIds = this.props.cart.products.map(data => data.id);

            let formData = {
                fullname:this.state.fullName,
                id:this.state.id,
                address:this.state.address,
                phoneNumber:this.state.phoneNumber,
                email:this.state.email,
                products:productsIds
            };
            this.props.INSERT_USER_SUCCESS(formData);
        }
        else{
            let data;
            let productsIds;
    
            if(this.props.users.users.length > 0)
            {
                productsIds = this.props.cart.products.map(data => data.id);
                data = {
                    email:this.state.lookupEmail,
                    products:productsIds
                }

                this.props.INSERT_USER_BY_EMAIL(data);
                this.props.history.push('/thanks');
            }
            else{
                this.props.SEARCH_USER_SUCCESS('');
            }
        }
    }

    lookup(){
        let email = this.state.lookupEmail;
        this.props.SEARCH_USER_SUCCESS(email);
    }

    clearSearch(){
        this.props.CLEAR_SEARCH();
    }

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
                                                <input type="radio" id="newCustomer" onChange={this.radioHandle.bind(this)} checked={this.state.selectedOption === 'newCustomer'} name="newOldCustomer" value="newCustomer"></input>
                                                <label htmlFor="newCustomer">New Customer</label>
                                            </td>
                                            <td  className="Checkout-td-radio">
                                                <input type="radio" id="existingCustomer" onChange={this.radioHandle.bind(this)} checked={this.state.selectedOption === 'existingCustomer'} name="newOldCustomer" value="existingCustomer"></input>
                                                <label htmlFor="existingCustomer">Existing Customer</label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            { this.state.selectedOption === 'newCustomer' ? 
                                <form className="Checkout-form" >
                                    <table className="Checkout-tableForm">
                                        <tbody>
                                            <tr>
                                                <td className="Checkout-td"><label htmlFor="fullName">Full name <span className="Checkout-require">*</span></label></td>
                                                <td  className="Checkout-td-input"><input value={this.state.fullName} onChange={this.inputHandler.bind(this)} type="text" name="fullName" id="fullName" className="Checkout-input"/></td>
                                            </tr>
                                            <tr>
                                                <td className="Checkout-td"><label htmlFor="id">Id <span className="Checkout-require">*</span></label></td>
                                                <td><input value={this.state.id} onChange={this.inputHandler.bind(this)} type="text" id="id" name="id" className="Checkout-input"/></td>
                                            </tr>
                                            <tr>
                                                <td className="Checkout-td"><label htmlFor="address">Address <span className="Checkout-require">*</span></label></td>
                                                <td><textarea value={this.state.address} onChange={this.inputHandler.bind(this)} id="address" name="address" className="Checkout-input" rows="5"></textarea></td>
                                            </tr>
                                            <tr>
                                                <td className="Checkout-td"><label htmlFor="phoneNumber">Phone Number</label></td>
                                                <td><input value={this.state.phoneNumber} onChange={this.inputHandler.bind(this)} type="text" id="phoneNumber" name="phoneNumber" className="Checkout-input"/></td>
                                            </tr>
                                            <tr>
                                                <td className="Checkout-td"><label htmlFor="email">Email <span className="Checkout-require">*</span></label></td>
                                                <td><input value={this.state.email} onChange={this.inputHandler.bind(this)} type="email" id="email" name="email" className="Checkout-input"/></td>
                                            </tr>
                                        </tbody>   
                                    </table>
                                    { this.props.users.status === false ?  <p className="Checkout-msg-status">{this.props.users.msg}</p> : null }
                                    
                                </form>
                                :
                                    this.props.users.users.length === 0 ?
                                    <div className="Checkout-userLookup">
                                            <label htmlFor="lookupEmail">Email</label>
                                            <input type="text" id="lookupEmail"name='lookupEmail' value={this.state.lookupEmail} onChange={this.inputHandler.bind(this)}  className="Checkout-lookupEmail"/>
                                            <div className="Checkout-buttonLookup">
                                                <button className="Button" onClick={this.lookup.bind(this)}>Lookup</button>
                                            </div>
                                            { this.props.users.found === true ? <p style={{color:'red'}}>User not found</p> : null } 
                                    </div>
                                    :
                                    this.props.users.users.map(data => (
                                        <div key={data.id} className="Checkout-userExist">
                                            <h4>Welcome back, {data.fullname}</h4>
                                            <p>ID:{data.id}</p>
                                            <p>Address: { data.address }</p>
                                            <p>Phone Number: { data.phoneNumber }</p>
                                            <p>Email: { data.email }</p>
                                            <p className="Checkout-lookupAgain" onClick={ this.clearSearch.bind(this) }>Not {data.fullname.split(' ')[0]}? Lookup again</p>
                                        </div>
                                    ))
                            }
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
                                {
                                    this.props.cart.products.map(data => (
                                        <tr key={data.id}>
                                            <td>{data.name}</td>
                                            { data.localQTY ? <td>{data.localQTY}</td> : <td>1</td> }
                                            <td>{data.price}</td>
                                            { data.priceQty ? <td>{ data.priceQty }</td> : <td>{data.price}</td> }
                                        </tr>
                                    ))
                                }
                            </tbody> 
                        </table>
                        <div className="Checkout-totalPrice">
                            <p>Total:${this.props.cart.total}</p>
                        </div>
                        <div className="Checkout-button">
                            <button className="Button" onClick={this.placeOrder.bind(this)}>Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users:state.users,
    cart:state.cart
});

const mapDispatchToProps = dispatch => ({
    INSERT_USER_SUCCESS: data => dispatch({ type:'INSERT_USER_SUCCESS',payload:data }),
    SEARCH_USER_SUCCESS: data => dispatch({ type:'SEARCH_USER_SUCCESS',payload:data }),
    CLEAR_SEARCH: () => dispatch({ type:'CLEAR_SEARCH' }),
    INSERT_USER_BY_EMAIL: data => dispatch({ type:'INSERT_USER_BY_EMAIL',payload:data })
});

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);