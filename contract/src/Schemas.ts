export class Product {

  product_id: string = '';
  name: string = '';
  description: string = '';
  owner: string = '';
  price: number = 0;
  image_url: string = '';

  constructor({ name, description, owner, price, image_url }) {
    this.name = name;
    this.description = description;
    this.owner = owner;
    this.price = price;
    this.image_url = image_url;
    // TODO Generar función random para el ID
    this.product_id = 'JHGVJHSAGVBD872346'
  }

}

export class Deal {

  id_owner: string = '';
  id_pawner: string = '';
  payment_day: number = 1;
  amount: number = 0;
  coin: string = 'USDC';
  product_id: string = '';

  constructor({ payment_day, amount, coin, id_owner, id_pawner, product_id}) {
    this.id_owner = id_owner;
    this.id_pawner = id_pawner;
    this.payment_day = payment_day;
    this.amount = amount;
    this.coin = coin;
    this.product_id = product_id;
    // TODO Generar función random para el ID
  }

  //new deal
  
}
