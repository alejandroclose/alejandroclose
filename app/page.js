export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#" aria-label="Alejandro Close">
          <svg width="42" height="26" viewBox="0 0 42 26" fill="none" aria-hidden="true">
            <path d="M1 24L8.5 2L16 24" stroke="#0e0d0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 16H13" stroke="#0e0d0b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M37.7 8A10 10 0 1 0 37.7 18" stroke="#c8853a" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>
        <ul className="nav-links">
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
        <a className="nav-cta" href="https://cal.com/alejandroclose/30min?layout=mobile&overlayCalendar=true" target="_blank" rel="noopener noreferrer">Hablemos</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <p className="eyebrow">Implementación de IA</p>
          <h1>Haz más sin aumentar equipo.</h1>
          <p className="hero-desc">
            La IA puede transformar cómo trabaja tu empresa. Yo me encargo de que pase.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="https://cal.com/alejandroclose/30min?layout=mobile&overlayCalendar=true" target="_blank" rel="noopener noreferrer">
              Agenda una llamada sin coste
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="btn-text" href="#sobre-mi">¿Quién soy? →</a>
          </div>
          <p className="hero-note">30 minutos · Sin compromiso · Sin coste</p>
        </div>

        <div className="hero-right">
          <p className="panel-label">Trayectoria</p>
          <div className="stats">
            <div className="stat">
              <div className="stat-num">13</div>
              <p className="stat-label">años construyendo equipos y operaciones desde cero</p>
            </div>
            <div className="stat">
              <div className="stat-num">+30<sup>%</sup></div>
              <p className="stat-label">conversión en ventas internas construida desde cero</p>
            </div>
            <div className="stat">
              <div className="stat-num">+50<sup>%</sup></div>
              <p className="stat-label">crecimiento del canal de ventas en 12 meses</p>
            </div>
          </div>
          <div className="panel-foot">
            <strong>Ingeniería Civil · IESE · Ironhack · Python</strong><br />
            Técnico y de negocio. Los dos a la vez.
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>Automatización de procesos</span>
          <span>Diagnóstico sin tecnicismos</span>
          <span>Implementación con y sin código</span>
          <span>CRM y herramientas de ventas</span>
          <span>Integraciones a medida</span>
          <span>Automatización de procesos</span>
          <span>Diagnóstico sin tecnicismos</span>
          <span>Implementación con y sin código</span>
          <span>CRM y herramientas de ventas</span>
          <span>Integraciones a medida</span>
        </div>
      </div>

      {/* PROBLEMA */}
      <section className="problem">
        <div className="problem-grid">
          <h2>
            La IA tiene la respuesta.<br />El <em>problema</em> es llegar<br />hasta ella.
          </h2>
          <div className="problem-right">
            <p>
              Herramientas como Claude o ChatGPT pueden diseñar la solución perfecta en minutos.
              Pero cuando la respuesta incluye código, APIs o integraciones, el proyecto se congela.
            </p>
            <p>
              <strong>Y muchas veces el bloqueo es anterior:</strong> no saber qué proceso
              automatizar primero, ni cómo priorizar entre todas las ideas. Empezar por el sitio
              equivocado también paraliza.
            </p>
            <p>
              Trabajo en los dos momentos, antes y después, para que nada se quede a medias.
            </p>
            <ul className="blockers">
              <li>
                <span className="bl-n">01</span>
                <span className="bl-t">
                  <strong>No sé qué automatizar primero.</strong> Muchas ideas, poca claridad sobre
                  dónde está el mayor retorno.
                </span>
              </li>
              <li>
                <span className="bl-n">02</span>
                <span className="bl-t">
                  <strong>La IA da la solución pero no puedo implementarla.</strong> El código y las
                  integraciones superan a mi equipo.
                </span>
              </li>
              <li>
                <span className="bl-n">03</span>
                <span className="bl-t">
                  <strong>No quiero depender de un proveedor para siempre.</strong> Necesito que mi
                  equipo lo pueda gestionar después.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="process" id="proceso">
        <div className="section-header">
          <h2>
            De idea bloqueada<br />a proceso <em>funcionando</em>
          </h2>
          <p>
            Sin proyectos interminables ni equipos de ingeniería. Resultados visibles desde las
            primeras semanas.
          </p>
        </div>
        <div className="steps-grid">
          <div className="step">
            <span className="step-n">01</span>
            <h3>Diagnóstico</h3>
            <p>
              En una sesión de 30–60 minutos mapeamos los procesos con mayor potencial de
              automatización en tu empresa. Sin código, sin tecnicismos, solo negocio.
            </p>
            <span className="step-badge">30–60 min · Sin coste</span>
          </div>
          <div className="step">
            <span className="step-n">02</span>
            <h3>Prototipo rápido</h3>
            <p>
              En 1–2 semanas construyo una primera versión funcional. Uso las herramientas que mejor
              encajen (Make, n8n, Claude API o código a medida) sin atarte a ninguna plataforma.
            </p>
            <span className="step-badge">1–2 semanas</span>
          </div>
          <div className="step">
            <span className="step-n">03</span>
            <h3>Entrega y traspaso</h3>
            <p>
              Refinamos hasta que funciona en producción. Formo a tu equipo para que lo gestione, o
              continuamos como colaboración mensual si prefieres que me ocupe yo.
            </p>
            <span className="step-badge">Formación incluida</span>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="about" id="sobre-mi">
        <div className="about-left">
          <span className="section-tag">Sobre mí</span>
          <h2>
            Ingeniero que habla<br />de negocio. Operador<br />que sabe <em>construir.</em>
          </h2>
          <p>
            Llevo más de 13 años en Holaluz, la green tech líder en España, donde he
            construido desde cero equipos de ventas, herramientas de CRM, sistemas de facturación y
            proyectos de I+D en carga inteligente de vehículos eléctricos.
          </p>
          <p>
            No soy un consultor que habla de IA desde fuera.{' '}
            <strong>
              He vivido exactamente los mismos problemas operativos que tienes ahora
            </strong>{' '}
            procesos manuales, equipos pequeños, presión para hacer más con menos.
          </p>
          <p>
            Lo que me diferencia: puedo hablar de negocio con el CEO el lunes y deployar la
            automatización el viernes.
          </p>
        </div>
        <div className="about-right">
          <div className="cred">
            <p className="cred-cat">Formación técnica</p>
            <p className="cred-val">
              <strong>Ingeniería Civil · MERN Stack (Ironhack)</strong><br />
              Python &amp; Data Science · Smart Grid · Eficiencia Energética
            </p>
          </div>
          <div className="cred">
            <p className="cred-cat">Formación de negocio</p>
            <p className="cred-val">
              <strong>IESE Business School</strong> · Business &amp; Management<br />
              Marketing Digital · Investor Relations
            </p>
          </div>
          <div className="cred">
            <p className="cred-cat">Resultados reales</p>
            <p className="cred-val">
              <strong>+30% conversión inside sales · +50% canal de ventas</strong><br />
              ERP/CRM construido desde cero · R&amp;D en V2X y carga solar
            </p>
          </div>
          <div className="cred">
            <p className="cred-cat">Barcelona · Disponible remotamente</p>
            <p className="cred-val">Español · English · Català</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contacto">
        <span className="section-tag">Empecemos</span>
        <h2>
          30 minutos.
          <em>Sin compromiso.</em>
        </h2>
        <p>
          Una conversación honesta sobre qué se puede automatizar en tu empresa y si puedo ayudarte.
          Sin venta, sin presión.
        </p>
        <div className="cta-actions">
          <a className="btn-primary" href="mailto:hola@alejandroclose.com">
            Escríbeme un email
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            className="btn-text"
            href="https://linkedin.com/in/alejandroclose"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver LinkedIn →
          </a>
        </div>
        <p className="cta-note">hola@alejandroclose.com · linkedin.com/in/alejandroclose</p>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Alejandro Close · Barcelona</p>
        <div className="ft-links">
          <a href="mailto:hola@alejandroclose.com">Email</a>
          <a
            href="https://linkedin.com/in/alejandroclose"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </>
  )
}
