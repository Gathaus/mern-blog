import { combineReducers } from "redux";
import portfolioChangeCategoryReducer from "./portfolioChangeCategoryReducer";
import portfolioCategoryListReducer from "./portfolioCategoryListReducer";

const rootReducer = combineReducers({
	portfolioChangeCategoryReducer,
	portfolioCategoryListReducer,
});

export default rootReducer;
