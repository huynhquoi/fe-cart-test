"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import "./style.scss";

type CardWrapperProps = {
  children: React.ReactNode;
  title: string;
  total?: number;
};

const CardWrapper = ({
  children,
  total,
  title,
  ...props
}: CardWrapperProps) => {
  return (
    <>
      <Card
        style={{ width: "360px", height: "600px", padding: "0 28px" }}
        {...props}
        className="card-wrapper"
      >
        <CardHeader className="p-0 my-3 relative">
          <img
            src="https://github.com/edric-cao-goldenowl/webdev-intern-assignment/blob/main/app/assets/nike.png?raw=true"
            style={{ width: "50px", display: "block", padding: 0 }}
          />
        </CardHeader>
        <CardTitle className="text-2xl font-bold my-4 relative">
          <div className="flex items-center justify-between">
            <div className="">{title}</div>
            {!!total ? (
              <div className="">${total}</div>
            ) : (
              <div className="">$00.00</div>
            )}
          </div>
        </CardTitle>
        <CardContent
          style={{ height: "calc(100% - 98px)" }}
          className="relative p-0"
        >
          {children}
        </CardContent>
      </Card>
    </>
  );
};

export default CardWrapper;
