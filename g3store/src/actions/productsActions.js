import axios from "axios";
import { PRODUCTS_CREATE_FAIL, PRODUCTS_CREATE_REQUEST, PRODUCTS_CREATE_SUCCESS, PRODUCTS_DELETE_FAIL, PRODUCTS_DELETE_REQUEST, PRODUCTS_DELETE_SUCCESS, PRODUCTS_LIST_FAIL, PRODUCTS_LIST_REQUEST, PRODUCTS_LIST_SUCCESS, PRODUCTS_UPDATE_FAIL, PRODUCTS_UPDATE_REQUEST, PRODUCTS_UPDATE_SUCCESS } from "../constants/productConstants";

export const listProducts = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCTS_LIST_REQUEST,
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

    const { data } = await axios.get(`/products`, config);

    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCTS_LIST_FAIL,
      payload: message,
    });
  }
};

export const createProductAction = (name, price, description, imageUrl) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCTS_CREATE_REQUEST,
    });

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

    const { data } = await axios.post(
      `/products`,
      { name, price, description, imageUrl },
      config
    );

    dispatch({ type: PRODUCTS_CREATE_SUCCESS, payload: data, });

  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCTS_CREATE_FAIL,
      payload: message,
    });
  }
};

export const updateProductAction = (id, name, price, description, imageUrl) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCTS_UPDATE_REQUEST,
    });

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

    const { data } = await axios.put(
      `/products/${id}`,
      { name, price, description, imageUrl },
      config
    );

    dispatch({
      type: PRODUCTS_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCTS_UPDATE_FAIL,
      payload: message,
    });
  }
};

export const deleteProductAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCTS_DELETE_REQUEST,
    })

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
    
    const { data } = await axios.delete(`/products/${id}`, config)

    dispatch({
      type: PRODUCTS_DELETE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCTS_DELETE_FAIL,
      payload: message,
    });
  }
}