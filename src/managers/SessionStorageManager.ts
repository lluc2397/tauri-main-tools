
export default class SessionStorageManager {
    constructor() { }

    setValue(key: string, value: any): void {
        window.sessionStorage.setItem(key, value);
    };

    getValue(key: string): any { return window.sessionStorage.getItem(key); };

    replaceValue(key: string, value: any): any {
        let oldValue = window.sessionStorage.getItem(key);
        this.setValue(key, value);
        return oldValue;
    };
}


export class SessionStorageManagerStatic {

    static setValue(key: string, value: any): void {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    };

    static setStringValue(key: string, value: string): void {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    };

    static getValue(key: string): any {
        const item = window.sessionStorage.getItem(key);
        if (item === null || item === "undefined") {
            return "";
        }
        return JSON.parse(item);
    };

    static getStringValue(key: string): any { return window.sessionStorage.getItem(key); };

    static replaceValue(key: string, value: any): any {
        let oldValue = this.getValue(key);
        this.setValue(key, value);
        return oldValue;
    };

    static replaceStringValue(key: string, value: string): any {
        let oldValue = this.getStringValue(key);
        this.setStringValue(key, value);
        return oldValue;
    };
}