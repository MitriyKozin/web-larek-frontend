import { IEvents } from './base/events';
import { Form } from './common/Form';

/*
 * Интерфейс, описывающий окошко контакты
 * */
export interface IContacts {
	// Телефон
	phone: string;

	// Электронная почта
	email: string;
}

/*
 * Класс, описывающий окошко контакты
 * */
export class ContactsForm extends Form<IContacts> {
	private inputPhone: HTMLInputElement;
    private inputEmail: HTMLInputElement;

	// Конструктор принимает родительский элемент и обработчик событий
	constructor(container: HTMLFormElement, events: IEvents) {
		super(container, events);
	}
	
    setPhone(phone: string) {
        // Ваша логика для установки телефона
		this.inputPhone.value = phone
    }

    setEmail(email: string) {
        // Ваша логика для установки электронной почты
		this.inputEmail.value = email;
	}
}