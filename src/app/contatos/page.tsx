"use client"
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    // Formatar o número de telefone enquanto o usuário digita
    if (name === 'telefone') {
      const formattedValue = value
        .replace(/\D/g, '') // Remove todos os caracteres que não são dígitos
        .replace(/^(\d{2})(\d{1,5})(\d{0,4}).*/, '($1) $2-$3'); // Aplica a formatação (00) 00000-0000
      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do formulário para o seu backend ou realizar outras operações
    console.log(formData);
    // Resetar o formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      mensagem: ''
    });
  };

  return (
    <main className='min-h-screen flex flex-col'>
      <Header />
      <section className='flex-1 bg-accent flex items-center justify-center'>
        <div className="container mx-auto text-center">
          <h1 className='text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-libre break-words'>Entre em Contato</h1>
          <p className="mt-4 text-lg">Estamos aqui para ajudar. Preencha o formulário abaixo e entraremos em contato em breve.</p>
          <form onSubmit={handleSubmit} className="mt-8 max-w-lg mx-auto text-slate-800">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                placeholder="Telefone (00) 00000-0000"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Mensagem"
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                className="w-full h-32 px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
            <div className="mb-4">
              <button type="submit" className="w-full px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg focus:outline-none">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
