import React from "react";
import "./App.css";

class Newsletter extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <section className="bg-primary text-light p-5">
          <div className="container">
            <div className="d-md-flex justify-content-between align-items-center">
              <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

              <div className="input-group newsletter-form">
                <input class="form-control newsletter-form" />
                <button className="btn btn-dark btn-lg">Button</button>
              </div>
            </div>
          </div>
        </section> */}

        <section className="bg-primary p-5">
          <div className="container">
            <div className="d-md-flex align-items-center justify-content-center">
              <h3 className="text-light mb-3 mb-md-0">
                Sign Up For Our Newsletter
              </h3>
              <div className="input-group">
                <input className="form-control" />
                <button className="btn-dark btn btn-lg">Submit</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Newsletter;
