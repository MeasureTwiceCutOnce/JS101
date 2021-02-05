const repeater = (str) => str.split("").reduce((acc, cur) => (acc += cur + cur), "");
