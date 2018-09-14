import axios from "axios";
import getRootUrl from "./getRootUrl";
import { localStorageApi } from "../index";
import history from "../history";

async function sendRequest(path: string, opts: { headers?: object }) {
  const headers = Object.assign({}, opts.headers || {}, {
    "Content-type": "application/json; charset=UTF-8"
  });

  try {
    return await axios(
      `${getRootUrl()}${path}`,
      Object.assign({ method: "POST" }, opts, { headers })
    );
  } catch (error) {
    const {
      response: { data }
    } = error;
    if (data.name === "Unauthorized") {
      localStorageApi.clear();
      history.push("/login");
    }
    throw error;
  }
}
export default sendRequest;
