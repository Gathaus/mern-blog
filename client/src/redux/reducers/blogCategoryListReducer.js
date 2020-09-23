import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function blogGetCategoriesReducer(
	state = initialState.blogCurrentCategory,
	action
) {
	switch (action.type) {
		case actionTypes.BLOG_GET_CATEGORIES_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
