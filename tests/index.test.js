import sernam from "../index.js"

describe("Returned Object Test", () => {
  it("should return an Error with the following message", () => {
    const returnedObject1 = new sernam("error")
    expect(returnedObject1).toBeInstanceOf(TypeError)
    expect(returnedObject1.message).toBe("Unexpected arguments")

    const returnedObject2 = new sernam({
      symbols: "true",
      numbers: "true",
    })
    expect(returnedObject2).toBeInstanceOf(TypeError)
    expect(returnedObject2.message).toBe("Unexpected argument types")
  })
})
