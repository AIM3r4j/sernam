import sernam from "../index.js"

const options = {
  symbols: false,
  numbers: true,
}
const sn = new sernam(options)

describe("Usernames with no symbols and numbers Test Suite", () => {
  describe("One Username Generation Test", () => {
    it("should return an TypeError with the following message", () => {
      const returned1 = sn.generateOne()
      expect(returned1).toBeInstanceOf(TypeError)
      expect(returned1.message).toBe("Argument must be a string")
    })
    it("should return a string", () => {
      const returned1 = sn.generateOne("Fullname")
      expect(typeof returned1).toBe("string")
      const returned2 = sn.generateOne("Firstname Lastname")
      expect(typeof returned2).toBe("string")
    })
    it("should return a string with all lowercases", () => {
      const returned1 = sn.generateOne("Fullname")
      expect(returned1).toMatch(/[a-z]/)
      const returned2 = sn.generateOne("Firstname Lastname")
      expect(returned2).toMatch(/[a-z]/)
    })
    it("should return a string having no whitespaces", () => {
      const returned1 = sn.generateOne("Fullname")
      expect(returned1).toMatch(/^\S+$/)
      const returned2 = sn.generateOne("Firstname Lastname")
      expect(returned2).toMatch(/^\S+$/)
    })
    it("should return a string having no 'undefined' word", () => {
      const returned1 = sn.generateOne("Fullname")
      expect(returned1.includes('undefined')).toEqual(false)
      const returned2 = sn.generateOne("Firstname Lastname")
      expect(returned2.includes('undefined')).toEqual(false)
    })
  })

  describe("Many Username Generation Test", () => {
    it("should return an Error with the following message", () => {
      const returned1 = sn.generateMany()
      expect(returned1).toBeInstanceOf(TypeError)
      expect(returned1.message).toBe("Unexpected argument(s)")
    })
    it("should return an array of strings with the length of given count parameter", () => {
      const returned1 = sn.generateMany("Firstname Middlename Lastname", 5)
      expect(returned1).toBeInstanceOf(Array)
      expect(returned1.length).toBe(5)
      expect(returned1.every((i) => typeof i === "string")).toBe(true)
    })
    it("should return an array of strings having no 'undefined' word", () => {
      const returned1 = sn.generateMany("Firstname Middlename Lastname", 5)
      expect(returned1).toBeInstanceOf(Array)
      expect(returned1.some(username => username.includes('undefined'))).toEqual(false)
    })
  })
})
