import { CartItem, Shoes } from "@/controller-types";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { removeFromCart, updateQuantityForCartItem } from "@/lib/utils";

type CartItemProps = {
  children?: React.ReactNode;
  shoes: CartItem;
  onMove: () => void;
};

const CartItems = ({ shoes, children, onMove }: CartItemProps) => {
  const [quantity, setQuantity] = useState(shoes.quantity);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    if (quantity > 1 || quantity === 1) {
      return;
    }
    setQuantity(1);
  }, [quantity]);

  useEffect(() => {
    if ((quantity < 1 || quantity === 1) && !update) {
      return;
    }
    updateQuantityForCartItem(shoes?.ID, quantity);
    setUpdate(false);
  }, [quantity, shoes, update]);

  const handleClickRemove = () => {
    removeFromCart(shoes?.ID);
    onMove();
  };
  const onPlus = () => {
    setQuantity(quantity + 1);
    setUpdate(true);
  };

  const onRemove = () => {
    setQuantity(quantity - 1);
    setUpdate(true);
  };
  return (
    <>
      <div className="w-full flex items-center py-5">
        <div className="cartItemLeft">
          <div
            className="cardItemImage"
            style={{
              background: shoes?.Color,
              width: "90px",
              height: "90px",
              borderRadius: "100%",
              marginRight: "34px",
            }}
          >
            <div>
              <img
                src={shoes.Image}
                style={{
                  width: "140%",
                  maxWidth: "140%",
                  filter: "drop-shadow(0 30px 20px rgba(0,0,0,.2))",
                  transform: "rotate(-28deg) translateY(-40px)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="cartItemRight flex flex-col">
          <div
            className="font-bold mb-[10px] w-[180px]"
            style={{ fontSize: "14px" }}
          >
            {shoes.Name}
          </div>
          <div className="font-bold mb-4" style={{ fontSize: "20px" }}>
            ${shoes.Price}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button
                style={{
                  width: "28px",
                  height: "28px",
                  background: "#eee",
                  padding: 0,
                  borderRadius: "28px",
                }}
                onClick={onRemove}
              >
                <img
                  src="https://github.com/edric-cao-goldenowl/webdev-intern-assignment/blob/main/app/assets/minus.png?raw=true"
                  style={{ width: "10px" }}
                />
              </Button>
              <div className="flex justify-center text-sm w-5 mx-2">
                {quantity}
              </div>
              <Button
                style={{
                  width: "28px",
                  height: "28px",
                  background: "#eee",
                  padding: 0,
                  borderRadius: "28px",
                }}
                onClick={onPlus}
              >
                <img
                  src="https://github.com/edric-cao-goldenowl/webdev-intern-assignment/blob/main/app/assets/plus.png?raw=true"
                  style={{ width: "10px" }}
                />
              </Button>
            </div>
            <Button
              style={{
                width: "28px",
                height: "28px",
                background: "#f6c90e",
                padding: 0,
                borderRadius: "28px",
                marginRight: "4px",
              }}
              onClick={handleClickRemove}
            >
              <img
                src="https://github.com/edric-cao-goldenowl/webdev-intern-assignment/blob/main/app/assets/trash.png?raw=true"
                style={{ width: "16px" }}
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
