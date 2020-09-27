import * as actionTypes from "./actionTypes";
import axios from "axios";

export function blogChangeCategory(blogCategory) {
	return {
		type: actionTypes.BLOG_CHANGE_CATEGORY,
		payload: blogCategory,
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
				: (url = url + "?search=" + blogCategoryName);
		}
		return axios(url).then((response) => {
			dispatch(blogGetItemsSuccess(response.data.data.data));
		});
	};
}
export function blogGetSingleItemSuccess(blogSingleItem) {
	return {
		type: actionTypes.BLOG_GET_SINGLE_ITEM_SUCCESS,
		payload: blogSingleItem,
	};
}


export function blogGetSingleItem(blogSlugName) {
	return function (dispatch) {
		let url = "http://localhost:5000/api/blog/" + blogSlugName + "/getSingleblogItem";
		return axios(url).then((response) => {
			console.log(response.data)
			dispatch(blogGetSingleItemSuccess(response.data.data))
		})
		.catch((err)=>{
			dispatch(blogGetSingleItemSuccess(err.response.data.data))
		})
	};
}
export function blogGetCategories() {
	return function (dispatch) {
		let url = "http://localhost:5000/api/blog/blogCategories";
		return axios(url).then((response) => {
			console.log(response.data.data[0].blogItemCategories);

			dispatch(
				blogGetCategoriesSuccess(response.data.data[0].blogItemCategories)
			);
		});
	};
}
