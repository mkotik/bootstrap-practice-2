import React from "react";

class Showcase extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="bg-dark text-light p-5 text-center text-md-start">
        <div className="container">
          <div className="d-md-flex align-items-center justify-content-center">
            <div>
              <h1>
                Become a <span className="text-warning">Web Developer</span>
              </h1>
              <p className="lead">
                We specialize in teaching our students the fundamentals of the
                latest and greatest technologies to prepare them for their first
                dev role.
              </p>
              <button className="btn btn-primary btn-lg">
                Start Enrollment!
              </button>
            </div>
            <div className="ms-5">
              <img
                className="img-fluid d-none d-md-block "
                src="https://careerkarma.com/blog/wp-content/uploads/2019/11/danial-ricaros-FCHlYvR5gJI-unsplash.jpg"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Showcase;
