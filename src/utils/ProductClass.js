export class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

export class KitchenProduct extends Product {
  constructor(name, price, description) {
    super(name, price, description);
    this.category = "kitchen";
  }
}

export class GardenProduct extends Product {
  constructor(name, price, description) {
    super(name, price, description);
    this.category = "garden";
  }
}

export class TechProduct extends Product {
  constructor(name, price, description) {
    super(name, price, description);
    this.category = "tech";
  }
}

export class ClothingProduct extends Product {
  constructor(name, price, description) {
    super(name, price, description);
    this.category = "clothing";
  }
}

export class BeautyProduct extends Product {
  constructor(name, price, description) {
    super(name, price, description);
    this.category = "beauty";
  }
}
