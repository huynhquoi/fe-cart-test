"use client";

import { GetAllShoes } from "@/api/shoes";
import { Button } from "@/components/ui/button";
import { Shoes } from "@/controller-types";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [shoes, setShoes] = useState<Shoes[]>();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await GetAllShoes();
        console.log(res);
      } catch (err: any) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>Click here</Button>
    </main>
  );
}
