import Kxhr from "k-xhr";

export as namespace kHttp;

export interface HttpOptions {
  withCredentials?: boolean;
  onProgress?: (e: ProgressEvent) => void;
  headers?: { [key: string]: string };
}

export type Data =
  | Document
  | FormData
  | ReadableStream
  | Blob
  | BufferSource
  | URLSearchParams
  | string
  | null;

export function get(url: string, options?: HttpOptions): Kxhr;

export function head(url: string, options?: HttpOptions): Kxhr;

export function post(url: string, data: Data, options?: HttpOptions): Kxhr;

export function put(url: string, data: Data, options?: HttpOptions): Kxhr;

export function patch(url: string, data: Data, options?: HttpOptions): Kxhr;

export function del(url: string, options?: HttpOptions): Kxhr;

export function connect(url: string, options?: HttpOptions): Kxhr;

export function options(url: string, options?: HttpOptions): Kxhr;

export function trace(url: string, options: HttpOptions): Kxhr;
