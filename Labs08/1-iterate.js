const iterate = (object, callback) => {
  for (const key in object) {
    callback(key, object[key], object);
  }
};