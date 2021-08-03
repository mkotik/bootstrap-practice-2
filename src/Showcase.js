import React from "react";

class Showcase extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="bg-dark text-light p-5 text-center text-sm-start ">
        <div className="container ">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Become a <span className="text-warning">Web Developer</span>
              </h1>
              <p className="lead my-4">
                We focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for their first dev
                role.
              </p>
              <button className="btn btn-primary btn-lg">
                Start The Enrollment
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src="https://careerkarma.com/blog/wp-content/uploads/2019/11/danial-ricaros-FCHlYvR5gJI-unsplash.jpg"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Showcase;
