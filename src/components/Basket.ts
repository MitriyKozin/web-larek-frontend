import { IProduct } from '../types';
import { handlePrice } from '../utils/utils';
import { Component } from './base/Component';
import { IEvents } from './base/events';
// import { refreshIndices } from '../index';

/*
 * Интерфейс, описывающий корзину товаров
 * */
export interface IBasket {
	// Массив элементов li с товаром
	list: HTMLElement[];
	// Общая цена товаров
	price: number;
}

/*
 * Класс, описывающий корзину товаров
 * */
export class Basket extends Component<IBasket> {
	// Ссылки на внутренние элементы
	protected _list: HTMLElement; // protected
	protected _price: HTMLElement;
	protected _button: HTMLButtonElement;

	// Конструктор принимает имя блока, родительский элемент и обработчик событий
	constructor(
		protected blockName: string,
		container: HTMLElement,
		protected events: IEvents
	) {
		super(container);

		this._button = container.querySelector(`.${blockName}__button`);
		this._price = container.querySelector(`.${blockName}__price`);
		this._list = container.querySelector(`.${blockName}__list`);

		if (this._button) {
			this._button.addEventListener('click', () =>
				this.events.emit('basket:order')
			);
		}
	}

	// Сеттер для общей цены
	set price(price: number) {
    	this.setText(this._price, handlePrice(price) + ' синапсов');
	}

	// Сеттер для списка товаров
	set list(items: HTMLElement[]) {
		this._list.replaceChildren(...items);
		this.setDisabled(this._button, items.length === 0);
	}

	// Метод отключающий кнопку "Оформить"
	disableButton() {
		this.setDisabled(this._button, true);
	}
	
// Сделаю публичный метод для получения списка элементов по другому не выйдет.
getList(): HTMLElement {
    return this._list;
  }
}

export interface IProductBasket extends IProduct {
	id: string;
	index: number;
}

export interface IStoreItemBasketActions {
	onClick: (event: MouseEvent) => void;
}

export class StoreItemBasket extends Component<IProductBasket> {
	protected _index: HTMLElement;
	protected _title: HTMLElement;
	protected _price: HTMLElement;
	protected _button: HTMLButtonElement;

	constructor(
		protected blockName: string,
		container: HTMLElement,
		actions?: IStoreItemBasketActions
	) {
		super(container);

		this._title = container.querySelector(`.${blockName}__title`);
		this._index = container.querySelector(`.basket__item-index`);
		this._price = container.querySelector(`.${blockName}__price`);
		this._button = container.querySelector(`.${blockName}__button`);

		if (this._button) {
			this._button.addEventListener('click', (evt) => {
				this.container.remove();
				actions?.onClick(evt);
			});
		}
	}

	set title(value: string) {
		this.setText(this._title, value);
	}

	set index(value: number) {
		this.setText(this._index, value.toString());
	}

	set price(value: number) {
		this.setText(this._price, handlePrice(value) + ' синапсов');
	}
}

