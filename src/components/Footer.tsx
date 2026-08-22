import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2b180f] text-[#f1e5d8]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-[#fffaf4] mb-4">Luah Yoga</h3>
            <p className="mb-4 text-[#e9d8c7]">
              Professora certificada de Hatha Yoga, dedicada a guiar você em uma jornada 
              de autodescoberta e bem-estar através da prática tradicional do yoga.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#fffaf4] mb-4">Contato</h3>
            <div className="space-y-3 text-[#e9d8c7]">
              <a
                href="mailto:contato@anasilva.yoga"
                className="flex items-center gap-2 hover:text-[#d9a57a] transition-colors"
              >
                <Mail className="w-5 h-5" />
                contato@anasilva.yoga
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 hover:text-[#d9a57a] transition-colors"
              >
                <Phone className="w-5 h-5" />
                (11) 99999-9999
              </a>
              <div className="flex items-start gap-2 text-[#e9d8c7]">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Estúdio Zen Yoga<br />Rua das Flores, 123 - São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[#fffaf4] mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/luahyoga/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4a2917] rounded-full flex items-center justify-center hover:bg-[#8a4408] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#4a2917] rounded-full flex items-center justify-center hover:bg-[#8a4408] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#5b3522] mt-8 pt-8 text-center text-[#d3b79e]">
          <p>&copy; {new Date().getFullYear()} Ana Silva Yoga. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
