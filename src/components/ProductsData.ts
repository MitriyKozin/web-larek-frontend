
import { IProduct, IProductsData } from "../types"; 
import { IEvents } from "./base/events";

export class ProductData implements IProductsData {
	productsData: IProduct;
    // protected _products: IProduct[];
    protected _products: IProduct[];
    protected _preview: string | null = null;
    protected events: IEvents;
    constructor(events: IEvents) {
        this.events = events;
    }
// сюда нужно передвавать массив товаров, 
// а не объект который присылает сервер.
    set products(products: IProduct[]) { // set product
        this._products = products;  
        this.events.emit('products:changed');
    }

    get products() {
        return this._products;
    }

    get items() {
        return this._products.map((product) => product.items);
      }

    getProduct(productId: string) {
        return this._products.find((item) => item._id === productId);
        }

    set preview(productId: string | null) {
        if (!productId) {
            this._preview = null;
            return;
        }
        const selectedProduct = this.getProduct(productId);
        if (selectedProduct) {
            this._preview = productId;
            this.events.emit('product:selected');
        }
    }

    get preview() {
        return this._preview;
    }
}


