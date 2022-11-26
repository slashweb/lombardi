export class Product {

  product_id: string = '';
  name: string = '';
  description: string = '';
  owner: string = '';
  price: number = 0;

  constructor({ name, description, owner, price }) {
    this.name = name;
    this.description = description;
    this.owner = owner;
    this.price = price;
    // TODO Generar función random para el ID
    this.product_id = 'JHGVJHSAGVBD872346'
  }

}
