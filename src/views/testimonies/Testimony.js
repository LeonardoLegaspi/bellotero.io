import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../../app/redux/globalComponent";
import images from "../../resources/constants/images";
import { findObjItems } from "../../services/helpers";

function Testimony({ reviews }) {
  const [activeReview, setActiveReview] = React.useState({
    index: 0,
    class: "invisible-to-right",
  });
  const dispatch = useDispatch();
  const globalComponents = useSelector((state) => state.globalComponents);
  const items = findObjItems(globalComponents.data, "items");

  const nextReview = () => {
    moveTestimony(activeReview.index !== reviews.length - 1, true);
  };

  const prevReview = () => {
    moveTestimony(activeReview.index !== 0, false);
  };

  function moveTestimony(condition, isForward) {
    if (condition) {
      setActiveReview({
        ...activeReview,
        index: isForward ? activeReview.index + 1 : activeReview.index - 1,
        class: isForward ? "invisible-to-right" : "invisible-to-left",
      });
    } else {
      setActiveReview({
        ...activeReview,
        index: isForward ? 0 : reviews.length - 1,
        class: isForward ? "invisible-to-right" : "invisible-to-left",
      });
    }
  }

  const clickLink = (i) => {
    if (globalComponents.activePage !== i) {
      dispatch(setActivePage(i));
    }
  };

  return (
    <div className='testimonies'>
      {reviews.map((review, i) => (
        <div
          key={i}
          className={`grid testimony ${
            activeReview.index !== i ? activeReview.class : ""
          }`}>
          <div className='subject col-5 col-md-4 col-sm-8'>
            <h2>{review.name}</h2>
            <p>{review.position}</p>
            <div className='try-us'>
              <Link to={items[1].route} key={i} onClick={() => clickLink(1)}>
                Try us!
                <img src={images.icons.i_blue_arrow} alt='' />
              </Link>
            </div>
          </div>
          <div className='review col-7 col-md-6 col-sm-8'>
            "{review.comment}"
          </div>
        </div>
      ))}
      <div className='button-group'>
        <div className='counter'>
          <span className=''>{`${activeReview.index + 1}/${
            reviews.length
          }`}</span>
        </div>
        <button className='button scheme' onClick={prevReview}>
          <img src={images.icons.i_white_arrow} alt='' />
        </button>
        <button className='button scheme' onClick={nextReview}>
          <img
            style={{ transform: "rotate(180deg)", paddingBottom: "3px" }}
            src={images.icons.i_white_arrow}
            alt=''
          />
        </button>
      </div>
    </div>
  );
}

export default Testimony;
