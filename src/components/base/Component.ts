export abstract class Component<T> {
    constructor(protected readonly container: HTMLElement) {
    }

    render(data?: Partial<T>): HTMLElement {
        Object.assign(this as object, data ?? {}); // ??  если 1 параметр null, то будет взят второй параметр.
        return this.container;                     // this as object THIS должен восприниматся как объект
    }
}