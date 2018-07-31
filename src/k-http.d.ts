export as namespace kHttp;

interface HttpOptions {
  withCredentials?: boolean | string;
  onprogress?: (e: ProgressEvent) => void;
  headers?: { [key: string]: any };
}

export function get(url: string, options?: HttpOptions): any;

export function post(
  url: string,
  data?:
    | Document
    | FormData
    | ReadableStream
    | Blob
    | { [key: string]: any }
    | null,
  options?: HttpOptions
): any;

export function put(
  url: string,
  data?:
    | Document
    | FormData
    | ReadableStream
    | Blob
    | { [key: string]: any }
    | null,
  options?: HttpOptions
): any;

export function del(url: string, options?: HttpOptions): any;
