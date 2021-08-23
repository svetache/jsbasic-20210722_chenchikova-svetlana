let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  let array = str.split(/[ ,]+/);
 
  let minV = str[0];
  let maxV = str[0];
  
  for (let i = 0; i < array.length; i++) {
    let a = +array[i];
    if (a < minV) minV = a;
    if (a > maxV) maxV = a;
  }
  return {min: minV, max: maxV};
}
console.log(getMinMax(inputData));
