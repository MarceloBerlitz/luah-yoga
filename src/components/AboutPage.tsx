import { Award, BookOpen, Heart, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="assets/background.png"
            alt="Background"
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
              Minha trajetória no Yoga teve início em 2020, em meio a pandemia, onde assustada com tudo que acontecia busquei uma forma de encontrar forças e equilíbrio para lidar com esse momento complicado que vivemos. Foi onde no tapete comigo mesma me encontrei, ganhei mais confiança e pude desfrutar da presença de uma forma que nunca imaginei. A vida acontece aqui e agora, e aqui está a nossa busca constante.
            </p>
            <p className="text-gray-600 mb-4">
              Uma prática voltada ao autoconhecimento revelou-se, ao longo do tempo, um profundo caminho de presença, desapego de controle e assim tendo uma vida mais plena e presente.
            </p>
            <p className="text-gray-600 mb-4">
              Inspirada pelos benefícios que experimentei em minha própria jornada, decidi aprofundar meus estudos no Hatha Yoga, dedicando-me à compreensão e vivência dos seus princípios filosóficos e técnicos. Desde então, tenho a honra de compartilhar esse conhecimento milenar com aqueles que estão abertos a experimentar um caminho de yoga, acompanhando de perto suas conquistas e transformações individuais que refletem em todo o coletivo.
            </p>
            <p className="text-gray-600">
              Acredito que o Yoga é uma prática acessível a todos, independentemente da idade, condição física ou experiência anterior. Cada pessoa possui um caminho único, que merece ser respeitado e acolhido. Como instrutora, meu compromisso é oferecer orientação qualificada, conduzindo cada aluno com sensibilidade, respeito, paciência e conhecimento técnico, para que possa desenvolver sua prática de forma segura e significativa.
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
                  <h3 className="mb-2">Formação Vivenciando a filosofia do Yoga e Gita - 100 horas</h3>
                  <p className="text-gray-600">
                    Escola Nilaya Yoga | 2024-2025-2026… e seguindo
                  </p>
                  <p className="text-gray-600 mt-2">
                    Estudos sobre autoconhecimento, aplicação prática no dia a dia, vivenciando o yoga em toda sua profundidade e estudos teóricos sobre o Gita.
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
                  <h3 className="mb-2">Formação em estudos Avançados de Yoga - 300 horas</h3>
                  <p className="text-gray-600">
                    Escola Nilaya de Yoga | 2025
                  </p>
                  <p className="text-gray-600 mt-2">
                    Práticas contemplativas e técnicas avançadas de asanas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-emerald-50 p-8 rounded-lg">
            <h2 className="mb-4">Minha Filosofia de Ensino</h2>
            <p className="text-gray-600 mb-4">
              Acredito que o Hatha Yoga transcende a dimensão puramente física da prática. Trata-se de uma jornada de integração e equilíbrio, que promove a união entre corpo e mente, entre ação e quietude, entre força e entrega. É por meio desses momentos de presença que se desenvolvem maior consciência e bem-estar.
            </p>
            <p className="text-gray-600 mb-4">
              Em minhas aulas, busco preservar a essência da tradição milenar do Yoga, aliando seus fundamentos a abordagens contemporâneas que respeitam as necessidades, capacidades e objetivos de cada praticante. Priorizo a criação de um ambiente acolhedor, seguro e inclusivo, onde todos possam explorar seu potencial de forma consciente, respeitando seus próprios limites e processos individuais.
            </p>
            <p className="text-gray-600">
              Meu propósito é incentivar cada aluno a cultivar uma prática consistente e significativa, que vá além do espaço da aula. Mais do que desenvolver habilidades físicas, busco apoiar a construção de uma conexão genuína consigo mesmo, permitindo que os ensinamentos do Yoga sejam incorporados à vida cotidiana, promovendo mais equilíbrio, clareza e qualidade de vida.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
