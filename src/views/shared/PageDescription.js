import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPageData } from "../../app/middleware/pageDataMW";
import { findObjItems } from "../../services/helpers";

function PageDescription({ page }) {
  const dispatch = useDispatch();
  const pageData = useSelector((state) => state.pageData);

  React.useEffect(() => {
    dispatch(fetchPageData(page));
  }, []);

  return (
    <div className='page_descrip'>
      <h1 className={"inverted page_title"}>
        <span>{findObjItems(pageData.data, "title")}</span>
      </h1>

      {findObjItems(pageData.data, "description") ? (
        <p className='description'>
          {findObjItems(pageData.data, "description")}
        </p>
      ) : null}
    </div>
  );
}

export default PageDescription;
