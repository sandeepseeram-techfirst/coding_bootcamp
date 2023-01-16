export default class inventory {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  
    getId() {
      return this.id;
    }
  
    getPrice() {
      return this.price;
    }
  
    getName() {
      return this.name;
    }
  }
  