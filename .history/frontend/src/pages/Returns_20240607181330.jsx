import React from "react";
import { Helmet } from "react-helmet-async";
const Returns = () => {
  return (
    <div>
      <Helmet>
        <title> Private Policy</title>
      </Helmet>
      <div className="site-container">
        <article className="private_policy">
          <h1 className="text-center mb-2 py-4 fw-bold">Returns</h1>
          <p>
            Returns and exchange We aim to simplify life so have a hassle-free
            returns policy that lasts 30 days from date of purchase - just send
            us the item unused in its original condition and original packaging.
            If more than 30 days have elapsed since your purchase we're afraid
            we can't offer a return or exchange.
          </p>
          <p>
            Refunds Once your return is received and inspected, we'll let you
            know by email then your refund will be processed, and a credit will
            automatically be applied to your credit card or original method of
            payment, within a certain amount of days.
          </p>
          <p>
            Sale items Only regular-priced items may be refunded, unfortunately,
            sale items cannot be refunded.
          </p>
          <p>
            Exchanges We replace items if they are defective or damaged and we
            pay for the shipping. If you need to exchange it for the same item,
            send us an email at arts_shop-returns@example.com
          </p>
          <p>
            Return shipping To return your item mail it to: <strong></strong> Apt. 761 25330 Kenton
            Throughway, Rosarioland, FL 58781-9632. You'll be responsible for
            paying for your shipping costs for returning your item. Shipping
            costs are non-refundable. If you receive a refund, the cost of
            return shipping will be deducted from your refund. Depending on
            where you live, the time it may take for your exchanged product to
            reach you, may vary. If you are shipping an item over $75, you
            should consider using a trackable shipping service or purchasing
            shipping insurance. We don’t guarantee that we will receive your
            returned item.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Returns;
