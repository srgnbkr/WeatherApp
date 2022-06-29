import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel{
  result:T[];
}
