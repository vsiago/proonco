import Link from 'next/link'
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Footer() {
  const navLinks = [
    { name: 'Quem somos', href: '#' },
    { name: 'Oncologia em números', href: '#' },
    { name: 'Serviços', href: '#' },
    { name: 'Contato', href: '#' }
  ]

  const contactLinks = [
    { name: 'Whatsapp', icon: MessageCircle, href: '#' },
    { name: 'E-mail', icon: Mail, href: '#' },
    { name: 'Telefone', icon: Phone, href: '#' },
    { name: 'Endereço', icon: MapPin, href: '#' }
  ]

  return (
    <footer className="relative mt-20 overflow-hidden rounded-t-[2.5rem] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 px-6 pt-16 text-white md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr,auto]">
          {/* Logo and Navigation */}
          <div className="space-y-8">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold tracking-tight">
                PR<span className="text-sky-400">O</span>NCO
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="grid gap-4 sm:grid-cols-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'inline-flex h-12 items-center justify-center rounded-full px-8',
                    'border border-white/10 bg-white/5 backdrop-blur-sm',
                    'transition-all hover:bg-white/10'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact and Useful Links */}
          <div className="space-y-8">
            {/* Contact Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Falar com a ProOnco</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {contactLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="group flex flex-col items-center gap-2"
                    >
                      <span
                        className={cn(
                          'flex h-12 w-12 items-center justify-center rounded-xl',
                          'bg-white/5 backdrop-blur-sm',
                          'transition-all group-hover:bg-white/10'
                        )}
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Useful Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Links úteis:</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    • Política de Privacidade
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-sky-400">
                    • Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white/10 py-8 text-center text-sm text-white/60">
          <p>Copyright © 2024 ProOnco</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}