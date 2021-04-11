import axios from "axios";
import {
  fetchGlobalRequest,
  fetchGlobalSuccess,
  fetchGlobalFail,
} from "../redux/globalComponent";

export const fetchGlobal = () => {
  return (dispatch) => {
    dispatch(fetchGlobalRequest());
    axios
      .get(
        "https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/app.json"
      )
      .then((res) => {
        dispatch(fetchGlobalSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchGlobalFail(err));
      });
  };
};
