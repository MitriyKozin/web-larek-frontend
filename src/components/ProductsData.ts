
import { IProduct, IProductsData } from "../types"; 
import { IEvents } from "./base/events";

export class ProductData implements IProductsData {
	productsData: IProduct;
    protected _products: IProduct[]; // [] = [];
    protected _preview: string | null = null;
    protected events: IEvents;

    constructor(events: IEvents) {
        this.events = events;
    }

    set products(products: IProduct[]) {
        this._products = products;
        this.events.emit('products:changed');
    }

    get products() {
        return this._products;
    }

    // addProduct(product: IProduct) {
    //     this._products = [product, ...this._products];
    //     this.events.emit('products:changed');
    // }

    // deleteProduct(productId: string, payload: Function | null = null) {
    //     this._products = this._products.filter((product) => product.id !== productId);

    //     if (payload) {
    //         payload();
    //     } else {
    //         this.events.emit('products:changed');
    //     }
    // }

    // updateProduct(product: IProduct, payload: Function | null = null) {
    //     const foundProduct = this._products.find((item) => item.id === product.id);
    //     if (!foundProduct) this.addProduct(product);

    //     Object.assign(foundProduct, product);

    //     if (payload) {
    //         payload();
    //     } else {
    //         this.events.emit('products:changed');
    //     }
    // }

    getProduct(productId: string) {
        return this._products.find((item) => item.id === productId);
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


