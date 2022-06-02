// Solution by Chad Adam
// Kata Link:

    // Original try, but it needed a different format
    // const rgbMap = new Map();
    // rgbMap.set('r', parseInt(hexString.slice(1,3),16));
    // rgbMap.set('g', parseInt(hexString.slice(3,5),16));
    // rgbMap.set('b', parseInt(hexString.slice(5),16));
    
    // formatted return string doesn't work either -- nice try bub!
    // return `\{ r:${rgbMap.get('r')}, g:${rgbMap.get('g')}, b:${rgbMap.get('b')} \}`;
    
    function hexStringToRGB(hexString) {
      let rgbGroup = {};
       
       // pull out the three pairs of hex values, starting at position 1,
       // convert them from hexdecimal (base16) to decimal (base10), then
       // shove them into the empty object using the defined key.
       rgbGroup['r'] = parseInt(hexString.slice(1,3),16);
       rgbGroup['g'] = parseInt(hexString.slice(3,5),16);
       rgbGroup['b'] = parseInt(hexString.slice(5),16);
   
       // return the object
       return rgbGroup;
       
     }