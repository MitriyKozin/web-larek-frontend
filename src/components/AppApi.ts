import { IApi, IOrder, IProduct, TProductInfo, TOrderData } from '../types';

export class AppApi {
	private _baseApi: IApi;

	constructor(baseApi: IApi) {
		this._baseApi = baseApi;
	}

	getCards(): Promise<IProduct[]> {
		return this._baseApi.get<IProduct[]>(`/product`).then((product: IProduct[]) => product);
	}
    // postOrder():
}
