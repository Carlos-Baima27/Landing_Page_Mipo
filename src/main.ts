import './style.css'
import companyImage from './assets/empresa.jpg'
import companyLogo from './assets/logomipo.jpg'

const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber o preço de uma entrega com a Mipo.')
const whatsappUrl = `https://wa.me/5547997628214?text=${whatsappMessage}`
const googleMapsUrl = 'https://www.google.com/maps/place/Mipo+Express/@-26.992972,-48.6320208,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8b79f56f3262b:0x423564aaae90b84b!8m2!3d-26.992972!4d-48.6320208!16s%2Fg%2F11xzqwt14g'
const instagramUrl = 'https://www.instagram.com/mipo_express/'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="site-brand" href="#inicio" aria-label="Mipo Express - início">
      <img src="${companyLogo}" alt="Mipo Express" />
    </a>
    <nav aria-label="Navegação principal">
      <a href="#servicos">Serviços</a>
      <a href="#cobertura">Cobertura</a>
      <a href="#faq">Perguntas frequentes</a>
      <a href="${whatsappUrl}">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.3A8.4 8.4 0 1 1 21 11.5Z" />
          <path d="M9 9a.8.8 0 0 0-1.2.5c-.3 1 .5 2.4 1.7 3.6s2.6 2 3.6 1.7a.8.8 0 0 0 .5-1.2l-.7-.9a.8.8 0 0 0-1-.2l-.5.3a7 7 0 0 1-1.6-1.6l.3-.5a.8.8 0 0 0-.2-1L9 9Z" />
        </svg>
        Fale pelo WhatsApp
      </a>
    </nav>
  </header>

  <main>
    <section id="inicio" aria-labelledby="titulo-principal">
      <div class="hero-copy">
        <p>Entregas expressas em Balneário Camboriú e Camboriú.</p>
        <h1 id="titulo-principal">Sua entrega, com a agilidade da Mipo</h1>
        <p>Motoboy para entregas do dia a dia, com atendimento para pessoas e empresas.</p>
        <a class="whatsapp-cta" href="${whatsappUrl}">
          <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.3A8.4 8.4 0 1 1 21 11.5Z" />
            <path d="M9 9a.8.8 0 0 0-1.2.5c-.3 1 .5 2.4 1.7 3.6s2.6 2 3.6 1.7a.8.8 0 0 0 .5-1.2l-.7-.9a.8.8 0 0 0-1-.2l-.5.3a7 7 0 0 1-1.6-1.6l.3-.5a.8.8 0 0 0-.2-1L9 9Z" />
          </svg>
          Pedir motoboy pelo WhatsApp
        </a>
      </div>
      <figure class="hero-illustration">
        <img
          src="${companyImage}"
          alt="Arte promocional da Mipo Express com uma motocicleta de entrega e um baú."
        />
      </figure>
    </section>

    <section id="servicos" aria-labelledby="titulo-servicos">
      <h2 id="titulo-servicos">Serviços</h2>
      <p>Uma solução de motoboy para necessidades pontuais ou para a rotina da sua empresa.</p>
      <div class="service-grid">
        <article class="service-card">
          <h3>
            <svg class="icon service-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M3 7h11v11H3zM14 11h4l3 3v4h-7z" />
              <circle cx="7.5" cy="18" r="2" />
              <circle cx="17.5" cy="18" r="2" />
              <path d="M6 10h5M6 13h3" />
            </svg>
            Entregas avulsas
          </h3>
          <p>Solicite uma entrega expressa quando precisar, para sua casa ou negócio.</p>
          <a href="${whatsappUrl}">Consultar uma entrega</a>
        </article>
        <article class="service-card">
          <h3>
            <svg class="icon service-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16M2 21h20M9 21v-4h6v4M8 7h2M14 7h2M8 11h2M14 11h2" />
            </svg>
            Contratos para empresas
          </h3>
          <p>Converse com a Mipo sobre uma solução fixa ou mensal para as entregas da sua empresa.</p>
          <a href="${whatsappUrl}">Conversar sobre contrato</a>
        </article>
        <article class="service-card">
          <h3>
            <svg class="icon service-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6M8 13h8M8 17h8" />
            </svg>
            Documentos e encomendas
          </h3>
          <p>Coleta e entrega de documentos ou encomendas na área de cobertura confirmada.</p>
          <a href="${whatsappUrl}">Consultar coleta e entrega</a>
        </article>
      </div>
      <div class="benefits" aria-labelledby="titulo-diferenciais">
        <h3 id="titulo-diferenciais">O cuidado da Mipo em cada pedido</h3>
        <ul>
          <li>
            <svg class="icon benefit-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
            </svg>
            <span><strong>Agilidade no atendimento</strong> para entender sua necessidade.</span>
          </li>
          <li>
            <svg class="icon benefit-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" />
            </svg>
            <span><strong>Cuidado e segurança</strong> no manuseio e na entrega.</span>
          </li>
          <li>
            <svg class="icon benefit-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" />
            </svg>
            <span><strong>Atendimento regional</strong> em Balneário Camboriú e Camboriú.</span>
          </li>
        </ul>
      </div>
    </section>

    <section id="cobertura" aria-labelledby="titulo-cobertura">
      <h2 id="titulo-cobertura">Cobertura e atendimento</h2>
      <p>Atendimento confirmado em Balneário Camboriú e Camboriú, Santa Catarina.</p>
      <dl class="operations-grid">
        <div>
          <dt>
            <svg class="icon detail-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" />
            </svg>
            Cidades atendidas
          </dt>
          <dd>Balneário Camboriú e Camboriú</dd>
        </div>
        <div>
          <dt>
            <svg class="icon detail-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
            </svg>
            Horário
          </dt>
          <dd>Atendimento 24 horas, todos os dias</dd>
        </div>
        <div>
          <dt>
            <svg class="icon detail-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" />
            </svg>
            Formas de pagamento
          </dt>
          <dd>Dinheiro, Pix e Cartão</dd>
        </div>
        <div>
          <dt>
            <svg class="icon detail-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" />
            </svg>
            Endereço
          </dt>
          <dd>
            R. 1950, 321 - Centro, Balneário Camboriú - SC, 88330-470<br />
            <a class="map-link" href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer">
              Ver no Google Maps
              <svg class="icon external-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M14 3h7v7M10 14 21 3M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
              </svg>
            </a>
          </dd>
        </div>
      </dl>
    </section>

    <section id="faq" aria-labelledby="titulo-faq">
      <h2 id="titulo-faq">Perguntas frequentes</h2>
      <div class="faq-list">
        <details>
          <summary>Como solicito uma entrega?</summary>
          <p>Entre em contato pelo <a href="${whatsappUrl}">WhatsApp da Mipo</a> para consultar uma entrega.</p>
        </details>
        <details>
          <summary>Quais cidades são atendidas?</summary>
          <p>A cobertura confirmada é Balneário Camboriú e Camboriú, em Santa Catarina.</p>
        </details>
        <details>
          <summary>Quais formas de pagamento são aceitas?</summary>
          <p>Dinheiro, Pix e Cartão.</p>
        </details>
        <details>
          <summary>Ficou com outra dúvida?</summary>
          <p>Consulte a Mipo pelo <a href="${whatsappUrl}">WhatsApp</a>.</p>
        </details>
      </div>
    </section>

    <section id="contato" aria-labelledby="titulo-contato">
      <h2 id="titulo-contato">Entre em contato</h2>
      <p>Consulte a Mipo sobre sua necessidade de entrega pelo WhatsApp.</p>
      <p>Se o WhatsApp não abrir, o número de contato é <span>+55 47 99762-8214</span>.</p>
      <a class="contact-cta whatsapp-cta" href="${whatsappUrl}">
        <svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.3A8.4 8.4 0 1 1 21 11.5Z" />
          <path d="M9 9a.8.8 0 0 0-1.2.5c-.3 1 .5 2.4 1.7 3.6s2.6 2 3.6 1.7a.8.8 0 0 0 .5-1.2l-.7-.9a.8.8 0 0 0-1-.2l-.5.3a7 7 0 0 1-1.6-1.6l.3-.5a.8.8 0 0 0-.2-1L9 9Z" />
        </svg>
        Conversar com a Mipo pelo WhatsApp
      </a>
    </section>
  </main>

  <footer class="site-footer" aria-labelledby="titulo-rodape">
    <div class="footer-details">
      <div>
        <h2 id="titulo-rodape" class="footer-brand">
          <img src="${companyLogo}" alt="Mipo Express" />
        </h2>
        <address>R. 1950, 321 - Centro, Balneário Camboriú - SC, 88330-470</address>
      </div>
      <div>
        <h3>
          <svg class="icon footer-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
          </svg>
          Atendimento
        </h3>
        <p>24 horas, todos os dias</p>
      </div>
      <div>
        <h3>
          <svg class="icon footer-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20M6 15h4" />
          </svg>
          Formas de pagamento
        </h3>
        <p>Dinheiro, Pix e Cartão</p>
      </div>
      <div>
        <h3>Contato e redes sociais</h3>
        <p>
          <a class="footer-link-with-icon" href="${whatsappUrl}">
            <svg class="icon social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20l1.2-5.3A8.4 8.4 0 1 1 21 11.5Z" />
              <path d="M9 9a.8.8 0 0 0-1.2.5c-.3 1 .5 2.4 1.7 3.6s2.6 2 3.6 1.7a.8.8 0 0 0 .5-1.2l-.7-.9a.8.8 0 0 0-1-.2l-.5.3a7 7 0 0 1-1.6-1.6l.3-.5a.8.8 0 0 0-.2-1L9 9Z" />
            </svg>
            Fale com a Mipo
          </a>
        </p>
        <p>Número: <span>+55 47 99762-8214</span></p>
        <p>
          <a class="footer-link-with-icon" href="${instagramUrl}" target="_blank" rel="noopener noreferrer">
            <svg class="icon social-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <path d="M17.5 6.5h.01" />
            </svg>
            Instagram: @mipo_express
          </a>
        </p>
      </div>
    </div>
  </footer>
`
