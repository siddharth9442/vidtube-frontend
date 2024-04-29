import axios from "axios";

export const registerUser = async (data) => {
  try {
    const response = await axios.post("api/v1/users/register", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response) {
      return response;
    }
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axios.post("api/v1/users/login", data);
    if (response) {
      return response;
    }
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await axios.get("api/v1/users/current-user");
    if (response) {
      return response.data.data;
    }
  } catch (error) {
    throw error;
  }
};

export const updateAccount = async (data) => {
  try {
    const response = await axios.patch("api/v1/users/update-account", data);
    if (response) {
      return response;
    }
  } catch (error) {
    throw error;
  }
};
