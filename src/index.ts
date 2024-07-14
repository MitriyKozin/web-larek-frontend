import './scss/styles.scss';
import { EventEmitter } from './components/base/events';
import { ProductData } from './components/ProductsData';
import { Api } from './components/base/api';
import { IApi, IProduct } from './types/index';
import { API_URL } from './utils/constants';
import { AppApi } from './components/AppApi';
import { Product } from './components/Product';
import { ProductsContainer } from './components/ProductsConteiner';
import { cloneTemplate } from './utils/utils';
import { testProducts } from './utils/tempConstants';
const events = new EventEmitter();
const baseApi: IApi = new Api(API_URL);
const api = new AppApi(baseApi);
const productsData = new ProductData(events);
const productsContainer = new ProductsContainer(
	document.querySelector('.gallery')
);
const productTemplate: HTMLTemplateElement =
	document.querySelector('#card-catalog');
events.onAll((event) => {
	console.log(event.eventName, event.data);
});
api.getProducts()
	.then((initialProducts) => {
		productsData.products = initialProducts;
		// productsData.setProduct(initialProducts);
  	console.log(productsData.products);
    events.emit('initialData:loaded');
	})
	.catch((err) => {
		console.error('Ошибка вывода карточек:', err);
	});



// const product = new Product(cloneTemplate(productTemplate), events);
// const product1 = new Product(cloneTemplate(productTemplate), events);
// const productArrey = [];
// productArrey.push(product.render(testProducts[3]));
// productArrey.push(product1.render(testProducts[7]));
// productsContainer.render({catalog: productArrey});


events.on('initialData:loaded', () => {
	const productCards = productsData.products.map((product) => {
	  const productInstance = new Product(cloneTemplate(productTemplate), events);
		return productInstance.render(product);
  });
	productsContainer.render({ catalog: productCards });
});


// events.on('initialData:loaded', () => {
// 	const productCards = productsData.getProduct().map((product) => {
// 	  const productInstance = new Product(cloneTemplate(productTemplate), events);
// 		return productInstance.render(product);
//   });
// 	productsContainer.render({ catalog: productCards });
// 	// productsContainer.render({ products });

// });



