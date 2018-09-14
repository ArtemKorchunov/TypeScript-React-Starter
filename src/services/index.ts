export namespace localStorageApi {
  export function getItem(value = "token") {
    return localStorage[value];
  }

  export function setItem(prop: string, value: object) {
    localStorage[prop] = value;
  }
  export function removeItem(prop: string) {
    localStorage.removeItem(prop);
  }
  export function clear() {
    localStorage.clear();
  }
}
