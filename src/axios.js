import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-f20b2.cloudfunctions.net/api",
});

export default instance;
