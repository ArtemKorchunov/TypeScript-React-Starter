export namespace localStorageApi {
  export function getItem(value = "token") {
    return localStorage[value];
  }

  export function setItem(prop: string, value: object): void {
    localStorage[prop] = value;
  }
  export function removeItem(prop: string): void {
    localStorage.removeItem(prop);
  }
  export function clear(): void {
    localStorage.clear();
  }
}
