"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/stores/cart-store";

type Step = "shipping" | "payment" | "confirmation";

export default function CheckoutPage() {
  const { items, getSubtotal, getShipping, getTotal, clearCart } =
    useCartStore();
  const [step, setStep] = useState<Step>("shipping");
  const [orderNumber] = useState(() =>
    `EP-${Date.now().toString(36).toUpperCase()}`
  );

  const [shipping, setShipping] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [payment, setPayment] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const subtotal = getSubtotal();
  const shippingCost = getShipping();
  const total = getTotal();

  if (items.length === 0 && step !== "confirmation") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-h2 text-text-primary">
            Your cart is empty
          </h1>
          <p className="mt-4 text-text-muted">
            Add some items before checking out.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-gold px-8 text-sm font-medium uppercase tracking-wider text-bg-primary transition-colors hover:bg-gold-hover"
          >
            Shop Now
          </Link>
        </div>
      </div>
    );
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmation");
    clearCart();
    window.scrollTo(0, 0);
  };

  const steps = [
    { key: "shipping", label: "Shipping", num: 1 },
    { key: "payment", label: "Payment", num: 2 },
    { key: "confirmation", label: "Confirmation", num: 3 },
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === step);

  return (
    <div className="py-12 lg:py-20">
      <div className="container max-w-5xl">
        {/* Step indicator */}
        <div className="mb-12 flex items-center justify-center gap-4">
          {steps.map((s, i) => (
            <div key={s.key} className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-colors ${
                    i <= currentStepIndex
                      ? "bg-accent text-white"
                      : "bg-bg-surface text-text-muted"
                  }`}
                >
                  {i < currentStepIndex ? "✓" : s.num}
                </div>
                <span
                  className={`text-sm uppercase tracking-wider ${
                    i <= currentStepIndex
                      ? "text-text-primary"
                      : "text-text-muted"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={`h-px w-12 ${
                    i < currentStepIndex ? "bg-accent" : "bg-bg-surface"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Confirmation */}
        {step === "confirmation" && (
          <div className="text-center py-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
              <span className="text-2xl text-accent">✓</span>
            </div>
            <h1 className="font-display text-h1 text-text-primary">
              Thank You
            </h1>
            <p className="mt-4 text-text-muted text-lg">
              Your order{" "}
              <span className="text-accent font-medium">{orderNumber}</span>{" "}
              has been placed successfully.
            </p>
            <p className="mt-2 text-text-muted">
              A confirmation email has been sent to{" "}
              <span className="text-text-primary">{shipping.email}</span>
            </p>
            <div className="mt-8 rounded-sm border border-bg-surface p-6 max-w-md mx-auto text-left">
              <h3 className="text-sm uppercase tracking-wider text-text-muted mb-4">
                Shipping to
              </h3>
              <p className="text-text-primary">
                {shipping.firstName} {shipping.lastName}
              </p>
              <p className="text-text-muted text-sm mt-1">
                {shipping.address}
              </p>
              <p className="text-text-muted text-sm">
                {shipping.postalCode} {shipping.city}, {shipping.country}
              </p>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/shop"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-gold px-8 text-sm font-medium uppercase tracking-wider text-bg-primary transition-colors hover:bg-gold-hover"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        )}

        {step !== "confirmation" && (
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              {/* Shipping Form */}
              {step === "shipping" && (
                <form onSubmit={handleShippingSubmit}>
                  <h2 className="font-display text-h2 text-text-primary mb-8">
                    Shipping Details
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        First Name
                      </label>
                      <input
                        required
                        type="text"
                        value={shipping.firstName}
                        onChange={(e) =>
                          setShipping({ ...shipping, firstName: e.target.value })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        Last Name
                      </label>
                      <input
                        required
                        type="text"
                        value={shipping.lastName}
                        onChange={(e) =>
                          setShipping({ ...shipping, lastName: e.target.value })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={shipping.email}
                        onChange={(e) =>
                          setShipping({ ...shipping, email: e.target.value })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        Phone
                      </label>
                      <input
                        required
                        type="tel"
                        value={shipping.phone}
                        onChange={(e) =>
                          setShipping({ ...shipping, phone: e.target.value })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        Address
                      </label>
                      <input
                        required
                        type="text"
                        value={shipping.address}
                        onChange={(e) =>
                          setShipping({ ...shipping, address: e.target.value })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        City
                      </label>
                      <input
                        required
                        type="text"
                        value={shipping.city}
                        onChange={(e) =>
                          setShipping({ ...shipping, city: e.target.value })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        Postal Code
                      </label>
                      <input
                        required
                        type="text"
                        value={shipping.postalCode}
                        onChange={(e) =>
                          setShipping({
                            ...shipping,
                            postalCode: e.target.value,
                          })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        Country
                      </label>
                      <select
                        required
                        value={shipping.country}
                        onChange={(e) =>
                          setShipping({ ...shipping, country: e.target.value })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      >
                        <option value="">Select country</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                        <option value="Spain">Spain</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Austria">Austria</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Poland">Poland</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Serbia">Serbia</option>
                        <option value="Bosnia and Herzegovina">
                          Bosnia and Herzegovina
                        </option>
                        <option value="Montenegro">Montenegro</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-8 h-12 w-full rounded-sm bg-gold px-8 text-sm font-medium uppercase tracking-wider text-bg-primary transition-colors hover:bg-gold-hover"
                  >
                    Continue to Payment
                  </button>
                </form>
              )}

              {/* Payment Form */}
              {step === "payment" && (
                <form onSubmit={handlePaymentSubmit}>
                  <h2 className="font-display text-h2 text-text-primary mb-8">
                    Payment
                  </h2>
                  <div className="mb-6 rounded-sm border border-bg-surface p-4">
                    <p className="text-sm text-text-muted">
                      Shipping to:{" "}
                      <span className="text-text-primary">
                        {shipping.firstName} {shipping.lastName},{" "}
                        {shipping.address}, {shipping.city}
                      </span>
                    </p>
                    <button
                      type="button"
                      onClick={() => setStep("shipping")}
                      className="mt-1 text-xs text-accent hover:underline"
                    >
                      Edit shipping details
                    </button>
                  </div>
                  <div className="grid gap-5">
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        Card Number
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        value={payment.cardNumber}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            cardNumber: e.target.value
                              .replace(/\D/g, "")
                              .replace(/(\d{4})/g, "$1 ")
                              .trim(),
                          })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                        Cardholder Name
                      </label>
                      <input
                        required
                        type="text"
                        value={payment.cardName}
                        onChange={(e) =>
                          setPayment({ ...payment, cardName: e.target.value })
                        }
                        className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                          Expiry Date
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="MM/YY"
                          maxLength={5}
                          value={payment.expiry}
                          onChange={(e) => {
                            let val = e.target.value.replace(/\D/g, "");
                            if (val.length >= 2) val = val.slice(0, 2) + "/" + val.slice(2);
                            setPayment({ ...payment, expiry: val });
                          }}
                          className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-xs uppercase tracking-wider text-text-muted">
                          CVV
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="123"
                          maxLength={4}
                          value={payment.cvv}
                          onChange={(e) =>
                            setPayment({
                              ...payment,
                              cvv: e.target.value.replace(/\D/g, ""),
                            })
                          }
                          className="h-12 w-full rounded-sm border border-text-muted/20 bg-bg-surface px-4 text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center gap-3 rounded-sm border border-bg-surface p-4">
                    <svg className="h-4 w-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs text-text-muted">
                      Your payment details are encrypted and secure. We never
                      store your card information.
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="mt-8 h-12 w-full rounded-sm bg-accent px-8 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
                  >
                    Place Order — €{total.toFixed(2)}
                  </button>
                </form>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-sm border border-bg-surface bg-bg-secondary p-6 lg:sticky lg:top-24">
                <h3 className="text-sm uppercase tracking-wider text-text-muted mb-6">
                  Order Summary
                </h3>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative h-16 w-12 shrink-0 overflow-hidden rounded-sm bg-bg-surface">
                        <Image
                          src={item.product.images[0].url}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-text-primary truncate">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          {item.size}
                          {item.color && ` · ${item.color}`} · Qty{" "}
                          {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm text-text-primary shrink-0">
                        €{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-bg-surface pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Subtotal</span>
                    <span className="text-text-primary">
                      €{subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Shipping</span>
                    <span className="text-text-primary">
                      {shippingCost === 0 ? "Free" : `€${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  {shippingCost > 0 && (
                    <p className="text-xs text-accent">
                      Free shipping on orders over €100
                    </p>
                  )}
                  <div className="flex justify-between border-t border-bg-surface pt-3 text-base font-medium">
                    <span className="text-text-primary">Total</span>
                    <span className="text-text-primary">
                      €{total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
