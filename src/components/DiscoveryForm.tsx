'use client';

import { FormEvent, useState } from 'react';
import { SectionHeader } from './SectionHeader';

const sourceOptions = [
  { value: 'linkedin', label: 'LinkedIn', labelPt: 'LinkedIn' },
  { value: 'whatsapp', label: 'WhatsApp', labelPt: 'WhatsApp' },
  { value: 'instagram', label: 'Instagram', labelPt: 'Instagram' },
  { value: 'tiktok', label: 'TikTok', labelPt: 'TikTok' },
  { value: 'github', label: 'GitHub', labelPt: 'GitHub' },
  { value: 'youtube', label: 'YouTube', labelPt: 'YouTube' },
  { value: 'google', label: 'Google', labelPt: 'Google' },
  { value: 'presential_event', label: 'In-person event', labelPt: 'Evento presencial' },
  { value: 'friend_referral', label: 'Friend referral', labelPt: 'Indicação de amigo' },
  { value: 'resume_process', label: 'Resume / hiring process', labelPt: 'Currículo / processo seletivo' },
  { value: 'other_social', label: 'Another social network', labelPt: 'Outra rede social' },
  { value: 'other', label: 'Other', labelPt: 'Outro' }
];

const countryOptions = [
  { value: 'brazil', label: 'Brazil', labelPt: 'Brasil' },
  { value: 'united_states', label: 'United States', labelPt: 'Estados Unidos' },
  { value: 'portugal', label: 'Portugal', labelPt: 'Portugal' },
  { value: 'united_kingdom', label: 'United Kingdom', labelPt: 'Reino Unido' },
  { value: 'canada', label: 'Canada', labelPt: 'Canadá' },
  { value: 'germany', label: 'Germany', labelPt: 'Alemanha' },
  { value: 'spain', label: 'Spain', labelPt: 'Espanha' },
  { value: 'france', label: 'France', labelPt: 'França' },
  { value: 'italy', label: 'Italy', labelPt: 'Itália' },
  { value: 'ireland', label: 'Ireland', labelPt: 'Irlanda' },
  { value: 'malta', label: 'Malta', labelPt: 'Malta' },
  { value: 'other', label: 'Other', labelPt: 'Outro' }
];

const successMessage = {
  en: 'Thank you! Your answer helps me understand how my portfolio is reaching people.',
  pt: 'Obrigado! Sua resposta me ajuda a entender melhor como meu portfólio está chegando até as pessoas.'
};

const errorMessage = {
  en: 'I could not save your answer right now. Please try again in a moment.',
  pt: 'Não consegui salvar sua resposta agora. Tente novamente em alguns instantes.'
};

function getCurrentLanguage() {
  return document.body.getAttribute('data-lang') === 'pt' ? 'pt' : 'en';
}

export function DiscoveryForm() {
  const [source, setSource] = useState('');
  const [sourceOther, setSourceOther] = useState('');
  const [country, setCountry] = useState('');
  const [countryOther, setCountryOther] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/discovery-response', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source,
          sourceOther,
          country,
          countryOther,
          pagePath: window.location.pathname,
          browserLanguage: navigator.language
        })
      });

      if (!response.ok) throw new Error('Request failed');

      setSource('');
      setSourceOther('');
      setCountry('');
      setCountryOther('');
      setStatus({ type: 'success', message: successMessage[getCurrentLanguage()] });
    } catch {
      setStatus({ type: 'error', message: errorMessage[getCurrentLanguage()] });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="discovery" className="section discovery-section" data-reveal="section">
      <div className="section-container">
        <SectionHeader number="07" title="Discovery" titlePt="Origem" />

        <div className="discovery-layout">
          <div className="discovery-copy" data-reveal="left">
            <p className="discovery-kicker" data-text-en="Less than 10 seconds" data-text-pt="Leva menos de 10 segundos">
              Less than 10 seconds
            </p>
            <h3 data-text-en="How did you find my portfolio?" data-text-pt="Como você encontrou meu portfólio?">
              How did you find my portfolio?
            </h3>
            <p data-text-en="Your answer helps me understand which channels are bringing people to my work." data-text-pt="Sua resposta me ajuda a entender quais canais estão trazendo pessoas até meu trabalho.">
              Your answer helps me understand which channels are bringing people to my work.
            </p>
          </div>

          <form className="discovery-card" onSubmit={handleSubmit} data-reveal="right">
            <div className="discovery-field">
              <label htmlFor="discovery-source" data-text-en="How did you find this site?" data-text-pt="Como você encontrou este site?">
                How did you find this site?
              </label>
              <select
                id="discovery-source"
                name="source"
                value={source}
                onChange={(event) => setSource(event.target.value)}
                required
                disabled={isSubmitting}
              >
                <option value="" data-text-en="Choose an option" data-text-pt="Escolha uma opcao">
                  Choose an option
                </option>
                {sourceOptions.map((option) => (
                  <option key={option.value} value={option.value} data-text-en={option.label} data-text-pt={option.labelPt}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {source === 'other' && (
              <div className="discovery-field">
                <label htmlFor="discovery-source-other" data-text-en="Want to describe it?" data-text-pt="Quer descrever?">
                  Want to describe it?
                </label>
                <input
                  id="discovery-source-other"
                  name="sourceOther"
                  value={sourceOther}
                  onChange={(event) => setSourceOther(event.target.value)}
                  maxLength={120}
                  disabled={isSubmitting}
                  data-placeholder-en="Example: newsletter, community, another site..."
                  data-placeholder-pt="Exemplo: newsletter, comunidade, outro site..."
                  placeholder="Example: newsletter, community, another site..."
                />
              </div>
            )}

            <div className="discovery-field">
              <label htmlFor="discovery-country" data-text-en="Which country are you accessing from?" data-text-pt="De qual pais voce esta acessando?">
                Which country are you accessing from?
              </label>
              <select
                id="discovery-country"
                name="country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
                required
                disabled={isSubmitting}
              >
                <option value="" data-text-en="Choose a country" data-text-pt="Escolha um pais">
                  Choose a country
                </option>
                {countryOptions.map((option) => (
                  <option key={option.value} value={option.value} data-text-en={option.label} data-text-pt={option.labelPt}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {country === 'other' && (
              <div className="discovery-field">
                <label htmlFor="discovery-country-other" data-text-en="Which country?" data-text-pt="Qual pais?">
                  Which country?
                </label>
                <input
                  id="discovery-country-other"
                  name="countryOther"
                  value={countryOther}
                  onChange={(event) => setCountryOther(event.target.value)}
                  maxLength={120}
                  disabled={isSubmitting}
                  data-placeholder-en="Type your country"
                  data-placeholder-pt="Digite seu país"
                  placeholder="Type your country"
                />
              </div>
            )}

            <button className="btn btn-primary discovery-submit" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
              <span data-text-en={isSubmitting ? 'Sending...' : 'Send answer'} data-text-pt={isSubmitting ? 'Enviando...' : 'Enviar resposta'}>
                {isSubmitting ? 'Sending...' : 'Send answer'}
              </span>
              <i className={isSubmitting ? 'fas fa-circle-notch fa-spin' : 'fas fa-paper-plane'} aria-hidden="true" />
            </button>

            {status && (
              <p className={`discovery-status ${status.type}`} role="status">
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
