import axios from "axios";
import { CATEGORIES_LIST_FAIL, CATEGORIES_LIST_REQUEST, CATEGORIES_LIST_SUCCESS } from "../constants/categoriesConstants";

export const listCategories = () => async (dispatch, getState) => {
	try {
		dispatch({
			type: CATEGORIES_LIST_REQUEST,
		});

		const {
			userLogin: { userInfo },
		} = getState();

		const config = {
			baseURL: 'http://localhost:3000/api/v1',
			headers: {
				"x-access-token": userInfo.token,
			},
		};

		const { data } = await axios.get(`/categories`, config);

		dispatch({
			type: CATEGORIES_LIST_SUCCESS,
			payload: data,
		});
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({
			type: CATEGORIES_LIST_FAIL,
			payload: message,
		});
	}
};