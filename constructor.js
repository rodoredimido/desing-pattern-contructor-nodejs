function MyClassEs5() {
  this.prop1 = 1
  this.method = () => {
      // I'm Method
  }
}
const instanceEs6 = new MyClassEs5()
console.log('class in Es5: ', instanceEs6)

class MyClass {
  constructor(p1){
    this.prop = p1
    this.method = () => {
      // I'm Method
    }
  }
}

const instance = new MyClass(12)
console.log('class in ES6: ', instance)
