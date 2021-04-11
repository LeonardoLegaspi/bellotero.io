const FETCH_GLOBAL_COMPONENTS_REQUEST =
  "belloteroio/GET_GLOBAL_COMPONENTS_REQUEST";
const FETCH_GLOBAL_COMPONENTS_SUCCESS =
  "belloteroio/GET_GLOBAL_COMPONENTS_SUCCESS";
const FETCH_GLOBAL_COMPONENTS_FAIL = "belloteroio/GET_GLOBAL_COMPONENTS_FAIL";
const SET_ACTIVE_NAV_LINK = "belloteroio/SET_ACTIVE_NAV_LINK";

export const fetchGlobalRequest = () => ({
  type: FETCH_GLOBAL_COMPONENTS_REQUEST,
});

export const fetchGlobalSuccess = (globalCompData) => ({
  type: FETCH_GLOBAL_COMPONENTS_SUCCESS,
  payload: globalCompData,
});

export const fetchGlobalFail = (error) => ({
  type: FETCH_GLOBAL_COMPONENTS_FAIL,
  payload: error,
});

export const setActivePage = (LinkIndex) => ({
  type: SET_ACTIVE_NAV_LINK,
  payload: LinkIndex,
});

const initialState = {
  loading: false,
  data: {},
  activePage: 0,
  error: "",
  hideOverflow: false,
};

const globalComponentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GLOBAL_COMPONENTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_GLOBAL_COMPONENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_GLOBAL_COMPONENTS_FAIL:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case SET_ACTIVE_NAV_LINK:
      return {
        ...state,
        activePage: action.payload,
      };
    default:
      return state;
  }
};

export default globalComponentsReducer;
