# Sernam

Sernam is an Username Generator for Javascript or NodeJS. It generates single or multiple unique usernames from the name passed in as a parameter.

## Installation

```sh
$ npm i sernam
```

## Usage

**Import:**

```javascript
const sernam = require("sernam")
```

_or_

```javascript
import sernam from "sernam"
```

**Initialization:**

```javascript
const options = {
  symbols: true,
  numbers: true,
}
const sn = sernam(options)
```

### `sernam(options)`

Sernam accepts an `options` object, which should contain two booleans; `symbols` and `numbers`
properties , which tells Sernam whether to include Symbols and Numbers in the generated usernames. In case you don't pass any `options`
object, the usernames will not include Symbols and Numbers by default.

| Property  | Description             |
| --------- | ----------------------- |
| `symbols` | Boolean (true or false) |
| `numbers` | Boolean (true or false) |

**Functions:**

#### `.generateOne(fullname)`

Generates a single username with the given `fullname` and returns a String.
Parameter | Description
--- | ---
`fullname` | String

#### `.generateMany(fullname, count)`

Generates specified number of usernames by the `count` parameter and with the given `fullname` and and returns an Array of Strings.
Parameter | Description
--- | ---
`fullname` | String
`count` | Number

## Examples

```javascript
import sernam from "sernam"

const options = {
  symbols: true,
  numbers: true,
}
const sn = sernam(options)

let username = sn.generateOne("Firstname Lastname")

let usernames = sn.generateMany("Firstname Lastname", 10)
```

## License

[MIT](LICENSE)
