import { combineReducers } from "redux";
import globalComponentsReducer from "./globalComponent";
import pageDataReducer from "./pageData";

const reducer = combineReducers({
  globalComponents: globalComponentsReducer,
  pageData: pageDataReducer,
});

export default reducer;
