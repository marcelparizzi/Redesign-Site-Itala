import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Como funciona a primeira conversa?',
    answer: 'A primeira conversa é um momento de acolhimento e avaliação. Conversamos sobre o que te trouxe até aqui, suas expectativas e necessidades. É uma oportunidade para conhecermos um ao outro e decidirmos juntos se a psicanálise é indicada para você neste momento. Não há compromisso de continuidade.',
  },
  {
    question: 'Como são os encontros?',
    answer: 'Os encontros fazem parte de um processo terapêutico marcado pela ética, confiança e respeito. Ambos se comprometem no processo para o crescimento psíquico, a ampliação das capacidades mentais e o alívio do sofrimento emocional. O paciente é ativo no trabalho terapêutico — sua assiduidade e comprometimento influenciam o andamento do tratamento. A frequência e o valor são combinados pela dupla como parte do processo de avaliação.',
  },
  {
    question: 'Quanto tempo dura cada sessão?',
    answer: 'As sessões individuais têm duração de 45 minutos. A frequência é combinada entre nós, geralmente semanal, mas pode ser ajustada conforme a necessidade de cada pessoa e do processo terapêutico.',
  },
  {
    question: 'Atende por convênio ou particular?',
    answer: 'O atendimento é particular. O valor da sessão é combinado durante a primeira conversa, levando em consideração a frequência e a modalidade de atendimento.',
  },
  {
    question: 'Como funciona o atendimento de crianças?',
    answer: 'O atendimento infantil acontece de forma diferenciada. Através do brincar, dos desenhos e das histórias, a criança expressa suas angústias e desejos enquanto constrói um vínculo de confiança. O consultório conta com uma sala exclusiva e acolhedora para receber os pequenos. O acompanhamento dos pais é parte integrante do processo.',
  },
  {
    question: 'O que é supervisão clínica?',
    answer: 'A supervisão é um espaço de reflexão sobre a prática clínica. É indicada para estudantes de psicologia e profissionais que desejam aprimorar seu exercício. Trabalhamos com discussão de casos, fundamentação teórica e desenvolvimento da escuta analítica, respeitando a singularidade de cada trajetória profissional.',
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    if (isOpen) {
      gsap.to(el, { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' });
    } else {
      gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.out' });
    }
  }, [isOpen]);

  return (
    <div
      style={{
        borderBottom: '1px solid rgba(184, 149, 106, 0.2)',
        padding: '20px 0',
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          padding: 0,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            fontWeight: 400,
            color: 'var(--color-warm-cream)',
            paddingRight: 16,
          }}
        >
          {question}
        </span>
        <ChevronDown
          size={18}
          style={{
            color: 'var(--color-golden-oak)',
            flexShrink: 0,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease',
          }}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          height: 0,
          overflow: 'hidden',
          opacity: 0,
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.875rem, 1vw, 1rem)',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'rgba(245, 240, 230, 0.75)',
            paddingTop: 12,
            paddingRight: 32,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const header = section.querySelector('.faq-header');
    if (header) {
      gsap.fromTo(
        header,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      style={{
        width: '100%',
        backgroundColor: 'var(--color-deep-umber)',
        padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div className="faq-header" style={{ textAlign: 'center', marginBottom: 56 }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'var(--color-golden-oak)',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            PERGUNTAS FREQUENTES
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: 'var(--color-warm-cream)',
            }}
          >
            Tire suas dúvidas
          </h2>
        </div>

        {/* FAQ List */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: 'center',
            marginTop: 48,
            padding: '32px',
            backgroundColor: 'rgba(245, 240, 230, 0.04)',
            borderRadius: 4,
            border: '1px solid rgba(184, 149, 106, 0.15)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
              fontWeight: 400,
              color: 'var(--color-warm-cream)',
              marginBottom: 8,
            }}
          >
            Ainda tem dúvidas?
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1vw, 1rem)',
              color: 'rgba(245, 240, 230, 0.7)',
              marginBottom: 20,
            }}
          >
            Vamos conversar. O primeiro passo é sempre o mais importante.
          </p>
          <a
            href="https://wa.me/5551999223888"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--color-golden-oak)',
              color: 'var(--color-warm-cream)',
              padding: '14px 36px',
              borderRadius: 2,
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'var(--color-dark-void)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = 'var(--color-golden-oak)';
            }}
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}
