import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function portfolioSingleItemReducer(
	state = initialState.portfolioSingleItem,
	action
) {
	switch (action.type) {
		case actionTypes.PORTFOLIO_GET_SINGLE_ITEM_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
