import React from "react";
//Services
import _images from "../../../resources/constants/images";
import { useDispatch, useSelector } from "react-redux";
import { findObjItems } from "../../../services/helpers";
import { Link } from "react-router-dom";
import { hideOverflow } from "../../../app/redux/pageData";

function SideBar() {
  const dispatch = useDispatch();
  const globalComponents = useSelector((state) => state.globalComponents);

  const [activeSidebar, setActiveSidebar] = React.useState(false);

  const toggleSidebar = () => {
    if (!activeSidebar) {
      dispatch(hideOverflow());
    } else {
      dispatch(hideOverflow(false));
    }
    setActiveSidebar((prev) => !prev);
  };

  return (
    <div className='sidebar-container'>
      <div
        onClick={() => toggleSidebar()}
        className={`toggler ${activeSidebar ? "toggler__active" : ""}`}>
        <div className='toggler--line'></div>
      </div>

      <div className={`sidebar ${activeSidebar ? "sidebar__active" : ""}`}>
        <img src={_images.logos.l_bellotero} alt='' />
        {findObjItems(globalComponents.data, "items")
          ? findObjItems(globalComponents.data, "items").map((element, i) => (
              <Link
                to={element.route}
                key={i}
                className={globalComponents.activePage === i ? "active" : ""}
                onClick={() => setActiveSidebar(false)}>
                {element.text}
              </Link>
            ))
          : []}
      </div>
    </div>
  );
}

export default SideBar;
