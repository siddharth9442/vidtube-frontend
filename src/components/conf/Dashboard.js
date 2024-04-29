import axios from "axios";

export const getChannelStats = async () => {
  try {
    const response = await axios.get("/api/v1/dashboard/stats");
    if (response) {
      return response.data.data;
    }
  } catch (error) {
    throw error;
  }
};
