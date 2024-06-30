// Переменная хранящая типы данных
export interface ICardProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: null | number;
}

export interface ICardsData {
    productCards: ICardProduct[];
    viewProduct: string | null;
    getCard(cardId: string): ICardProduct;

    checkValidation(data: Record<keyof TOrderInfo, string>):boolean; //TCardInfo
    checkValidation(data: Record<keyof TBuerContactsInfo, string>):boolean; //TCardInfo

}

export interface IOrder {
    paymentMethod: string;
    deliveryAddress: string;
}

export interface IBuerContacts {
    email: string;
    phone: string;
}

export type TOrderInfo = Pick<Product, 'title' | 'price'>;

export type TBuerContactsInfo = Pick<Product, 'email' | 'email'>;

export type TBasket = Pick<Product, 'serialNumber' | 'title' | 'price'>;

export type TCardInfo = Pick<Card, 'title' | 'description' | 'category' | 'image'>;