import React from "react";
import "./App.css";

class Newsletter extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="bg-primary text-light p-5">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

            <div className="input-group newsletter-form">
              <input class="form-control newsletter-form" />
              <button className="btn btn-dark btn-lg">Button</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
