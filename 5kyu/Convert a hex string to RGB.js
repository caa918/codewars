// Solution by Chad Adam
// Kata Link:

function hexStringToRGB(hexString) {
    const rgbMap = new Map();
    rgbMap.set('r', parseInt(hexString.slice(1,3),16));
    rgbMap.set('g', parseInt(hexString.slice(3,5),16));
    rgbMap.set('b', parseInt(hexString.slice(5),16));
    
    console.log(rgbMap)

    return rgbMap;
    
  }