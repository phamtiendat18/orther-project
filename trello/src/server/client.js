import { config } from "./config";
const { SERVER_API } = config;

export const client = {
  serverApi: SERVER_API,
  token: null,
  apiKey: null,
  setURL: function (url) {
    this.serverApi = url;
  },
  setToken: function (token) {
    this.token = token;
  },
  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },
  send: async function (url, method, body = null) {
    url = this.serverApi + url;
    const headers = {
      "Content-Type": "application/json",
    };
    if (this.token) headers["Authorization"] = `Bearer ${this.token}`;
    if (this.apiKey) headers["X-Api-Key"] = this.apiKey;
    const options = {
      method,
      headers,
    };
    if (body) options.body = JSON.stringify(body);
    const response = await fetch(url, options);
    const data = response.json();
    return { response, data };
  },
  get: function (url) {
    return this.send(url, "GET");
  },
  post: function (url, body) {
    return this.send(url, "POST", body);
  },
  put: function (url, body) {
    return this.send(url, "PUT", body);
  },
  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },
  delete: function (url) {
    return this.send(url, "DELETE");
  },
};
