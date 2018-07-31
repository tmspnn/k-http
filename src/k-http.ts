import kXhr from "k-xhr";

interface HttpOptions {
  withCredentials?: boolean | string;
  onprogress?: (e: Event) => void;
  headers?: { [key: string]: any };
}

export default {
  get(url: string, options?: HttpOptions): any {
    const xhrOptions = Object.assign({ url }, options);
    return kXhr(xhrOptions).then(
      (res: string) => (jsonLike(res) ? JSON.parse(res) : res)
    );
  },

  post(
    url: string,
    data?:
      | Document
      | FormData
      | ReadableStream
      | Blob
      | { [key: string]: any }
      | null,
    options?: HttpOptions
  ): any {
    return send(url, "post", data, options);
  },

  put(
    url: string,
    data?:
      | Document
      | FormData
      | ReadableStream
      | Blob
      | { [key: string]: any }
      | null,
    options?: HttpOptions
  ): any {
    return send(url, "put", data, options);
  },

  del(url: string, options?: HttpOptions): any {
    return kXhr(Object.assign({ url, method: "delete" }, options)).then(
      (res: string) => (jsonLike(res) ? JSON.parse(res) : res)
    );
  }
};

function jsonLike(s: string): boolean {
  const char0 = s.charAt(0);
  return char0 == "{" || char0 == "[";
}

function send(
  url: string,
  method: string,
  data?:
    | Document
    | FormData
    | ReadableStream
    | Blob
    | { [key: string]: any }
    | null,
  options?: HttpOptions
): any {
  const xhrOptions = Object.assign({ url, method, data }, options);
  if (data instanceof Object && data.constructor == Object) {
    Object.assign(xhrOptions, {
      contentType: "application/json",
      data: JSON.stringify(data)
    });
  }
  const xhr = kXhr(xhrOptions as any) as any;
  return xhr
    .then((res: string) => (jsonLike(res) ? JSON.parse(res) : res))
    .catch((e: any) => {
      if (typeof e == "string" && jsonLike(e)) {
        xhr.error = JSON.parse(e);
      }
    });
}
