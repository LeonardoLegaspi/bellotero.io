import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../../app/redux/globalComponent";
import { TESTIMONIES } from "../../app/redux/pageData";
import { findObjItems } from "../../services/helpers";
import PageDescription from "../shared/PageDescription";
import Testimony from "./Testimony";

function Testimonies() {
  const pageData = useSelector((state) => state.pageData);

  const reviews = findObjItems(pageData.data, "reviews");

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setActivePage(0));
  }, []);

  return (
    <div className='page-body'>
      <PageDescription page={TESTIMONIES}></PageDescription>
      <Testimony reviews={Object.values(reviews)}></Testimony>
    </div>
  );
}

export default Testimonies;
