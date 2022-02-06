const toRoman = num => {
    const romanNumerals  = new Map([
        [1, "I"],
        [5, "V"],
        [10, "X"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"]
    ])
    const revRomanNumeralsArr = Array.from(romanNumerals).reverse();
    let romanNumeral = ""
    revRomanNumeralsArr.forEach(([decimal, roman]) => {
        if (num >= decimal) {
            let quotient = Math.floor(num / decimal)
            romanNumeral += roman.repeat(quotient)
            num -= quotient * decimal
        }
    });
    return romanNumeral
}

console.log(toRoman(5))
console.log(toRoman(267))
console.log(toRoman(99))