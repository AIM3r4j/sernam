import generateWithBoth from "./generateWithBoth.js"
import generateOnlyWithSymbols from "./generateOnlyWithSymbols.js"
import generateOnlyWithNumbers from "./generateOnlyWithNumbers.js"
import generateWithoutBoth from "./generateWithoutBoth.js"

export default function generate(fullName, options) {
  // Cases when no symbols and numbers are included
  if (options.symbols === true && options.numbers === true) {
    return generateWithBoth(fullName)
    // Cases when only symbols are included
  } else if (options.symbols === true && options.numbers === false) {
    return generateOnlyWithSymbols(fullName)
    // Cases when only numbers are included
  } else if (options.symbols === false && options.numbers === true) {
    return generateOnlyWithNumbers(fullName)
    // Cases when no symbols and numbers are included
  } else {
    return generateWithoutBoth(fullName)
  }
}
