class storage {
  static set(key: string, value: any) {
    if (typeof value === "object") {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }
  static get(key: string) {
    const data = localStorage.getItem(key);
    try {
      return JSON.parse(data);
    } catch (err) {
      return data;
    }
  }
  static remove(key: string) {
    localStorage.removeItem(key);
  }
}

export default storage;
