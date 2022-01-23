export default function generateWithBoth(fullName) {
  let generatedName = ""
  const firstName = fullName.firstName
  const lastName = fullName.lastName
  // Cases when there is no firstname
  if (firstName.length === 0) {
    generatedName = `${lastName}`

    return generatedName
    // Cases when there's less than 3 words in firstname
  } else if (firstName.length < 2) {
    const randNumForCaseSwitch = Math.floor(Math.random() * 6)
    const randIndex = Math.floor(Math.random() * firstName.length)
    switch (randNumForCaseSwitch) {
      case 0:
        generatedName = `${lastName}`
        break
      case 1:
        generatedName = `${firstName.join("")}${lastName}`
        break
      case 2:
        generatedName = `${firstName[randIndex]}${lastName}`
        break
      case 3:
        generatedName = `${lastName}${firstName.join("")}`
        break
      case 4:
        generatedName = `${lastName}${firstName.reverse()}`
        break
      case 5:
        generatedName = `${lastName}${firstName[randIndex]}`
        break
    }
    return generatedName
    // Cases when there's more than 2 words in firstname
  } else {
    const randNumForCaseSwitch = Math.floor(Math.random() * 3)
    const randIndex = Math.floor(Math.random() * firstName.length)
    switch (randNumForCaseSwitch) {
      case 0:
        generatedName = `${lastName}`
        break
      case 1:
        generatedName = `${firstName[randIndex]}${lastName}`
        break
      case 2:
        generatedName = `${lastName}${firstName[randIndex]}`
        break
    }
    return generatedName
  }
}
