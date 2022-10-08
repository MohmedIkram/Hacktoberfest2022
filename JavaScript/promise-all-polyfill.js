class Promifill {
  static all (iterable) {
    return new Promifill((resolve, reject) => {
      validateIterable(iterable);

      let iterableSize = 0;
      const values = [];

      if (isEmptyIterable(iterable)) {
        return resolve(values);
      }

      const add =
        (value, index) => {
          values[index] = value;
          if (values.filter(() => true).length === iterableSize) {
            resolve(values);
          }
        };

      for (let item of iterable) {
        ((entry, index) => {
          Promifill.resolve(entry)
            .then(
              (value) =>
                add(value, index),
              reject
            );
        })(item, iterableSize++);
      }
    });
  }
}
