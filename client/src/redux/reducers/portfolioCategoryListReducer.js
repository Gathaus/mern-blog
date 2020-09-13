import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function portfolioGetCategoriesReducer(
	state = initialState.portfolioCurrentCategory,
	action
) {
	switch (action.type) {
		case actionTypes.PORTFOLIO_GET_CATEGORIES_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
