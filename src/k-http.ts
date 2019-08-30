import { parseJSON } from "k-util";
import Kxhr from "k-xhr";

interface HttpOptions {
  withCredentials?: boolean;
  onProgress?: (e: ProgressEvent) => void;
  headers?: { [key: string]: string };
}

type Data =
  | Document
  | FormData
  | ReadableStream
  | Blob
  | BufferSource
  | URLSearchParams
  | string
  | null;

export default {
  get(url: string, options?: HttpOptions) {
    return this.getJSON(url, "get", options);
  },

  head(url: string, options?: HttpOptions) {
    return new Kxhr({ url, method: "get", ...options });
  },

  post(url: string, data: Data = null, options?: HttpOptions) {
    return this.send(url, "post", data, options);
  },

  put(url: string, data: Data = null, options?: HttpOptions) {
    return this.send(url, "put", data, options);
  },

  patch(url: string, data: Data = null, options?: HttpOptions) {
    return this.send(url, "patch", data, options);
  },

  del(url: string, options: HttpOptions) {
    return this.getJSON(url, "delete", options);
  },

  connect(url: string, options: HttpOptions) {
    return this.getJSON(url, "connect", options);
  },

  options(url: string, options: HttpOptions) {
    return this.getJSON(url, "options", options);
  },

  trace(url: string, options: HttpOptions) {
    return new Kxhr({ url, method: "delete", ...options });
  },

  getJSON(
    url: string,
    method: "get" | "delete" | "connect" | "options",
    options?: HttpOptions
  ): Kxhr {
    return new Kxhr({ url, method, ...options }).then((resText: string) => {
      return parseJSON(resText) || resText;
    });
  },

  send(url: string, method: "post" | "put" | "patch", data: Data, options?: HttpOptions): Kxhr {
    const xhrOptions = {
      url,
      method,
      data,
      contentType: "application/x-www-form-urlencoded",
      ...options
    };
    if (data) {
      xhrOptions.contentType =
        data.constructor == Document
          ? "text/html"
          : data.constructor == FormData
          ? "multipart/form-data"
          : data.constructor == ReadableStream
          ? "application/octet-stream"
          : "application/json";
    }
    if (xhrOptions.contentType == "application/json") {
      xhrOptions.data = JSON.stringify(xhrOptions.data);
    }
    return new Kxhr(xhrOptions).then((resText: string) => {
      return parseJSON(resText) || resText;
    });
  }
};
