import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Sparkles, Users } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="assets/background.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-8xl mx-auto">
          <h1 className="text-white mb-6">
            Bem-vindo à Jornada do Hatha Yoga
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Encontre confiança no caminho e equilíbrio entre corpo e mente através de práticas tradicionais da yoga
          </p>
          <a
            href="#contact"
            className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
          >
            Agende Sua Aula
          </a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="assets/lu.jpg"
              alt="Luane Monteiro - Professora de Yoga"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-emerald-600 mb-4">Conheça Luane Monteiro</h2>
            <p className="text-gray-600 mb-6">
              Olá! Sou Luane Monteiro, professora de Hatha Yoga, certificada pela escola internacional Alliance através da escola Nilaya Yoga com mais de 500 horas de aulas.
              Com mais de 6 anos de experiência, vivendo yoga para assim transmitir seus beneficios.

            </p>
            <p className="text-gray-600 mb-6">
              Minha missão é guiar você em uma jornada de autoconhecimento, onde cada postura, cada respiração e cada momento de quietude contribuam para o seu bem estar no dia a dia.
            </p>
            <p className="text-gray-600 mb-8">
              Os beneficios são constantes para quem se escolhe.
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-gray-900">6+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                {/* <div className="text-gray-900">.</div> */}
                <div className="text-gray-600">Respeitando sempre teu momento</div>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                </div>
                {/* <div className="text-gray-900">.</div> */}
                <div className="text-gray-600">Respeitando sempre teu tempo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-emerald-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-4">Benefícios do Hatha Yoga</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            O Hatha Yoga é uma prática tradicional que combina posturas físicas (asanas), técnicas de respiração (pranayamas) e contemplação
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="mb-3">Flexibilidade</h3>
              <p className="text-gray-600">
                Melhore sua amplitude de movimento e previna lesões com práticas regulares
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="mb-3">Força</h3>
              <p className="text-gray-600">
                Fortaleça músculos profundos e desenvolva resistência física de forma equilibrada
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="mb-3">Equilíbrio Mental</h3>
              <p className="text-gray-600">
                Reduza estresse através de exercicios de respiração que estabilizam o sistema nervoso, trazendo equanimidade mental para se ter discernimento ante as situações
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-emerald-600 text-white" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-4">Pronto para Começar?</h2>
          <p className="text-emerald-50 mb-8 text-xl">
            Agende sua primeira aula experimental e descubra os benefícios do Hatha Yoga
          </p>
          <a
            href="https://calendly.com/luah-yoga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-full hover:bg-emerald-50 transition-colors"
          >
            Agendar Aula Agora
          </a>
        </div>
      </section>
    </div>
  );
}
