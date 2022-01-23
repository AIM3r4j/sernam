import generate from "./lib/generate.js"

class Sernam {
  symbols = false
  numbers = false
  constructor(options) {
    if ((typeof options.symbols && typeof options.numbers) !== "boolean") {
      return new TypeError("Unexpected argument types")
    }
    this.symbols = options.symbols
    this.numbers = options.numbers
  }
  generateOne(fullName) {
    if (typeof fullName === "string") {
      const splittedName = fullName.trim().toLowerCase().split(" ")
      const lastName = splittedName.pop()
      const firstName = splittedName
      fullName = { firstName, lastName }
      return generate(fullName, this)
    } else {
      return new TypeError("Argument must be a string")
    }
  }

  generateMany(fullName, count) {
    if (typeof fullName === "string" && count > 1) {
      let fullNameLength = fullName.trim().split(" ").length
      if (
        fullNameLength === 1 &&
        this.symbols === false &&
        this.numbers === false
      ) {
        return new Error(
          "Cannot generate usernames without symbols and numbers for ONE word name"
        )
      } else if (
        fullNameLength === 1 &&
        count > 6 &&
        this.symbols === true &&
        this.numbers === false
      ) {
        return new Error(
          "Cannot generate too much usernames for ONE word names"
        )
      }
      let iteration = 1
      let generatedNames = []
      while (iteration <= count) {
        let generatedName = this.generateOne(fullName)
        if (!generatedNames.includes(generatedName)) {
          generatedNames.push(generatedName)
          iteration += 1
        }
      }
      return generatedNames
    } else {
      return new TypeError("Unexpected argument(s)")
    }
  }
}

export default function sernam(options) {
  if (options === undefined) {
    return new Sernam({})
  } else if (options instanceof Object && options !== null) {
    return new Sernam(options)
  } else {
    return new TypeError("Unexpected arguments")
  }
}
