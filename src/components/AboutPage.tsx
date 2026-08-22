import { Award, BookOpen, Heart, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1604234452531-780b648eddcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXRoYSUyMHlvZ2ElMjBwb3NlfGVufDF8fHx8MTc2NDY5NTc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hatha Yoga"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <h1 className="relative z-10 text-white">Sobre Mim</h1>
      </section>

      {/* About Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-emerald-600 mb-4">Minha Jornada no Yoga</h2>
            <p className="text-gray-600 mb-4">
              Minha relação com o yoga começou em 2012, quando buscava uma forma de aliviar o estresse 
              do dia a dia corporativo. O que começou como uma prática física logo se transformou em 
              uma jornada profunda de autodescoberta e transformação pessoal.
            </p>
            <p className="text-gray-600 mb-4">
              Inspirada pelos benefícios que experimentei, decidi me dedicar profundamente ao estudo 
              do Hatha Yoga tradicional. Desde então, tenho o privilégio de compartilhar esta prática 
              ancestral com centenas de alunos, testemunhando suas próprias transformações.
            </p>
            <p className="text-gray-600">
              Acredito que o yoga é para todos, independentemente da idade, condição física ou experiência 
              prévia. Cada pessoa tem seu próprio ritmo e caminho, e meu papel é guiar com compaixão, 
              paciência e conhecimento técnico.
            </p>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="mb-8">Formação e Certificações</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2">Certificação Internacional em Hatha Yoga - 500h</h3>
                  <p className="text-gray-600">
                    Yoga Alliance International | 2014
                  </p>
                  <p className="text-gray-600 mt-2">
                    Formação completa em asanas, pranayama, meditação, filosofia yoga e anatomia aplicada.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2">Especialização em Yoga Terapêutico</h3>
                  <p className="text-gray-600">
                    Instituto Brasileiro de Yoga | 2016
                  </p>
                  <p className="text-gray-600 mt-2">
                    Técnicas adaptadas para reabilitação, gestantes e terceira idade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2">Formação em Meditação e Mindfulness</h3>
                  <p className="text-gray-600">
                    Centro de Estudos Budistas | 2018
                  </p>
                  <p className="text-gray-600 mt-2">
                    Práticas contemplativas e técnicas de atenção plena.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2">Imersão em Rishikesh, Índia</h3>
                  <p className="text-gray-600">
                    Parmarth Niketan Ashram | 2019
                  </p>
                  <p className="text-gray-600 mt-2">
                    Estudo aprofundado de filosofia védica e práticas tradicionais no berço do yoga.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-emerald-50 p-8 rounded-lg">
            <h2 className="mb-4">Minha Filosofia de Ensino</h2>
            <p className="text-gray-600 mb-4">
              Acredito que o Hatha Yoga vai muito além dos exercícios físicos. É uma prática de 
              união - entre corpo e mente, entre esforço e relaxamento, entre força e rendição.
            </p>
            <p className="text-gray-600 mb-4">
              Em minhas aulas, combino a tradição milenar do yoga com adaptações modernas que 
              respeitam as necessidades individuais de cada praticante. Crio um ambiente acolhedor 
              onde todos se sentem seguros para explorar seus limites de forma consciente e respeitosa.
            </p>
            <p className="text-gray-600">
              Meu objetivo é que cada aluno desenvolva não apenas uma prática regular, mas uma 
              conexão profunda consigo mesmo, levando os ensinamentos do tapete para a vida cotidiana.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
