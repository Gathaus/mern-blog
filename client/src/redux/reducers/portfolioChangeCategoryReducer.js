import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function portfolioCategoryListReducer(
	state = initialState.portfolioCurrentCategory,
	action
) {
	switch (action.type) {
		case actionTypes.PORTFOLIO_CHANGE_CATEGORY:
			return action.payload;
		default:
			return state;
	}
}
