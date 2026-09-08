import { Users, User, Home, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesPage() {
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
        <h1 className="relative z-10 text-white">Serviços e Modalidades</h1>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4">Escolha o que se encaixa melhor na sua rotina</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofereço diferentes formatos de aula para atender suas necessidades e preferências,
              sempre com foco na prática tradicional do Hatha Yoga.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Aulas em Grupo */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-emerald-600 flex items-center justify-center">
                <Users className="w-20 h-20 text-white" />
              </div>
              <div className="p-8">
                <h3 className="mb-4">Aulas em Grupo (Presencial e Online)</h3>
                <p className="text-gray-600 mb-6">
                  Pratique yoga em um grupo acolhedor e energizante, compartilhando a experiência com outros praticantes em turmas reduzidas de até 10 pessoas.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Duração: 60 minutos</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Horários flexíveis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Materiais necessários (tapetes e props)</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="mb-4">
                    <span className="text-gray-600">A partir de</span>
                  </div>
                  <div className="text-gray-900">R$ 60/aula</div>
                  <p className="text-gray-600">Pacotes mensais disponíveis</p>
                </div>
              </div>
            </div>

            {/* Aulas Particulares */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-emerald-600 flex items-center justify-center">
                <User className="w-20 h-20 text-white" />
              </div>
              <div className="p-8">
                <h3 className="mb-4">Aulas Particulares (Presencial e Online)</h3>
                <p className="text-gray-600 mb-6">
                  Atenção personalizada com práticas adaptadas aos seus objetivos, necessidades e condição física específica.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Aula completas com atenção e consciência em cada movimento</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Duração: 60 minutos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Horários flexíveis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Acompanhamento individualizado</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="mb-4">
                    <span className="text-gray-600">A partir de</span>
                  </div>
                  <div className="text-gray-900">R$ 120/aula</div>
                  <p className="text-gray-600">Pacotes com desconto</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Integration */}
          <div className="bg-emerald-50 rounded-lg p-8 text-center">
            <h2 className="mb-4">Agende Sua Primeira Aula</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              A primeira aula experimental é por minha conta! Escolha o melhor horário e
              venha conhecer a prática de Hatha Yoga.
            </p>

            <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm">
              {/* Calendly Embed - Replace with your actual Calendly username */}
              <div className="h-[700px] border border-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://calendly.com/luah-yoga"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Agendar Aula de Yoga"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-12">Perguntas Frequentes</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="mb-2">Nunca pratiquei yoga. Por onde começar?</h3>
              <p className="text-gray-600">
                As aulas para iniciantes são perfeitas para quem está começando! Você aprenderá
                as posturas básicas, técnicas de respiração e alinhamento corporal de forma
                gradual e segura.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="mb-2">Preciso ser flexível para fazer yoga?</h3>
              <p className="text-gray-600">
                Não! A flexibilidade é uma consequência da prática, não um pré-requisito.
                As posturas são adaptadas para cada nível e capacidade individual.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="mb-2">Qual a diferença entre Hatha Yoga e outros estilos?</h3>
              <p className="text-gray-600">
                Hatha Yoga usa o corpo  como ferramenta de autoconhecimento. Focamos em posturas (asanas), respiração (pranayama) e meditação, que a partir da união da respiração com o movimento se conquista  uma mente plena e consciência corporal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
