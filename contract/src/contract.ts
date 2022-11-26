// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view } from 'near-sdk-js';

@NearBindgen({})
class HelloNear {
  message: string = "OMG";

  @view({}) // This method is read-only and can be called for free
  get_greeting(): string {
    return this.message;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_greeting({ message }: { message: string }): void {
    near.log(`Saving greeting ${message}`);
    this.message = message;
  }

  @call({}) // This method changes the state, for which it cost gas
  make_offer({ product, id_offer, propose }: { product: object, id_offer: string, propose: object }): void {
    near.log(`Saving greeting ${id_offer}`);
  }

}
