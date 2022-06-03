// Solution by Chad Adam
// Kata Link: https://www.codewars.com/kata/5ab52526379d20736b00000e

function magNumber(info){
    let cartridgesNeeded = 3 * info[1]
    switch(info[0]) {
        case "PT92":
          return Math.ceil(cartridgesNeeded / 17);
        case "M4A1":
          return Math.ceil(cartridgesNeeded / 30);
        case "M16A2":
          return Math.ceil(cartridgesNeeded / 30);
        case "PSG1":
          return Math.ceil(cartridgesNeeded / 5)
    }
  }