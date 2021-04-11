import React from "react";
//Hooks
import { useSelector } from "react-redux";
//Components
import { Link } from "react-router-dom";
//Services
import { findObjItems } from "../../../services/helpers";

function Links() {
  const globalComponents = useSelector((state) => state.globalComponents);

  return (
    <div className='navbar--links'>
      {findObjItems(globalComponents.data, "items")
        ? findObjItems(globalComponents.data, "items").map((element, i) => (
            <Link
              to={element.route}
              key={i}
              className={globalComponents.activePage === i ? "active-tab" : ""}>
              {element.text}
            </Link>
          ))
        : null}
    </div>
  );
}

export default Links;
