import React from "react";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index({ children }): React.ReactElement {
  return (
    <>
      <ToastContainer />
      <div className="container">{children}</div>
    </>
  );
}

Index.propTypes = {
  children: PropTypes.any,
};

export default Index;
