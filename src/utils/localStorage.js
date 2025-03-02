function localStorangeSetItem(key, value) {
  if (typeof key !== 'string') {
    throw new Error('Error: key must be a string');
  }

  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error('Error setting item in localStorage:', error);
  }
}

function localStorageGetItem(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

function localStorageRemoveItem(key) {
  localStorage.removeItem(key);
}

function localStorageClear() {
  localStorage.clear(key);
}

export {
  localStorangeSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageClear,
};
