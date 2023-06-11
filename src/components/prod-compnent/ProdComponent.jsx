import React from "react";
import "./ProdComponent.css";
const ProdComponent = ({ prod }) => {
  return (
    <div className="prod-div">
      {prod.map((item) => {
        return (
          <>
            {item?.logo_path !== null && (
              <img
                className="logo-prod"
                src={"https://image.tmdb.org/t/p/original" + item?.logo_path}
                alt=""
                width={"10%"}
                height={"10%"}
              />
            )}
          </>
        );
      })}
    </div>
  );
};
export default ProdComponent;
