const randomNumber0To99999 = () => Math.floor(Math.random() * 100000);

const array = new Array(100).fill("").map(() => randomNumber0To99999());

console.log(JSON.stringify(array));