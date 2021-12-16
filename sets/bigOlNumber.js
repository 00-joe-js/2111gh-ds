const makeBigRandomNumber = () => {
    return Math.floor(Math.random() * 1000000000000000000000);
};

const usesAll10Digits = (num) => {

    console.log(num);
    const numberAsString = num.toString();
    const stringDigitsFromNumber = numberAsString.split("");

    const set = new Set();

    stringDigitsFromNumber.forEach(stringDigit => {
        set.add(stringDigit);
    });

    // Return true or false if all 10 digits (0-9)
    // are found in `num`.
    return set.size === 10;

};

console.log(usesAll10Digits(makeBigRandomNumber()));