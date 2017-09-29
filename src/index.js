module.exports = function zeros(expression) {
    "use strict";
    let mas  = expression.split('*');
    let sum1 = 0;
    let sum2 = 0;
    let i = 0;
    let ii = 0;
    let length = mas.length;

    for (  i = 0; i < length; i++){
        if (mas[i].indexOf('!!') === -1){
            mas[i] = Number(mas[i].slice(0,-1));

            for ( ii = 1; ii <= mas[i]; ii++){
                if(ii % 2 === 0) sum1++;
                if(ii % 5 === 0 && ii % 25 !== 0) sum2++;
                if(ii % 25 === 0) sum2 += 2;
            }
        }
        else {
            mas[i] = Number(mas[i].slice(0,-2));
            if (mas[i] % 2 === 0){
                for (ii = 2;ii <= mas[i]; ii += 2){
                    if(ii % 2 === 0) sum1++;
                    if(ii % 5 === 0 && ii % 25 !== 0) sum2++;
                    if(ii % 25 === 0) sum2 += 2;
                }
            }
            else {
                for (ii = 1; ii <= mas[i]; ii += 2){
                    if(ii % 2 === 0) sum1++;
                    if(ii % 5 === 0 && ii % 25 !== 0) sum2++;
                    if(ii % 25 === 0) sum2 += 2;
                }
            }
        }
    }
    return sum1 < sum2 ? sum1 : sum2;
}