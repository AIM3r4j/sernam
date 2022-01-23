let generatedName = ""
let chars = [".", "_", "~"]

export default function generateOnlyWithSymbols(fullName) {
  const firstName = fullName.firstName
  const lastName = fullName.lastName
  // Cases when there is no firstname
  if (firstName.length === 0) {
    const randNumForCaseSwitch = Math.floor(Math.random() * 6)
    const randIndex = Math.floor(Math.random() * 3)
    switch (randNumForCaseSwitch) {
      case 0:
        generatedName = `${lastName}`
        break
      case 1:
        generatedName = `${lastName}${chars[randIndex]}`
        break
      case 2:
        generatedName = `${chars[1]}${lastName}`
        break
      case 3:
        generatedName = `${chars[2]}${lastName}`
        break
      case 4:
        generatedName = `${chars[1]}${lastName}${chars[1]}`
        break
      case 5:
        generatedName = `${chars[2]}${lastName}${chars[2]}`
        break
    }
    return generatedName
    // Cases when there's less than 3 words in firstname
  } else if (firstName.length < 2) {
    const randNumForCaseSwitch = Math.floor(Math.random() * 9)
    const randIndexForChars = Math.floor(Math.random() * 3)

    switch (randNumForCaseSwitch) {
      case 0:
        generatedName = `${lastName}`
        break
      case 1:
        generatedName = `${firstName.join("")}${lastName}`
        break
      case 2:
        generatedName = `${firstName.join("")}.${lastName}`
        break
      case 3:
        generatedName = `${firstName.join(`${chars[randIndexForChars]}`)}${
          chars[randIndexForChars]
        }${lastName}`
        break
      case 4:
        generatedName = `${lastName}${firstName.join("")}`
        break
      case 7:
        generatedName = `${lastName}${chars[randIndexForChars]}${firstName.join(
          `${chars[randIndexForChars]}`
        )}`
        break
      case 8:
        const randIndex = Math.floor(Math.random() * firstName.length)
        generatedName = `${lastName}${chars[randIndexForChars]}.${firstName[randIndex]}`
        break
    }
    return generatedName
    // Cases when there's more than 2 words in firstname
  } else {
    const randNumForCaseSwitch = Math.floor(Math.random() * 9)
    const randIndex = Math.floor(Math.random() * firstName.length)
    const randIndexForChars = Math.floor(Math.random() * 3)
    switch (randNumForCaseSwitch) {
      case 0:
        generatedName = `${lastName}`
        break
      case 1:
        generatedName = `${firstName[randIndex]}${lastName}`
        break
      case 2:
        generatedName = `${firstName[randIndex]}${lastName}${chars[randIndexForChars]}`
        break
      case 3:
        generatedName = `${firstName[randIndex]}${chars[randIndexForChars]}${lastName}`
        break
      case 4:
        generatedName = `${chars[randIndexForChars]}${firstName[randIndex]}${lastName}`
        break
      case 5:
        generatedName = `${lastName}${firstName[randIndex]}`
        break
      case 6:
        generatedName = `${lastName}${firstName[randIndex]}${chars[randIndexForChars]}`
        break
      case 7:
        generatedName = `${lastName}${chars[randIndexForChars]}${firstName[randIndex]}`
        break
      case 8:
        generatedName = `${chars[randIndexForChars]}${lastName}${firstName[randIndex]}`
        break
    }
    return generatedName
  }
}
