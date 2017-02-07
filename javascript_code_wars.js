// 1 Use math pi and conditional - and alternate solutions
function annulusArea(a) {
  if(a <=1) {
    return 0;
  }
  else {
    var p = ((a/2)*(a/2)) * Math.PI;
    return Number(p.toFixed(2));
  }
}

function annulusArea(a) {
  const r1 = a/Math.sqrt(3)/2
  const r2 = a/Math.sqrt(3)

  return +(Math.PI * r2 * r2 - Math.PI * r1 * r1).toFixed(2)
}

function annulusArea(a) {
  return parseFloat((Math.PI*(a/2)*(a/2)).toFixed(2));
}

function annulusArea(a) {
  return Math.round(Math.PI*a*a/2/2*100)/100
}
