import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function portfolioItemsReducer(
	state = initialState.portfolioItems,
	action
) {
	switch (action.type) {
		case actionTypes.PORTFOLIO_GET_ITEMS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
