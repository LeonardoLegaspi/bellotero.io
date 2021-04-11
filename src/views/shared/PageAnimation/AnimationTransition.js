import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideOverflow } from "../../../app/redux/pageData";
import _images from "../../../resources/constants/images";
import { looper } from "../../../services/helpers";

function AnimationTransition() {
  const pageData = useSelector((state) => state.pageData);
  const dispatch = useDispatch();
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    setActive(true);
    dispatch(hideOverflow(active));
    looper(!pageData.loading, () => setActive(false), 3000);
  }, [pageData.changePage]);

  React.useEffect(() => {
    dispatch(hideOverflow(active));
  }, [active]);

  return (
    <div>
      <div className={`waiter ${active ? "active" : ""} `}>
        <div className={`text-anim ${active ? "active" : "hidden"} `}>
          <h3>Calculate Fast. Save Faster.</h3>
          <img src={_images.logos.l_mini_bellotero} alt='' />
        </div>
      </div>
      <div className={`overlay1 ${active ? "active" : ""} `}></div>
      <div className={`overlay2 ${active ? "active" : ""} `}></div>
    </div>
  );
}

export default AnimationTransition;
