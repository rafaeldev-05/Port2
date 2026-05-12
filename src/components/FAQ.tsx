'use client';

import { socialLinks } from '@/lib/constants';
import { SectionHeader } from './SectionHeader';

const faqItems = [
  {
    question: 'How long does it take to create a website?',
    questionPt: 'Quanto tempo demora para criar um site?',
    answer:
      'It depends on the size and complexity of the project. A simple landing page or institutional website can usually be delivered within 5 to 7 business days after aligning the information, visual identity, and content.',
    answerPt:
      'Depende do tamanho e da complexidade do projeto. Uma landing page ou site institucional simples geralmente pode ser entregue entre 5 e 7 dias úteis, após o alinhamento das informações, identidade visual e conteúdo.'
  },
  {
    question: 'How long does it take to develop a web system?',
    questionPt: 'Quanto tempo demora para desenvolver um sistema web?',
    answer:
      'Custom systems usually take longer because they involve business rules, screens, databases, and integrations. For smaller projects, the initial timeline is usually between 15 and 20 business days, depending on complexity.',
    answerPt:
      'Sistemas personalizados costumam levar mais tempo, pois envolvem regras de negócio, telas, banco de dados e integrações. Em projetos menores, o prazo inicial costuma ficar entre 15 e 20 dias úteis, podendo variar conforme a complexidade.'
  },
  {
    question: 'How long does it take to develop an app?',
    questionPt: 'Quanto tempo demora para desenvolver um aplicativo?',
    answer:
      'Android and iOS apps usually require planning, prototyping, development, and testing. For initial versions or MVPs, the timeline is usually between 15 and 20 business days and may increase depending on features, integrations, and publishing steps.',
    answerPt:
      'Aplicativos para Android e iOS geralmente exigem planejamento, prototipação, desenvolvimento e testes. Para versões iniciais ou MVPs, o prazo costuma ficar entre 15 e 20 dias úteis, podendo aumentar conforme as funcionalidades, integrações e etapas de publicação.'
  },
  {
    question: 'Is the quote free?',
    questionPt: 'O orçamento é gratuito?',
    answer:
      'Yes. The initial quote is free. The goal is to understand your needs, evaluate the type of project, and recommend the best technical path before defining budget, timeline, and scope.',
    answerPt:
      'Sim. O orçamento inicial é gratuito. A ideia é entender sua necessidade, avaliar o tipo de projeto e indicar o melhor caminho técnico antes de definir valores, prazos e escopo.'
  },
  {
    question: 'Can the project be custom-made for my business?',
    questionPt: 'O projeto pode ser feito sob medida para o meu negócio?',
    answer:
      'Yes. Each project can be adapted to the client goals, whether the objective is to present a brand, sell online, automate processes, create an internal system, or launch an app.',
    answerPt:
      'Sim. Cada projeto pode ser adaptado aos objetivos do cliente, seja para apresentar uma marca, vender online, automatizar processos, criar um sistema interno ou lançar um aplicativo.'
  }
];

export function FAQ() {
  return (
    <section id="faq" className="section faq-section">
      <span id="contact" className="faq-legacy-anchor" aria-hidden="true" />
      <div className="section-container">
        <SectionHeader number="06" title="FAQ" titlePt="Dúvidas" />

        <div className="faq-content">
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>
                  <span data-text-en={item.question} data-text-pt={item.questionPt}>{item.question}</span>
                  <i className="fas fa-chevron-down" aria-hidden="true" />
                </summary>
                <p data-text-en={item.answer} data-text-pt={item.answerPt}>{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="faq-cta">
            <div>
              <h3 data-text-en="Still have questions about your project?" data-text-pt="Ainda tem dúvidas sobre seu projeto?">
                Still have questions about your project?
              </h3>
              <p data-text-en="Message me on WhatsApp and I will help you understand the best path to bring your idea to life." data-text-pt="Me chame no WhatsApp e eu ajudo você a entender o melhor caminho para tirar sua ideia do papel.">
                Message me on WhatsApp and I will help you understand the best path to bring your idea to life.
              </p>
            </div>
            <a
              href={socialLinks.whatsappBudget}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary faq-cta-button"
              aria-label="Falar com Rafael pelo WhatsApp"
            >
              <span data-text-en="Talk on WhatsApp" data-text-pt="Falar no WhatsApp">Talk on WhatsApp</span>
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
