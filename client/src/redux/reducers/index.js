import { combineReducers } from "redux";
import portfolioChangeCategoryReducer from "./portfolioChangeCategoryReducer";
import portfolioCategoryListReducer from "./portfolioCategoryListReducer";
import portfolioItemsReducer from "./portfolioItemsReducer";

const rootReducer = combineReducers({
	portfolioChangeCategoryReducer,
	portfolioCategoryListReducer,
	portfolioItemsReducer,
});

export default rootReducer;
