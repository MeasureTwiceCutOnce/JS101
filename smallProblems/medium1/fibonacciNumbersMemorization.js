let map = {};
function fibonacci(num) {

    if (num <= 2) {
        return 1;
    } else if (map[num]) {
        return map[num]
    } else {
        map[num] = fibonacci(num - 1) + fibonacci(num - 2);
        return map[num]
    }
}
console.log(
fibonacci(1),       // 1
fibonacci(2),       // 1
fibonacci(3),       // 2
fibonacci(4),       // 3
fibonacci(5),       // 5
fibonacci(12),      // 144
fibonacci(20),      // 6765
)