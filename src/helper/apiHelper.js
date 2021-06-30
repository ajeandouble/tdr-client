import axios from "axios";
import { toast } from 'react-toastify';

export const apiCall = async ({ url, method, payload, params, options = {} }) => {
  try {
    const response = await axios({
      method: method || "GET",
      url: url,
      data: payload,
      params,
      ...options
    });
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
			if (!['/login', '/signup'].includes(window.location.pathname))
      	window.location.href = "/login";
    };
    throw error;
  }
};

export const handleAPIError = (error) => {
  if (error) {
    if (error.response) {
      toast.error(error.response.data.body.message);
    } else if (error.message) {
      toast.error(error.message);
    } else {
      toast.error('Something went wrong');
    }
  } else {
    toast.error('Something went wrong');
  }
};
