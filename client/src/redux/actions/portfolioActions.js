import * as actionTypes from "./actionTypes";
import axios from "axios";

export function portfolioChangeCategory(portfolioCategory) {
	return {
		type: actionTypes.PORTFOLIO_CHANGE_CATEGORY,
		payload: portfolioCategory,
	};
}

export function portfolioGetItemsSuccess(portfolioItems) {
	return {
		type: actionTypes.PORTFOLIO_GET_ITEMS_SUCCESS,
		payload: portfolioItems,
	};
}


export function portfolioGetItems(portfolioCategoryName) {
	return function (dispatch) {
		let url = "http://localhost:5000/api/portfolio/";
		if (portfolioCategoryName) {
			portfolioCategoryName == "All"
				? (url = url)
				: (url = url + "?search=" + portfolioCategoryName);
		}
		return axios(url).then((response) => {
			dispatch(portfolioGetItemsSuccess(response.data.data.data));
		});
	};
}

export function portfolioGetSingleItemSuccess(portfolioSingleItem) {
	return {
		type: actionTypes.PORTFOLIO_GET_SINGLE_ITEM_SUCCESS,
		payload: portfolioSingleItem,
	};
}

export function portfolioGetSingleItem(portfolioSlugName) {
	return function (dispatch) {
		let url = "http://localhost:5000/api/portfolio/" + portfolioSlugName;
		return axios(url).then((response) => {
			console.log(response.data.data)
			dispatch(portfolioGetSingleItemSuccess(response.data.data));
		})
		.catch((err)=>{
			dispatch(portfolioGetSingleItemSuccess(err.response.data.data));

		})
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
		let url = "http://localhost:5000/api/blog/blogCategories";
		return axios(url).then((response) => {
			dispatch(
				portfolioGetCategoriesSuccess(
					response.data.data[0].portfolioItemCategories
				)
			);
		});
	};
}
