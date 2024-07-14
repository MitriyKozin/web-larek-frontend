// import { IProduct } from '../types/index';
// import { cloneTemplate } from '../utils/utils';
// import { IEvents } from './base/events';

// export class  Product {
//     protected element: HTMLElement;
//     protected events: IEvents;
//     protected productImage: HTMLElement;
//     protected productTitle: HTMLElement;
//     protected productPrice: HTMLElement;
//     protected productCategory: HTMLElement;
//     protected productTemplate: HTMLTemplateElement = document.querySelector('.card-catalog');
//     // protected productDesctiption: HTMLElement;
//     protected productId: string;

//     constructor(template: HTMLTemplateElement, events: IEvents) {
//         this.events = events;
//         this.element = cloneTemplate(template)
//         this.productImage = this.element.querySelector('.card__image');
//         this.productTitle = this.element.querySelector('.card__title');
//         this.productPrice = this.element.querySelector('.card__price');
//         this.productCategory = this.element.querySelector('.card__category');
//         // this.productDesctiption = this.element.querySelector('.card__text');
//         this.productImage.addEventListener('click', () =>
//             this.events.emit('product:select', { product: this })
//         );
//     }

//     setData(productData: IProduct) {
//         this.productId = productData.id;
//         this.productImage.style.backgroundImage = `url(${productData.image})`;
//         this.productTitle.textContent = productData.title;
//         this.productPrice.textContent = `${productData.price}`;
//         this.productCategory.textContent = productData.category;
//         // this.productDesctiption.textContent = productData.description;
//     }

//     get id() {
//         return this.productId;
//     }

//     render() {
//         return this.element;
//     }
// }







import { IProduct } from '../types/index';
import { cloneTemplate } from '../utils/utils';
import { IEvents } from './base/events';
import { Component } from './base/Component';

export class Product extends Component<IProduct>{
    protected element: HTMLElement;
    protected events: IEvents;
    protected productImage: HTMLElement;
    protected productTitle: HTMLElement;
    protected productPrice: HTMLElement;
    protected productCategory: HTMLElement;
    protected productId: string;

    constructor(protected container: HTMLElement, events: IEvents) {
        super(container);
        this.events = events;

        // Клонируем HTML шаблон
        // this.element = cloneTemplate(template); 
        // Находим эл. внутри клонированного шаблона
        this.productImage = this.container.querySelector('.card__image');
        this.productTitle = this.container.querySelector('.card__title');
        this.productPrice = this.container.querySelector('.card__price');
        this.productCategory = this.container.querySelector('.card__category');
        
        this.productImage.addEventListener('click', () =>
            this.events.emit('product:select', { product: this })
        );
    }
   
    render(data?: Partial<IProduct>): HTMLElement;
    // render(productData: Partial<IProduct>): HTMLElement;
    render(productData: Partial<IProduct> | undefined) {   // getProduct
        
        if (!productData) return this.container;
        this.productCategory.textContent = productData.category;
        this.productPrice.textContent = `${productData.price}`;
        this.productImage.style.backgroundImage = `url(${productData.image})`;
        this.productTitle.textContent = productData.title;
        
        // this.category = productData.category;
        // this.price = `${productData.price}`;
        // this.image = `url(${productData.image})`;
        // this.title = productData.title;
        // this._id = productData._id;    
       
        Object.assign(this);
        return(this.container);
  
    }

    set category (category: string) {
        this.productCategory.textContent = category;
    }

    set price (price: string | null) {
        this.productPrice.textContent = `${price}`;
    }

    set image (image: string) {
        this.productImage.style.backgroundImage = `url(${image})`;
    }

    set title (title: string) {
        this.productTitle.textContent = title;
    }

    set _id (id) {
        this.productId = id;
    }

    get _id() {
        return this.productId;
    }
}








