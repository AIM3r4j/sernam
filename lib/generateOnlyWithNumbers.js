let generatedName = ""

export default function generateOnlyWithSymbols(name) {
  const firstName = name.firstName
  const lastName = name.lastName
  const numberToBeAdded = Math.floor(Math.random() * 100)

  // Cases when there is no firstname
  if (firstName.length === 0) {
    const randNumForCaseSwitch = Math.floor(Math.random() * 4)
    switch (randNumForCaseSwitch) {
      case 0:
        generatedName = `${lastName}`
        break
      case 1:
        generatedName = `${lastName}${numberToBeAdded}`
        break
      case 2:
        generatedName = `${numberToBeAdded}${lastName}`
        break
      case 3:
        generatedName = `${numberToBeAdded}${lastName}${numberToBeAdded}`
        break
    }
    return generatedName
    // Cases when there's less than 3 words in firstname
  } else if (firstName.length < 2) {
    const randNumForCaseSwitch = Math.floor(Math.random() * 16)
    const randIndex = Math.floor(Math.random() * firstName.length)
    switch (randNumForCaseSwitch) {
      case 0:
        generatedName = `${lastName}`
        break
      case 1:
        generatedName = `${firstName.join("")}${lastName}${numberToBeAdded}`
        break
      case 2:
        generatedName = `${firstName.join("")}${numberToBeAdded}${lastName}`
        break
      case 3:
        generatedName = `${numberToBeAdded}${firstName.join("")}${lastName}`
        break
      case 4:
        generatedName = `${firstName.join(`${numberToBeAdded}`)}${lastName}`
        break
      case 5:
        generatedName = `${firstName.join(
          `${numberToBeAdded}`
        )}${numberToBeAdded}${lastName}`
        break
      case 6:
        generatedName = `${lastName}${firstName.join("")}${numberToBeAdded}`
        break
      case 7:
        generatedName = `${lastName}${numberToBeAdded}${firstName.join("")}`
        break
      case 8:
        generatedName = `${numberToBeAdded}${lastName}${firstName.join("")}`
        break
      case 9:
        generatedName = `${lastName}${firstName.join(`${numberToBeAdded}`)}`
        break
      case 10:
        generatedName = `${lastName}${firstName.reverse()}${numberToBeAdded}`
        break
      case 11:
        generatedName = `${lastName}${numberToBeAdded}${firstName.reverse()}`
        break
      case 12:
        generatedName = `${numberToBeAdded}${lastName}${firstName.reverse()}`
        break
      case 13:
        generatedName = `${lastName}${firstName[randIndex]}${numberToBeAdded}`
        break
      case 14:
        generatedName = `${lastName}${numberToBeAdded}${firstName[randIndex]}`
        break
      case 15:
        generatedName = `${numberToBeAdded}${lastName}${firstName[randIndex]}`
        break
    }
    return generatedName
    // Cases when there's more than 3 words in firstname
  } else {
    const randNumForCaseSwitch = Math.floor(Math.random() * 8)
    const randIndex = Math.floor(Math.random() * firstName.length)
    switch (randNumForCaseSwitch) {
      case 0:
        generatedName = `${lastName}`
        break
      case 1:
        generatedName = `${firstName[randIndex]}${lastName}`
        break
      case 2:
        generatedName = `${firstName[randIndex]}${lastName}${numberToBeAdded}`
        break
      case 3:
        generatedName = `${firstName[randIndex]}${numberToBeAdded}${lastName}`
        break
      case 4:
        generatedName = `${numberToBeAdded}${firstName[randIndex]}${lastName}`
        break
      case 5:
        generatedName = `${lastName}${firstName[randIndex]}${numberToBeAdded}`
        break
      case 6:
        generatedName = `${lastName}${numberToBeAdded}${firstName[randIndex]}`
        break
      case 7:
        generatedName = `${numberToBeAdded}${lastName}${firstName[randIndex]}`
        break
    }
    return generatedName
  }
}
