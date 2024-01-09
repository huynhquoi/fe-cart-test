"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { CartItem, Shoes } from "@/controller-types";
import { GetAllShoes } from "@/api/shoes";
import CardWrapper from "../custom/card-wrapper";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import "./style.scss";
import ShoesItem from "./shoes-item";
import CartItems from "./cart-item";
import { getTotalPrice, totalPrice } from "@/lib/utils";

const ShoesPage = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState<Shoes[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState("");

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await GetAllShoes();
        setItems(response.shoes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      return;
    }
    if (typeof window === "undefined") {
      return;
    }
    const existingItems = localStorage.getItem("cart");

    if (existingItems) {
      setCart(JSON.parse(existingItems));
    }

    totalPrice();
    setLoading(false);
  }, [loading]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    setTotal(localStorage.getItem("total") || "");
  }, []);
  return (
    <>
      <div
        style={{ height: "100vh", width: "100vw" }}
        className="flex items-center justify-center"
      >
        <CardWrapper title="Ours Products">
          <ScrollArea className="h-full w-full overflow-y-scroll scroll-area">
            <div className="pb-2">
              {items.map((i) => (
                <ShoesItem
                  key={i?.ID}
                  shoes={i}
                  cartNow={cart}
                  onAdd={() => setLoading(true)}
                />
              ))}
            </div>
          </ScrollArea>
        </CardWrapper>
        <div style={{ width: "5%" }}></div>
        <CardWrapper
          title="Your Cart"
          total={parseFloat(getTotalPrice() || "")}
        >
          <ScrollArea className="h-full w-full overflow-y-scroll scroll-area">
            <div className="pb-2">
              {cart?.length ? cart.map((i) => (
                <CartItems
                  key={i?.ID}
                  shoes={i}
                  onMove={() => {
                    setLoading(true);
                  }}
                />
              )) : <><div className="">Your cart is empty.</div></>}
            </div>
          </ScrollArea>
        </CardWrapper>
      </div>
    </>
  );
};

export default ShoesPage;
