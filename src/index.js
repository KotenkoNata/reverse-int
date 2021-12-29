module.exports = function reverse (n) {
  let convertN = n.toString();

  let result = "";

   for( let i = convertN.length - 1; i >= 0; i--){
       result = result + convertN[i];
   }

  return parseInt(result);
}
