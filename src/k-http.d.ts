export = kHttp;

export function get(
  url: string,
  options?: {
    withCredentials?: boolean | string;
    onprogress?: (e: Event) => void;
  }
): any;

export function post(
  url: string,
  data?: Document | FormData | ReadableStream | Blob | null,
  options?: {
    withCredentials?: boolean | string;
    onprogress?: (e: Event) => void;
  }
): any;

export function put(
  url: string,
  data?: Document | FormData | ReadableStream | Blob | null,
  options?: {
    withCredentials?: boolean | string;
    onprogress?: (e: Event) => void;
  }
): any;

export function del(url: string, options?: { withCredentials?: boolean | string }): any;
