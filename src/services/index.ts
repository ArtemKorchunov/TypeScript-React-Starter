export namespace localStorageApi {
  export function getItem(value = "token") {
    return localStorage[value];
  }

  function setItem(prop: string, value: object) {
    localStorage[prop] = value;
  }
  function removeItem(prop: string) {
    localStorage.removeItem(prop);
  }
  function clear() {
    localStorage.clear();
  }
}
