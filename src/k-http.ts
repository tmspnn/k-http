import kXhr from "k-xhr";

export default {
  get(
    url: string,
    options?: {
      withCredentials?: boolean | string;
      onprogress?: (e: Event) => void;
    }
  ): any {
    const xhrOptions = Object.assign({ url }, options);
    return kXhr(xhrOptions).then(
      (res: string) => (jsonLike(res) ? JSON.parse(res) : res)
    );
  },

  post(
    url: string,
    data?: Document | FormData | ReadableStream | Blob | null,
    options?: {
      withCredentials?: boolean | string;
      onprogress?: (e: Event) => void;
    }
  ): any {
    return send(url, "post", data, options);
  },

  put(
    url: string,
    data?: Document | FormData | ReadableStream | Blob | null,
    options?: {
      withCredentials?: boolean | string;
      onprogress?: (e: Event) => void;
    }
  ): any {
    return send(url, "put", data, options);
  },

  del(url: string, options?: { withCredentials?: boolean | string }): any {
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
  data?: Document | FormData | ReadableStream | Blob | null,
  options?: {
    withCredentials?: boolean | string;
    onprogress?: (e: Event) => void;
  }
): any {
  const xhrOptions = Object.assign({ url, method }, options);
  if (data instanceof Object && data.constructor == Object) {
    Object.assign(xhrOptions, {
      contentType: "application/json",
      data: JSON.stringify(data)
    });
  }
  return kXhr(xhrOptions).then(
    (res: string) => (jsonLike(res) ? JSON.parse(res) : res)
  );
}
