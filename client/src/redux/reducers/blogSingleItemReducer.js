import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function blogSingleItemReducer(
	state = initialState.blogSingleItem,
	action
) {
	switch (action.type) {
		case actionTypes.BLOG_GET_SINGLE_ITEM_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
