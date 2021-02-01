function findDup(array) {
    let seen = {};

    for (let idx = 0; idx < array.length; idx += 1) {
      if (seen[array[idx]]) {
        return array[idx];
      } else {
        seen[array[idx]] = true;
      }
    }

    return undefined;
  }

