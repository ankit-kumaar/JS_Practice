// map
//chaining 

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 ) //result will be passed into second map
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)// chained// in filter true or false is returned

console.log(newNums);