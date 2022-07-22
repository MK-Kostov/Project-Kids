function reductionCost(num) {
    let sum = 0;
    let result = 0;

    for(let i = 0; i < num.length; i++) {   
        let digitOne = num[i];
        let digitTwo = num[i + 1];

        sum = digitOne + digitTwo;
        num.shift();
        num.shift();
        num.push(sum);
        result += sum;
        break;
    }
    for(let j = 0; j < num.length - 1; j++) {
        let digitOne = num[j];
        let digitTwo = Number(num.slice(-1))
        sum = digitOne + digitTwo;
        num.shift();
        num.pop();
        result += sum;
        num.push(sum)
        j--;
    }
    console.log(result)
}
reductionCost([3,1,2,3])
