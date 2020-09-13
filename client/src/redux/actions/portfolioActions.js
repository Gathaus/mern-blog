import * as actionTypes from "./actionTypes";

export function portfolioChangeCategory(portfolioCategory) {
	return {
		type: actionTypes.PORTFOLIO_CHANGE_CATEGORY,
		payload: portfolioCategory,
	};
}

export function portfolioGetCategoriesSuccess(portfolioCategories) {
	return {
		type: actionTypes.PORTFOLIO_GET_CATEGORIES_SUCCESS,
		payload: portfolioCategories,
	};
}

export function portfolioGetCategories() {
	return function (dispatch) {
		let url = "http://localhost:3000/portfolioCategories";
		return fetch(url)
			.then((response) => response.json())
			.then((result) => dispatch(portfolioGetCategoriesSuccess(result)));
	};
}
