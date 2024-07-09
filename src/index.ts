
import './scss/styles.scss';
import { EventEmitter, IEvents } from './components/base/events';
import { ProductData } from './components/ProductsData';
import { Api } from './components/base/api';
import { IApi } from './types/index';
import { API_URL } from './utils/constants';
import { AppApi } from './components/AppApi';
import { testProducts } from './utils/tempConstants';
import { Product } from './components/Product';
import { ProductsContainer } from './components/ProductsConteiner';
import { cloneTemplate } from './utils/utils';

const events = new EventEmitter()

const baseApi: IApi = new Api(API_URL);
const api = new AppApi(baseApi); 

const productsData = new ProductData(events)

const productsContainer = new ProductsContainer (
	document.querySelector('.gallery')
);

const productTemplate: HTMLTemplateElement = 
document.querySelector('#card-catalog'); //  .card-catalog.card-preview .card-basket

events.onAll((event) => {
    console.log(event.eventName, event.data)
})

Promise.all([api.getCards()]) //api.postOrder()
	.then(([initialProducts]) => {  // orderInfo,
		productsData.products = initialProducts;
        // console.log(productsData.products)
	})
	.catch((err) => {
		console.error(err);
    });

const product = new Product(cloneTemplate(productTemplate), events);
const product1 = new Product(cloneTemplate(productTemplate), events);
const productArray = [];
productArray.push(product.render(testProducts[4]));
productArray.push(product1.render(testProducts[7]));

productsContainer.render({catalog:productArray})

  

