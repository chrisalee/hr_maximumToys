/*
 * Complete the 'maximumToys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY prices
 *  2. INTEGER k
 */

function maximumToys(prices, k) {
    let currCost = 0;
    let toysAquired = 0;
    let leastToMost = prices.sort((a, b) => a - b);
    
    for(let i = 0; i < leastToMost.length; i++) {
        if(currCost + leastToMost[i] < k) {
            currCost+=leastToMost[i];
            toysAquired++;
        } else break;
    }

    console.log(toysAquired);
    return toysAquired;
}
