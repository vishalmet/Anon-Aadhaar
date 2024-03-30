"use client";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "@anon-aadhaar/react";
import Image from "next/image";
import { useEffect } from "react";
import Navbar from "./Component/Navbar";

export default function Home() {
  const [AnonAadhaar] = useAnonAadhaar();
  useEffect(() => {
    console.log("Country Identity status: ", AnonAadhaar.status);
  }, [AnonAadhaar]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <LogInWithAnonAadhaar /> */}
      <Navbar />
    </main>
  );
}
