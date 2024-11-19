'use client'

import { useState } from 'react'
import { Settings2, User, Users, Phone, Loader2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export default function Component() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    telefone: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
      <div className="md:container mx-auto max-w-7xl">
        <div className="relative rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-sky-300/10 to-transparent p-[1px] shadow-[0_0_1rem_0_rgba(0,0,0,0.1)]">
          <div className="relative rounded-[2rem] bg-white/80 backdrop-blur-sm p-6 md:p-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Left Column */}
              <div className="space-y-6">
                <div className="inline-flex rounded-2xl bg-sky-100/80 p-3">
                  <Settings2 className="h-8 w-8 text-sky-500" />
                </div>
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tight text-slate-800 md:text-4xl lg:text-[2.5rem]">
                    Integre a Oncologia no seu hospital
                  </h1>
                  <p className="md:text-lg leading-relaxed text-slate-600">
                    Se você está buscando melhorar a gestão hospitalar em oncologia e promover melhores resultados para sua
                    instituição, entre em contato conosco hoje mesmo para saber mais sobre nossos serviços e como podemos ajudar.
                    Estamos aqui para apoiá-lo em sua jornada rumo à excelência em cuidados oncológicos.
                  </p>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="relative">
                <div className="rounded-[1.5rem] border-sky-200/50 bg-white/70 backdrop-blur-sm p-8 shadow-[0_0_2rem_-0.5rem_rgba(14,165,233,0.1)] border-2 border-sky-500">
                  <h2 className="mb-8 text-2xl font-semibold text-slate-800">Quero ser cliente</h2>
                  <form onSubmit={handleSubmit} className="space-y-6 ">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-slate-500">
                          Nome
                        </Label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                            <User className="h-5 w-5" />
                          </div>
                          <Input
                            id="nome"
                            placeholder="Digite seu nome"
                            className={cn(
                              'h-12 rounded-xl pl-10 transition-all duration-200',
                              'bg-slate-200 border-slate-200/50',
                              'placeholder:text-slate-500 text-slate-600',
                              'hover:border-sky-200 hover:bg-white',
                              'focus:border-sky-500/50 focus:bg-white focus:ring-2 focus:ring-sky-500',
                            )}
                            value={formData.nome}
                            onChange={e => setFormData({ ...formData, nome: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sobrenome" className="text-slate-500">
                          Sobrenome
                        </Label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                            <Users className="h-5 w-5" />
                          </div>
                          <Input
                            id="sobrenome"
                            placeholder="Digite seu sobrenome"
                            className={cn(
                              'h-12 rounded-xl pl-10 transition-all duration-200',
                              'bg-slate-200 border-slate-200/50',
                              'placeholder:text-slate-500 text-slate-600',
                              'hover:border-sky-200 hover:bg-white',
                              'focus:border-sky-500/50 focus:bg-white focus:ring-2 focus:ring-sky-500/20',
                            )}
                            value={formData.sobrenome}
                            onChange={e => setFormData({ ...formData, sobrenome: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefone" className="text-slate-500">
                          WhatsApp / Telefone
                        </Label>
                        <div className="relative">
                          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                            <Phone className="h-5 w-5" />
                          </div>
                          <Input
                            id="telefone"
                            type="tel"
                            placeholder="(00) 00000-0000"
                            className={cn(
                              'h-14 rounded-xl pl-10 transition-all duration-200',
                              'bg-slate-200 border-slate-200/50',
                              'placeholder:text-slate-500 text-slate-600',
                              'hover:border-sky-200 hover:bg-white',
                              'focus:border-sky-500/50 focus:bg-white focus:ring-2 focus:ring-sky-500/20',
                            )}
                            value={formData.telefone}
                            onChange={e => setFormData({ ...formData, telefone: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className={cn(
                        'group h-12 w-full rounded-xl bg-sky-500 text-white transition-all',
                        'hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/25',
                        'focus:ring-2 focus:ring-sky-500 focus:ring-offset-2',
                        'active:scale-[0.98] disabled:opacity-70'
                      )}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Falar com um especialista
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}