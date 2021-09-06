export type Method = 'get' | 'delete' | 'post' | 'put' | 'patch';
export type RequestsType = Record<string, { method: Method; url: string }>;
