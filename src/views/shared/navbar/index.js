import React from "react";
//Hooks
import { useDispatch } from "react-redux";
//Components
import Links from "./Links";
//Services
import { fetchGlobal } from "../../../app/middleware/globalComponentMW";
import _images from "../../../resources/constants/images";

function Navbar() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGlobal());
  }, []);

  return (
    <div className='navbar'>
      <img className='logo' src={_images.logos.l_bellotero} alt='' />
      <Links></Links>
    </div>
  );
}

export default Navbar;
