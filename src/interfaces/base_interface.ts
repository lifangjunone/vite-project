
// 定义通用的返回类型
export interface ApiResponse<T> {
    data: T;
    code: number;
    msg: string;
  }