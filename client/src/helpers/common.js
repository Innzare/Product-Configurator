export function generateRandomId() {
  const timestamp = Date.now().toString(36);
  const randomChars = Math.random().toString(36).substr(2, 5);

  return timestamp + randomChars;
}

export function isObjectsEqual(obj1, obj2) {
  if (typeof obj1 === 'object' && typeof obj2 === 'object') {
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
      if (obj1.length !== obj2.length) {
        return false;
      }

      for (let i = 0; i < obj1.length; i++) {
        if (!isObjectsEqual(obj1[i], obj2[i])) {
          return false;
        }
      }

      return true;
    } else {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);

      if (keys1.length !== keys2.length) {
        return false;
      }

      for (let key of keys1) {
        if (!isObjectsEqual(obj1[key], obj2[key])) {
          return false;
        }
      }

      return true;
    }
  } else {
    return obj1 === obj2;
  }
}
