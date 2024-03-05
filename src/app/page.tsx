import Image from "next/image";
import Header from "../components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl">ProOnco Site, no ar! 🔥</h1>
      </main>
    </>
  );
}
