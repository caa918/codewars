// Solution by Chad Adam
// Kata Link:  https://www.codewars.com/kata/5a58ca28e626c55ae000018a

function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
    // area of regular polygon of n sides inscribed in circle of radius r formula found at
    // https://www.efunda.com/math/areas/PolygonInscribedGen.cfm
    let areaInscribedRegPoly = ((numberOfSides * (circleRadius ** 2)) / 2 ) * Math.sin((2 * Math.PI) / numberOfSides )
    return areaInscribedRegPoly.toPrecision(3)
  }