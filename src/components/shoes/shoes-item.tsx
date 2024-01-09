"use client";

import { CartItem, Shoes } from "@/controller-types";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { addToCart } from "@/lib/utils";

type ShoesItemProps = {
  shoes: Shoes;
  cartNow: CartItem[];
  onAdd: () => void;
};

const ShoesItem = ({ shoes, cartNow, onAdd }: ShoesItemProps) => {
  const [update, setUpdate] = useState(false);
  const handleClickAdd = () => {
    addToCart({
      quantity: 1,
      ...shoes,
    });
    setUpdate(true);
    onAdd();
  };
  return (
    <>
      <div className="py-10">
        <Card
          style={{
            background: shoes?.Color,
            borderRadius: "30px",
            height: "380px",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={shoes?.Image}
            className="-rotate-[24deg] w-full drop-shadow-2xl ml-[-16px]"
          />
        </Card>
        <div className="text-xl font-bold mx-0 mt-7 mb-5">{shoes.Name}</div>
        <div
          style={{ lineHeight: "1.8", color: "#777", fontSize: "13px" }}
          className="mb-5 font-light"
        >
          {shoes.Description}
        </div>
        <div className=" font-bold flex items-center justify-between">
          <div className="text-lg">${shoes?.Price}</div>
          {cartNow?.some((e) => e?.ID === shoes?.ID) ? (
            <Button
              className="rounded-3xl h-[46px] text-black font-bold"
              style={{ background: "#f6c90e" }}
            >
              <img
                src="https://github.com/edric-cao-goldenowl/webdev-intern-assignment/blob/main/app/assets/check.png?raw=true"
                className="w-6"
              />
            </Button>
          ) : (
            <Button
              className="rounded-3xl h-[46px] text-black font-bold"
              style={{ background: "#f6c90e" }}
              onClick={handleClickAdd}
            >
              <div>ADD TO CART</div>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoesItem;
