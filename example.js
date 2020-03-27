Object.prototype.log = function () {
  console.log(this)
}

const objectX = {
  a: 1
}

objectX.log()


if(!String.prototype.trim) { // ES5
  String.prototype.trim = function() {
    try {
      return this.replace(/^\s+|\s+$/g, '')
    } catch (e) {
      return this
    }
  }
}

const stringY = "        test test      ".trim()
console.log(stringY)