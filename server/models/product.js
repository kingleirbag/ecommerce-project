class Product {
  constructor(
    availableColors,
    brand,
    description,
    image,
    imageCollection,
    isFeatured,
    isRecommended,
    keywords,
    name,
    price,
  ) {
    this.availableColors = availableColors;
    this.brand = brand;
    this.description = description;
    this.image = image;
    this.imageCollection = imageCollection;
    this.isFeatured = isFeatured;
    this.isRecommended = isRecommended;
    this.keywords = keywords;
    this.name = name;
    this.price = price;
  }
}

module.exports = Product;

