import { CATEGORIES_LIST_FAIL, CATEGORIES_LIST_REQUEST, CATEGORIES_LIST_SUCCESS } from "../constants/categoriesConstants";

export const categoriesListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
      case CATEGORIES_LIST_REQUEST:
        return { loading: true };
      case CATEGORIES_LIST_SUCCESS:
        return { loading: false, categories: action.payload };
      case CATEGORIES_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };