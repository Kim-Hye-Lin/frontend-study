import React from "react";
import PropsTypes from "prop-types";

const MyComponent = ({ name, children }) => {
  return (
    <div>
      new component {name} <br />
      children {children}
    </div>
  );
};

MyComponent.defaultProps = {
  content: "default",
};

MyComponent.propsTypes = {
  name: PropsTypes.string,
};

export default MyComponent;
