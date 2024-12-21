import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_END_POINT,
  withCredentials: true,
});

let refresh = false;

// Add a request interceptor to attach the access token from localStorage
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token refresh on 401 error
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !refresh) {
      refresh = true;

      try {
        // Call the refresh endpoint to get a new access token
        const { data } = await axiosInstance.get("/auth/refresh", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("data: ", data);

        // Set the new token in localStorage and update axios defaults
        localStorage.setItem("userToken", data.token);
        axiosInstance.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.token}`;

        // Retry the original request with the new token
        originalRequest.headers["Authorization"] = `Bearer ${data.token}`;
        refresh = false;
        return axiosInstance(originalRequest);
      } catch (error) {
        // If refresh token fails (or is expired), remove token and reload page
        localStorage.removeItem("userToken");
        window.location.reload();
        return Promise.reject(error);
      }
    }

    refresh = false;
    return Promise.reject(error);
  }
);
