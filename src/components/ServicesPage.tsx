import { Users, User, Home, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1651077837628-52b3247550ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwY2xhc3MlMjBzdHVkaW98ZW58MXx8fHwxNzY0NjMyMzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Aula de Yoga"
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
            <h2 className="mb-4">Escolha a Modalidade Ideal para Você</h2>
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
                <h3 className="mb-4">Aulas em Grupo</h3>
                <p className="text-gray-600 mb-6">
                  Pratique yoga em um ambiente acolhedor e energizante, compartilhando a experiência 
                  com outros praticantes em turmas reduzidas de até 12 pessoas.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Turmas de diferentes níveis (iniciante, intermediário, avançado)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Duração: 75 minutos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Horários variados (manhã, tarde e noite)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Material fornecido (tapetes e props)</span>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="mb-4">
                    <span className="text-gray-600">A partir de</span>
                  </div>
                  <div className="text-gray-900">R$ 80/aula</div>
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
                <h3 className="mb-4">Aulas Particulares</h3>
                <p className="text-gray-600 mb-6">
                  Atenção personalizada com práticas adaptadas aos seus objetivos, necessidades 
                  e condição física específica.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Programa customizado e progressivo</span>
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
                  <div className="text-gray-900">R$ 150/aula</div>
                  <p className="text-gray-600">Pacotes com desconto</p>
                </div>
              </div>
            </div>

            {/* Yoga Online */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-emerald-600 flex items-center justify-center">
                <Home className="w-20 h-20 text-white" />
              </div>
              <div className="p-8">
                <h3 className="mb-4">Yoga Online</h3>
                <p className="text-gray-600 mb-6">
                  Pratique yoga no conforto da sua casa através de aulas ao vivo com toda a 
                  qualidade e atenção das aulas presenciais.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Aulas ao vivo via Zoom</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Duração: 60 minutos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Turmas pequenas para melhor acompanhamento</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Gravação disponível por 48h</span>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="mb-4">
                    <span className="text-gray-600">A partir de</span>
                  </div>
                  <div className="text-gray-900">R$ 60/aula</div>
                  <p className="text-gray-600">Pacotes mensais com desconto</p>
                </div>
              </div>
            </div>

            {/* Workshops e Eventos */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-emerald-600 flex items-center justify-center">
                <Calendar className="w-20 h-20 text-white" />
              </div>
              <div className="p-8">
                <h3 className="mb-4">Workshops e Eventos</h3>
                <p className="text-gray-600 mb-6">
                  Experiências imersivas para aprofundar sua prática e conhecimento sobre 
                  aspectos específicos do yoga.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Workshops temáticos mensais</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Retiros de yoga em locais especiais</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Aulas ao ar livre em parques</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-600">✓</span>
                    <span className="text-gray-600">Eventos corporativos e particulares</span>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <div className="mb-4">
                    <span className="text-gray-600">Valores variados</span>
                  </div>
                  <div className="text-gray-900">Consulte programação</div>
                  <p className="text-gray-600">Calendário atualizado mensalmente</p>
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
              <p className="text-gray-600 mb-6">
                Clique no botão abaixo para ver os horários disponíveis e agendar sua aula:
              </p>
              <a
                href="https://calendly.com/luah-yoga"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 transition-colors"
              >
                Ver Horários Disponíveis
              </a>
              <p className="text-gray-600 mt-6">
                Ou se preferir, você pode incorporar o calendário abaixo:
              </p>
              
              {/* Calendly Embed - Replace with your actual Calendly username */}
              <div className="mt-6 h-[700px] border border-gray-200 rounded-lg overflow-hidden">
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
              <h3 className="mb-2">O que devo levar para a aula?</h3>
              <p className="text-gray-600">
                Nas aulas presenciais, fornecemos todos os materiais necessários (tapete, blocos, 
                cintos). Traga apenas roupas confortáveis e uma garrafa de água.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="mb-2">Qual a diferença entre Hatha Yoga e outros estilos?</h3>
              <p className="text-gray-600">
                Hatha Yoga é a base de todos os estilos de yoga físico. Focamos em posturas 
                (asanas), respiração (pranayama) e meditação, com ritmo moderado que permite 
                explorar cada postura com atenção e consciência.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
