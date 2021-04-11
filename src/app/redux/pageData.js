export const TESTIMONIES = "TESTIMONIES",
  CALCULATOR = "CONFIGURATOR";

const FETCH_PAGE_REQUEST = "belloteroio/GET_PAGE_REQUEST";
const FETCH_PAGE_SUCCESS = "belloteroio/GET_PAGE_SUCCESS";
const FETCH_PAGE_FAIL = "belloteroio/GET_PAGE_FAIL";
const CHANGE_PAGE = "belloteroio/CHANGE_PAGE";
const HIDE_OVERFLOW = "belloter/HIDE_OVERFLOW";

export const fetchPageRequest = () => ({
  type: FETCH_PAGE_REQUEST,
});

export const fetchPageSuccess = (globalCompData) => ({
  type: FETCH_PAGE_SUCCESS,
  payload: globalCompData,
});

export const fetchPageFail = (error) => ({
  type: FETCH_PAGE_FAIL,
  payload: error,
});

export const changePage = () => ({
  type: CHANGE_PAGE,
});

export const hideOverflow = (hide = true) => ({
  type: HIDE_OVERFLOW,
  payload: hide,
});

const initialState = {
  loading: false,
  data: { title: "Welcome" },
  error: "",
  changePage: false,
  overflow: false,
};

const pageDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PAGE_REQUEST:
      return { ...state, loading: true };
    case FETCH_PAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
        changePage: false,
      };
    case FETCH_PAGE_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        changePage: true,
      };
    case HIDE_OVERFLOW:
      return {
        ...state,
        overflow: action.payload,
      };
    default:
      return state;
  }
};

export default pageDataReducer;
