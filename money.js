function calculateYears(principal, interest, tax, desired) {
    years = 0
    while (principal < desired) {
        years++
        principal += principal * interest * (1 - tax)

    }
    return years
}

console.log(calculateYears(1000, .05, .18, 1100))
