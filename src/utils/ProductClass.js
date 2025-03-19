export class Product {
  constructor(name, price, description, imageURL) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageURL = imageURL;
  }
}

export class KitchenProduct extends Product {
  constructor(name, price, description, imageURL) {
    super(name, price, description, imageURL);
    this.category = "kitchen";
  }
}

export class GardenProduct extends Product {
  constructor(name, price, description, imageURL) {
    super(name, price, description, imageURL);
    this.category = "garden";
  }
}

export class TechProduct extends Product {
  constructor(name, price, description, imageURL) {
    super(name, price, description, imageURL);
    this.category = "tech";
  }
}

export class ClothingProduct extends Product {
  constructor(name, price, description, imageURL) {
    super(name, price, description, imageURL);
    this.category = "clothing";
  }
}

export class BeautyProduct extends Product {
  constructor(name, price, description, imageURL) {
    super(name, price, description, imageURL);
    this.category = "beauty";
  }
}

export class GroceryProduct extends Product {
  constructor(name, price, description, imageURL) {
    super(name, price, description, imageURL);
    this.category = "grocery";
  }
}
