import axios from "axios";
import {
  CALCULATOR,
  changePage,
  fetchPageFail,
  fetchPageRequest,
  fetchPageSuccess,
} from "../redux/pageData";

export const fetchPageData = (page) => {
  var url =
    "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json";
  if (page === CALCULATOR)
    url =
      "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json";

  return (dispatch) => {
    dispatch(changePage());
    dispatch(fetchPageRequest());
    setTimeout(() => {
      axios
        .get(url)
        .then((res) => {
          dispatch(fetchPageSuccess(res.data));
        })
        .catch((err) => {
          dispatch(fetchPageFail(err));
        });
    }, 500);
  };
};
