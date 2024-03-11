import Header from "../components/header";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <Header />
            <main className="bg-accent min-h-screen flex items-center justify-center text-center">
                <h1 className="text-xl">
                    ProOnco Site,
                    <br />
                    no ar! 🔥
                </h1>
            </main>
        </ div>
    );
}
