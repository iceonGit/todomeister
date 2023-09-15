import axios from "axios";
const instance = axios.create({
  baseURL: "https://todomeister-backend.onrender.com/api",
});
export default instance;
