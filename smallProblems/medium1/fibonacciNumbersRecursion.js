function fibonacci(num) {
    if (num > 2) {

        return fibonacci(num - 1) + fibonacci(num - 2);
    }

    return 1;
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
    // F(1), //= 1
    // F(2), //= 1
    // // F(n) = F(n - 1) + F(n - 2) where n > 2
    // F(4)