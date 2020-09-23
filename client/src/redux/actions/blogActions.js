import * as actionTypes from "./actionTypes";
import axios from "axios";
import { portfolioGetItems } from "./portfolioActions";

export function blogChangeCategory(blogCategory) {
	return {
		type: actionTypes.BLOG_CHANGE_CATEGORY,
		patload: blogCategory,
	};
}

export function blogGetItemsSuccess(blogItems) {
	return {
		type: actionTypes.BLOG_GET_ITEMS_SUCCESS,
		payload: blogItems,
	};
}


export function blogGetCategoriesSuccess(blogCategories) {
	return {
		type: actionTypes.BLOG_GET_CATEGORIES_SUCCESS,
		payload: blogCategories,
	};
}
export function blogGetItems(blogCategoryName) {
	return function (dispatch) {
		let url = "http://localhost:5000/api/blog";
		if (blogCategoryName) {
			blogCategoryName == "All"
				? (url = url)
				: (url = url + "?categoryTag=" + blogCategoryName);
		}
		return axios(url).then((response) => {
			dispatch(blogGetItemsSuccess(response.data.data));
		});
	};
}

export function blogGetCategories() {
	return function (dispatch) {
		let url = "http://localhost:5000/api/blog/blogCategories";
		return axios(url).then((response) =>{
			console.log(response.data.data[0].blogItemCategories);
	
			dispatch(blogGetCategoriesSuccess(response.data.data[0].blogItemCategories))
		});
	};
}

