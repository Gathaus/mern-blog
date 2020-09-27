import { combineReducers } from "redux";
import portfolioChangeCategoryReducer from "./portfolioChangeCategoryReducer";
import portfolioCategoryListReducer from "./portfolioCategoryListReducer";
import portfolioItemsReducer from "./portfolioItemsReducer";
import portfolioSingleItemReducer from "./portfolioSingleItemReducer";
import blogItemsReducer from "./blogItemsReducer";
import blogSingleItemReducer from "./blogSingleItemReducer";
import blogChangeCategoryReducer from "./blogChangeCategoryReducer";
import blogCategoryListReducer from "./blogCategoryListReducer";
const rootReducer = combineReducers({
	portfolioChangeCategoryReducer,
	portfolioCategoryListReducer,
	portfolioItemsReducer,
	blogItemsReducer,
	blogChangeCategoryReducer,
	blogCategoryListReducer,
	portfolioSingleItemReducer,
	blogSingleItemReducer
});

export default rootReducer;
