import { NextPage } from "next";
import Head from "next/head";
import { cn } from "@/utils/tailwind";

const Protected: NextPage = () => {
  return (
    <>
      <Head>
        <title>Protected</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={cn(
          "flex h-[80%] w-screen items-center justify-center align-middle",
        )}
      >
        <label className={cn("text-9xl font-black")}>Protected 🔒</label>
      </div>
    </>
  );
};

export default Protected;
