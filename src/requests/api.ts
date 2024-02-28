import instance from '../interceptors/interceptor'


// 封装 GET 方法
export const GET = async <T>(url: string): Promise<T> => {
  const response: any = await instance.get(url);
  return response; 
};

// 封装 POST 方法
export const POST = async <T>(url: string, data: any): Promise<T> => {
  const response: any = await instance.post(url, data);
  return response; // 返回数据中的 data 属性
};

// 封装 DELETE 方法
export const del = async <T>(url: string): Promise<T> => {
  const response: any = await instance.delete(url);
  return response; // 返回数据中的 data 属性
};