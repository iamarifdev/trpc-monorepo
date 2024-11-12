"use client";

import { useEffect, useState } from "react";
import ClientSide from "@web/components/ClientSide";
import { trpc } from "./trpc";

export default function Home() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    trpc.hello.query({ name: `Tom` }).then(({ greeting }) => setGreeting(greeting));
  }, []);

  return (
    <>
      <div>{greeting}</div>
      <ClientSide />
    </>
  );
}