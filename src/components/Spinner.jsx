import React from "react";
import "../styles/Spinner.css";
// los archivos de estilos (.css) son necesarios con su extension
// los archivos .jsx, .js y las dependencias pueden ir sin su extension
const Spinner = () => {
  return (
    <div className="spinner">
      <div className="cube1"></div>
      <div className="cube2"></div>
    </div>
  );
};

export default Spinner;
