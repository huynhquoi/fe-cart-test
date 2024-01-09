import { CartItem, Shoes } from "@/controller-types";
import { setTotal } from "@/store/slice";
import { type ClassValue, clsx } from "clsx";
import { useDispatch } from "react-redux";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removeFromCart(shoesId: number) {
  let cartItems: CartItem[] = [];

  if (typeof window === "undefined") {
    return;
  }

  const existingItems = localStorage.getItem("cart");

  if (existingItems) {
    cartItems = JSON.parse(existingItems);

    cartItems = cartItems.filter((item) => item.ID !== shoesId);

    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
}

export function addToCart(shoes: CartItem) {
  let cartItems: CartItem[] = [];

  if (typeof window === "undefined") {
    return;
  }

  const existingItems = localStorage.getItem("cart");

  if (existingItems) {
    cartItems = JSON.parse(existingItems);
  }

  cartItems.push(shoes);

  localStorage.setItem("cart", JSON.stringify(cartItems));
}

export function totalPrice() {
  if (typeof window === "undefined") {
    return 0;
  }

  let total = 0;

  const existingItems = localStorage.getItem("cart");

  if (existingItems) {
    const cartItems: CartItem[] = JSON.parse(existingItems);
    total = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.Price * currentItem.quantity;
    }, 0);
  }

  localStorage.setItem("total", total.toFixed(2));
}

export function updateQuantityForCartItem(itemID: number, newQuantity: number) {
  if (typeof window === "undefined") {
    return 0;
  }

  const existingItems = localStorage.getItem("cart");

  if (existingItems) {
    const cartItems: CartItem[] = JSON.parse(existingItems);

    const updatedCartItems = cartItems.map((item) =>
      item.ID === itemID ? { ...item, quantity: newQuantity } : item
    );

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    totalPrice();
  }
}
export function getTotalPrice() {
  if (typeof window === "undefined") {
    return 0;
  }

  return localStorage.getItem("total");
}
