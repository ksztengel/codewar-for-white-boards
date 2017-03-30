function SeriesSum(n) {
    if (n === 0) {
        return "0.00"
    }
    var sum = 0
    for (i = 0; i < n; i++) {

        sum += 1 / (3 * i + 1)

    }
    return sum.toFixed(2)
}



// function SeriesSum(n, s = 0) {
//     return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
// }
