let generatedName = ""
let chars = ["_", "~"]

export default function generateWithBoth(fullName) {
  const firstName = fullName.firstName
  const lastName = fullName.lastName
  const numberToBeAdded = Math.floor(Math.random() * 100)

  // Cases when there is no firstname
  if (firstName.length === 0) {
    const randNumForCaseSwitch = Math.floor(Math.random() * 11)
    const randIndex = Math.floor(Math.random() * 2)
    switch (randNumForCaseSwitch) {
      case 0:
        generatedName = `${lastName}`
        break
      case 1:
        generatedName = `${lastName}${chars[randIndex]}${numberToBeAdded}`
        break
      case 2:
        generatedName = `${lastName}${numberToBeAdded}${chars[randIndex]}`
        break
      case 3:
        generatedName = `${numberToBeAdded}${lastName}${chars[randIndex]}`
        break
      case 4:
        generatedName = `${chars[randIndex]}${lastName}${numberToBeAdded}`
        break
      case 5:
        generatedName = `${chars[randIndex]}${numberToBeAdded}${lastName}`
        break
      case 6:
        generatedName = `${numberToBeAdded}${chars[randIndex]}${lastName}`
        break
      case 7:
        generatedName = `${chars[randIndex]}${lastName}${chars[randIndex]}${numberToBeAdded}`
        break
      case 8:
        generatedName = `${chars[randIndex]}${lastName}${numberToBeAdded}${chars[randIndex]}`
        break
      case 9:
        generatedName = `${chars[randIndex]}${numberToBeAdded}${lastName}${chars[randIndex]}`
        break
      case 10:
        generatedName = `${numberToBeAdded}${chars[randIndex]}${lastName}${chars[randIndex]}`
        break
    }
    return generatedName
    // Cases when there's less than 3 words in firstname
  } else if (firstName.length < 2) {
    const randNumForCaseSwitch = Math.floor(Math.random() * 8)
    const randIndex = Math.floor(Math.random() * 2)
    switch (randNumForCaseSwitch) {
      case 0:
        generatedName = `${lastName}`
        break
      case 1:
        generatedName = `${firstName.join("")}${lastName}`
        break
      case 2:
        generatedName = `${firstName.join(
          `${chars[randIndex]}`
        )}${lastName}${numberToBeAdded}`
        break
      case 3:
        generatedName = `${firstName.join(
          `${chars[randIndex]}`
        )}${numberToBeAdded}${lastName}`
        break
      case 4:
        generatedName = `${numberToBeAdded}${firstName.join(
          `${chars[randIndex]}`
        )}${lastName}`
        break
      case 5:
        generatedName = `${firstName.join(
          `${chars[randIndex]}`
        )}${lastName}${numberToBeAdded}${chars[randIndex]}`
        break
      case 6:
        generatedName = `${firstName.join(`${chars[randIndex]}`)}${
          chars[randIndex]
        }${lastName}${numberToBeAdded}`
        break
      case 7:
        generatedName = `${chars[randIndex]}${firstName.join(
          `${chars[randIndex]}`
        )}${lastName}${numberToBeAdded}`
        break
    }
    return generatedName
    // Cases when there's more than 2 words in firstname
  } else {
    const randNumForCaseSwitch = Math.floor(Math.random() * 8)
    const randIndex = Math.floor(Math.random() * firstName.length)
    const randIndexForChars = Math.floor(Math.random() * 2)
    switch (randNumForCaseSwitch) {
      case 0:
        generatedName = `${lastName}`
        break
      case 1:
        generatedName = `${firstName[randIndex]}${lastName}${numberToBeAdded}${chars[randIndexForChars]}`
        break
      case 2:
        generatedName = `${firstName[randIndex]}${numberToBeAdded}${lastName}${chars[randIndexForChars]}`
        break
      case 3:
        generatedName = `${firstName[randIndex]}${numberToBeAdded}${chars[randIndexForChars]}${lastName}`
        break
      case 4:
        generatedName = `${chars[randIndexForChars]}${firstName[randIndex]}${numberToBeAdded}${lastName}`
        break
      case 5:
        generatedName = `${chars[randIndexForChars]}${numberToBeAdded}${firstName[randIndex]}${lastName}`
        break
      case 6:
        generatedName = `${numberToBeAdded}${chars[randIndexForChars]}${firstName[randIndex]}${lastName}`
        break
      case 7:
        generatedName = `${numberToBeAdded}${firstName[randIndex]}${chars[randIndexForChars]}${lastName}`
        break
    }
    return generatedName
  }
}
