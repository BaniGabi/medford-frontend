import axios from "axios";

export default axios.create({
  baseURL: "https://tender-calf-overalls.cyclic.app/api",
  headers: {
    "Content-type": "application/json",
  },
});
