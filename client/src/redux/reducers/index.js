import { combineReducers } from "redux";
import portfolioChangeCategoryReducer from "./portfolioChangeCategoryReducer";
import portfolioCategoryListReducer from "./portfolioCategoryListReducer";
import portfolioItemsReducer from "./portfolioItemsReducer";
import blogItemsReducer from "./blogItemsReducer";
import blogChangeCategoryReducer from "./blogChangeCategoryReducer";
import blogCategoryListReducer from "./blogCategoryListReducer";

const rootReducer = combineReducers({
	portfolioChangeCategoryReducer,
	portfolioCategoryListReducer,
	portfolioItemsReducer,
	blogItemsReducer,
	blogChangeCategoryReducer,
	blogCategoryListReducer,
});

export default rootReducer;
