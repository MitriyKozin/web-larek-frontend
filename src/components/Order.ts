import { IEvents } from './base/events';
import { Form } from './common/Form';

/*
 * Интерфейс, описывающий окошко заказа товара
 * */
export interface IOrder {
	// Адрес
	address: string;

	// Способ оплаты
	payment: string;
}

/*
 * Класс, описывающий окошко заказа товара
 * */
export class OrderForm extends Form<IOrder> {
	// Сссылки на внутренние элементы
	protected _card: HTMLButtonElement;
	protected _cash: HTMLButtonElement;

	// Конструктор принимает имя блока, родительский элемент и обработчик событий
	constructor(
		protected blockName: string,
		container: HTMLFormElement,
		protected events: IEvents
	) {
		super(container, events);

		this._card = container.elements.namedItem('card') as HTMLButtonElement;
		this._cash = container.elements.namedItem('cash') as HTMLButtonElement;

		if (this._cash) {
			this._cash.addEventListener('click', () => {
				this.toggleCash();
				this.onInputChange('payment', 'cash');
				this.toggleCard(false);
			});
		}
		if (this._card) {
			this._card.addEventListener('click', () => {
				this.toggleCard();
				this.onInputChange('payment', 'card');
				this.toggleCash(false);
			});
		}
	}

	// Метод, отключающий подсвечивание кнопок
	disableButtons() {
		this.toggleClass(this._cash, 'button_alt-active', false);
		this.toggleClass(this._card, 'button_alt-active', false);
	}

	private toggleCard(state: boolean = true) {
        this.toggleClass(this._card, 'button_alt-active', state);
    }

    private toggleCash(state: boolean = true) {
        this.toggleClass(this._cash, 'button_alt-active', state);
    } 
}

