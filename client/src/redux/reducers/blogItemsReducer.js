import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function blogItemsReducer(
	state = initialState.blogItems,
	action
) {
	switch (action.type) {
		case actionTypes.BLOG_GET_ITEMS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
