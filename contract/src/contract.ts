// Find all our documentation at https://docs.near.org
import {NearBindgen, near, call, view, Vector} from 'near-sdk-js';

import { Product } from "./Schemas";

@NearBindgen({})
class HelloNear {
  products: Vector<Product> = new Vector<Product>('v-uid');

  @call({}) // This method changes the state, for which it cost gas
  make_offer({ product, id_offer, propose }: { product: object, id_offer: string, propose: object }): void {
    near.log(`Saving greeting ${id_offer}`);
  }

  @view({})
  // Returns an array of messages.
  get_products({ from_index = 0, limit = 10 }: { from_index: number, limit: number }): Product[] {
    return this.products.toArray().slice(from_index, from_index + limit);
  }

  @call({})
  create_new_product() : void {
    const product: Product = { name: 'MyName', description: 'MyDesc', owner: 'MyOwner', price: 123, product_id: 'JHASBD'};
    this.products.push(product)
  }

}
