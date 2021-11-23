import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "../constants/userConstants"

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_LOGIN_REQUEST });

		const config = {
			baseURL: 'http://localhost:3000/api/v1',
			headers: {
				"Content-type": "application/json"
			}
		};

		const { data } = await axios.post('/auth/login', {
			email, password
		}, config)

		dispatch({ type: USER_LOGIN_SUCCESS, payload: data })

		localStorage.setItem('userInfo', JSON.stringify(data))

	} catch (error) {
		dispatch({
			type: USER_LOGIN_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		})
	}
}

export const logout = () => async (dispatch) => {
	localStorage.removeItem('userInfo');
	dispatch({ type: USER_LOGOUT })
}

export const register = (name, pic, email, password) => async (dispatch) => {
	try {
		dispatch({ type: USER_REGISTER_REQUEST });

		const config = {
			baseURL: 'http://localhost:3000/api/v1',
			headers: {
				"Content-type": "application/json",
			},
		};

		const { data } = await axios.post(
			"/auth/register",
			{ name, image: pic, email, password },
			config
		);

		dispatch({ type: USER_REGISTER_SUCCESS, payload: data });

		dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};

export const updateProfile = (id, name, email, password, image) => async (dispatch, getState) => {

	try {
		dispatch({type: USER_UPDATE_REQUEST});

		const {
			userLogin: { userInfo },
		} = getState();
		
		const config = {
			baseURL: 'http://localhost:3000/api/v1',
			headers: {
				"Content-type": "application/json",
				"x-access-token": userInfo.token
			},
		};

		const { data } = await axios.put(`/users/${id}`, { name, email, password, image },	config);
		dispatch({type: USER_UPDATE_SUCCESS, payload: data})
		dispatch({type: USER_LOGIN_SUCCESS, payload: data})

		localStorage.setItem('userInfo', JSON.stringify(data))

	} catch (error) {
		const message =
		error.response && error.response.data.message
			? error.response.data.message
			: error.message;
		dispatch({
			type: USER_UPDATE_FAIL,
			payload: message
		});
	}
}