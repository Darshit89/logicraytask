import React from "react";

function Navbar() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand-lg  navbar-dark bg-dark fl">
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="text-white col-md-12 col-sm-10 col-10 justify-content-center">
              <div>
                <h4>LOGO/Image</h4>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
