class MyClass {
  constructor(p1){
    this.prop = p1
    this.method = () => {
      // I'm Method
    }
  }

  methodPrototype () {
    // I'm A prototype method
  }
}

const instance = new MyClass(12)
console.log('class in ES6: ', instance)