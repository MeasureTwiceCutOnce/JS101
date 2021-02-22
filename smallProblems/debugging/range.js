function range(start, end) {
    let range = [];

    if (end === undefined) {
        for (let element = 0; element <= start; element++) {
            range.push(element);
          }
    }

    for (let element = start; element <= end; element++) {
      range.push(element);
    }

    return range;
  }

//   function range(end) {
//     return range(0, end);
//   }

  // Examples

  console.log(range(10, 20));
  console.log(range(5));
