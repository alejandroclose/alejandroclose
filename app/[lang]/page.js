import { notFound } from 'next/navigation'
import { getTranslations } from '../translations'

const validLangs = ['es', 'ca', 'en']

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'ca' }, { lang: 'en' }]
}

function LangSwitcher({ lang }) {
  const langs = [
    { code: 'es', label: 'ES' },
    { code: 'ca', label: 'CA' },
    { code: 'en', label: 'EN' },
  ]
  return (
    <div className="lang-switcher">
      {langs.map(({ code, label }) => (
        <a key={code} href={`/${code}`} className={lang === code ? 'active' : ''}>
          {label}
        </a>
      ))}
    </div>
  )
}

export default function Home({ params }) {
  const { lang } = params
  if (!validLangs.includes(lang)) notFound()
  const t = getTranslations(lang)

  const tickerItems = [...t.ticker, ...t.ticker]

  return (
    <>
      {/* NAV */}
      <nav>
        <a className="nav-logo" href={`/${lang}`} aria-label="Alejandro Close">
          <svg width="42" height="26" viewBox="0 0 42 26" fill="none" aria-hidden="true">
            <path d="M1 24L8.5 2L16 24" stroke="#0e0d0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 16H13" stroke="#0e0d0b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M37.7 8A10 10 0 1 0 37.7 18" stroke="#c8853a" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>
        <ul className="nav-links">
          <li><a href="#proceso">{t.nav.proceso}</a></li>
          <li><a href="#sobre-mi">{t.nav.sobreMi}</a></li>
          <li><a href="#contacto">{t.nav.contacto}</a></li>
        </ul>
        <div className="nav-right">
          <LangSwitcher lang={lang} />
          <a className="nav-cta" href="https://cal.com/alejandroclose/30min?layout=mobile&overlayCalendar=true" target="_blank" rel="noopener noreferrer">
            {t.nav.hablemos}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1>{t.hero.h1}</h1>
          <p className="hero-desc">{t.hero.desc}</p>
          <div className="hero-actions">
            <a className="btn-primary" href="https://cal.com/alejandroclose/30min?layout=mobile&overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              {t.hero.cta}
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a className="btn-text" href="#sobre-mi">{t.hero.ctaSecondary}</a>
          </div>
          <p className="hero-note">{t.hero.note}</p>
        </div>

        <div className="hero-right">
          <p className="panel-label">{t.stats.label}</p>
          <div className="stats">
            <div className="stat">
              <div className="stat-num">{t.stats.s1num}</div>
              <p className="stat-label">{t.stats.s1label}</p>
            </div>
            <div className="stat">
              <div className="stat-num">{t.stats.s2num}<sup>{t.stats.s2sup}</sup></div>
              <p className="stat-label">{t.stats.s2label}</p>
            </div>
            <div className="stat">
              <div className="stat-num">{t.stats.s3num}<sup>{t.stats.s3sup}</sup></div>
              <p className="stat-label">{t.stats.s3label}</p>
            </div>
          </div>
          <div className="panel-foot">
            <strong>{t.stats.foot1}</strong><br />
            {t.stats.foot2}
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {tickerItems.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* PROBLEMA */}
      <section className="problem">
        <div className="problem-grid">
          <h2>
            {t.problem.h2[0]}<br />
            {t.problem.h2[1]}<em>{t.problem.h2[2]}</em>{t.problem.h2[3]}<br />
            {t.problem.h2[4]}
          </h2>
          <div className="problem-right">
            <p>{t.problem.p1}</p>
            <p><strong>{t.problem.p2strong}</strong>{t.problem.p2}</p>
            <p>{t.problem.p3}</p>
            <ul className="blockers">
              {t.problem.blockers.map((b, i) => (
                <li key={i}>
                  <span className="bl-n">0{i + 1}</span>
                  <span className="bl-t"><strong>{b.strong}</strong>{b.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="process" id="proceso">
        <div className="section-header">
          <h2>
            {t.process.h2[0]}<br />
            {t.process.h2[1]}<em>{t.process.h2[2]}</em>
          </h2>
          <p>{t.process.subtitle}</p>
        </div>
        <div className="steps-grid">
          {t.process.steps.map((step) => (
            <div className="step" key={step.n}>
              <span className="step-n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <span className="step-badge">{step.badge}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="about" id="sobre-mi">
        <div className="about-left">
          <span className="section-tag">{t.about.tag}</span>
          <h2>
            {t.about.h2[0]}<br />
            {t.about.h2[1]}<br />
            {t.about.h2[2]}<em>{t.about.h2[3]}</em>
          </h2>
          <p>{t.about.p1}</p>
          <p>
            {t.about.p2a}{' '}
            <strong>{t.about.p2b}</strong>{' '}
            {t.about.p2c}
          </p>
          <p>{t.about.p3}</p>
        </div>
        <div className="about-right">
          {t.about.creds.map((cred, i) => (
            <div className="cred" key={i}>
              <p className="cred-cat">{cred.cat}</p>
              <p className="cred-val">
                {cred.val1 && <strong>{cred.val1}</strong>}
                {cred.val1 && cred.val2 && <br />}
                {cred.val2}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contacto">
        <span className="section-tag">{t.cta.tag}</span>
        <h2>
          {t.cta.h2[0]}
          <em>{t.cta.h2[1]}</em>
        </h2>
        <p>{t.cta.p}</p>
        <div className="cta-actions">
          <a className="btn-primary" href="mailto:hola@alejandroclose.com">
            {t.cta.cta}
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a className="btn-text" href="https://linkedin.com/in/alejandroclose" target="_blank" rel="noopener noreferrer">
            {t.cta.linkedin}
          </a>
        </div>
        <p className="cta-note">{t.cta.note}</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>{t.footer.copy}</p>
        <div className="ft-links">
          <a href="mailto:hola@alejandroclose.com">{t.footer.email}</a>
          <a href="https://linkedin.com/in/alejandroclose" target="_blank" rel="noopener noreferrer">
            {t.footer.linkedin}
          </a>
        </div>
      </footer>
    </>
  )
}
