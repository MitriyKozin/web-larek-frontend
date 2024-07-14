export interface IProduct {
  _id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: null | number;
  total: number;
  items: string;
}

export interface IProductsData {
  products: IProduct[];
  preview: string | null;
}

export interface IOrder {
  payment: string;
  total: number;
  address: string;
  email: string;
  phone: string;
}


// export interface IOrderForm {
//   payment: string;
//   address: string;
//   email: string;
//   phone: string;
// }

export interface IOrderData {
  checkValidation(data: Record<keyof IOrder, string>):boolean; 
}

export interface IBuerContactsData {
  checkValidation(data: Record<keyof IBuerContacts, string>):boolean;
}

export interface IBuerContacts { 
    email: string;
    phone: string;
}
// export type TProductInfo = Pick<IProduct, 'title'  | 'category' | 'image' | 'price' | 'description' >;

// export type TBasket = Pick<IProduct, 'title' | 'price'>; // serialNumber

// export type TBuerContactsData = Pick<IBuerContacts, 'phone' | 'email'>;
export type TOrderData = Pick<IProduct, 'title' | 'price'>;
export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE' ; 
export interface IApi {
    baseUrl: string;
    get<T>(uri: string): Promise<T>;
    post<T>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}