import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function blogChangeCategoryReducer(
	state = initialState.blogCurrentCategory,
	action
) {
	switch (action.type) {
		case actionTypes.BLOG_CHANGE_CATEGORY:
			return action.payload;
		default:
			return state;
	}
}
