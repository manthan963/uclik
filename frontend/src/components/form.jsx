import React from "react";
import BlankCheck from "../assets/blank-check.png";
import { Button } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";
import ReactToPrint from 'react-to-print';
import {render} from "react-dom";


class NewCustomerForm extends React.Component {
  state = {
    pk:0,
    fname: "",
    lname: "",
    phonenumber: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    notes: "",
    memo: "",
    amount: "",
    account: "",
    check: "",
    routing: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };
  componentDidMount() {
    if (this.props.customer) {
      const {
        pk,
        fname,
        lname,
        email,
        phonenumber,
        address,
        city,
        state,
        zipcode,
        notes,
        memo,
        amount,
        account,
        check,
        routing,
      } = this.props.customer;
      this.setState({
        pk,
        fname,
        lname,
        email,
        phonenumber,
        address,
        city,
        state,
        zipcode,
        notes,
        memo,
        amount,
        account,
        check,
        routing,
      });
    }
  }
  createCustomer = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };
  editCustomer = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  render() {
    return (
      <div>
        <section className="home-blog">
          <form className="add" onsubmit={this.props.customer ? this.editCustomer : this.createCustomer}>
            <label for="fname">First name:</label>
            <br />
            <input
              type="text"
              name="fname"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.fname)}
            />
            <br />
            <br />
            <label for="lname">Last name:</label>
            <br />
            <input
              type="text"
              name="lname"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.lname)}
            />
            <br />
            <br />
            <label for="phone">Phone number:</label>
            <br />
            <input
              type="text"
              name="phonenumber"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.phonenumber)}
            />
            <br />
            <br />
            <label for="email">Email-ID:</label>
            <br />
            <input
              type="text"
              name="email"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.email)}
            />
            <br />
            <br />
            <label for="address">address 1:</label>
            <br />
            <input
              type="text"
              name="address"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.address)}
            />
            <br />
            <br />
            <label for="city">City:</label>
            <br />
            <input
              type="text"
              name="city"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.city)}
            />
            <br />
            <br />
            <label for="state">State:</label>
            <br />
            <input
              type="text"
              name="state"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.state)}
            />
            <br />
            <br />
            <label for="zipcode">Zip Code:</label>
            <br />
            <input
              type="text"
              name="zipcode"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.zipcode)}
            />
            <br />
            <br />
            <label for="notes">Notes:</label>
            <br />
            <input
              type="text"
              name="notes"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.notes)}
            />
            <br />
            <br />
            <label for="memo">Memo:</label>
            <br />
            <input
              type="text"
              name="memo"
              onChange={this.onChange}
              value={this.defaultIfEmpty(this.state.memo)}
            />
            <br />
            <br />
            <div class="container">
              <img src={BlankCheck} alt="Nature"  />
              <div class="text-block">
                <input
                  type="number"
                  size="50"
                  placeholder="Amount"
                  name="amount"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.amount)}
                />
              </div>
              <div class="text-blockone">
                <input
                  type="text"
                  placeholder="Routing"
                  name="routing"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.routing)}
                />
              </div>
              <div class="text-blocktwo">
                <input
                  type="text"
                  placeholder="Account"
                  name="account"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.account)}
                />
              </div>
              <div class="text-blockthree">
                <input
                  type="text"
                  placeholder="Check"
                  name="check"
                  onChange={this.onChange}
                  value={this.defaultIfEmpty(this.state.check)}
                />
              </div>
            </div>
            <Button className="button">Submit</Button>
          </form>
        </section>
      </div>
    );
  }
}

class Example extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <button className="print">Print this out!</button>;
            
          }}
          content={() => this.componentRef}
        />
        <NewCustomerForm ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}
render(<Example />, document.querySelector('#root'));
// export default Example;
export default NewCustomerForm;
