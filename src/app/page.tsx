import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ProOnco - Inicio",
    description: "Transormando cuidado em cura.",
    themeColor: "red"
};

export default function Home() {
    return (
        <main className='min-h-screen flex flex-col'>
            <section className='flex-1 bg-accent flex items-center justify-center'>
                <h1 className='text-xl'>Inicio</h1>
            </section>
        </main>
    );
}
