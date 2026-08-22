import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Sparkles, Users } from 'lucide-react';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1641391400871-3a6578a11d5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHBlYWNlZnVsfGVufDF8fHx8MTc2NDY0NDA3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Yoga meditation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-white mb-6">
            Bem-vindo à Jornada do Hatha Yoga
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Descubra o equilíbrio entre corpo e mente através de práticas tradicionais de yoga
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
              src="https://images.unsplash.com/photo-1667890786022-83bca6c4f4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHdvbWFufGVufDF8fHx8MTc2NDY5NTc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Ana Silva - Professora de Yoga"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-emerald-600 mb-4">Conheça Ana Silva</h2>
            <p className="text-gray-600 mb-6">
              Olá! Sou Ana Silva, professora certificada de Hatha Yoga com mais de 10 anos de experiência 
              ajudando pessoas a encontrarem paz, força e flexibilidade através da prática do yoga.
            </p>
            <p className="text-gray-600 mb-8">
              Minha missão é guiar você em uma jornada de autodescoberta, onde cada postura, cada respiração 
              e cada momento de quietude contribuem para o seu bem-estar integral.
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
                  <Heart className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-gray-900">10+</div>
                <div className="text-gray-600">Anos de Experiência</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-gray-900">500+</div>
                <div className="text-gray-600">Alunos</div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-3">
                  <Sparkles className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-gray-900">1000+</div>
                <div className="text-gray-600">Aulas Ministradas</div>
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
            O Hatha Yoga oferece uma abordagem holística para o bem-estar físico, mental e espiritual
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
                Reduza o estresse, ansiedade e encontre paz interior através da meditação
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
            href="https://calendly.com/seu-usuario"
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
