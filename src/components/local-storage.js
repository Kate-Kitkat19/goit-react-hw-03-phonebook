class LocalStorage {
  load(key) {
    try {
      const infoStringified = localStorage.getItem(key);
      return infoStringified === null ? undefined : JSON.parse(infoStringified);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }

  save(key, value) {
    try {
      const infoStringified = JSON.stringify(value);
      localStorage.setItem(key, infoStringified);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  }

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  }
}


export const localStore = new LocalStorage();