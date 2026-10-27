import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import companyImage from './assets/empresa.jpg'
import companyLogo from './assets/logomipo.jpg'

const whatsappMessage = encodeURIComponent('Olá! Gostaria de saber o preço de uma entrega com o Mipo.')
const whatsappUrl = `https://wa.me/5547997628214?text=${whatsappMessage}`
const googleMapsUrl = 'https://www.google.com/maps/place/Mipo+Express/@-26.992972,-48.6320208,17z/data=!3m1!4b1!4m6!3m5!1s0x94d8b79f56f3262b:0x423564aaae90b84b!8m2!3d-26.992972!4d-48.6320208!16s%2Fg%2F11xzqwt14g'
const instagramUrl = 'https://www.instagram.com/mipo_express/'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="site-brand" href="#inicio" aria-label="O Mipo Express - início">
      <img src="${companyLogo}" alt="O Mipo Express" />
    </a>
    <nav aria-label="Navegação principal">
      <a href="#servicos">Serviços</a>
      <a href="#cobertura">Cobertura</a>
      <a href="#faq">Perguntas frequentes</a>
      <a href="${whatsappUrl}">
        <i class="bi bi-whatsapp icon" aria-hidden="true"></i>
        Fale pelo WhatsApp
      </a>
    </nav>
  </header>

  <main>
    <section id="inicio" aria-labelledby="titulo-principal">
      <div class="hero-copy">
        <p>Entregas expressas em Balneário Camboriú e Camboriú.</p>
        <h1 id="titulo-principal">Sua entrega, com a agilidade do Mipo</h1>
        <p>Motoboy para entregas do dia a dia, com atendimento para pessoas e empresas.</p>
        <a class="whatsapp-cta" href="${whatsappUrl}">
          <i class="bi bi-whatsapp icon" aria-hidden="true"></i>
          Pedir motoboy pelo WhatsApp
        </a>
      </div>
      <figure class="hero-illustration">
        <img
          src="${companyImage}"
          alt="Arte promocional do Mipo Express com uma motocicleta de entrega e um baú."
        />
      </figure>
    </section>

    <section id="servicos" aria-labelledby="titulo-servicos">
      <h2 id="titulo-servicos">Serviços</h2>
      <p>Uma solução de motoboy para necessidades pontuais ou para a rotina da sua empresa.</p>
      <div class="service-grid">
        <article class="service-card">
          <h3>
            <i class="bi bi-box-seam icon service-icon" aria-hidden="true"></i>
            Entregas avulsas
          </h3>
          <p>Solicite uma entrega expressa quando precisar, para sua casa ou negócio.</p>
          <a href="${whatsappUrl}">Consultar uma entrega</a>
        </article>
        <article class="service-card">
          <h3>
            <i class="bi bi-building icon service-icon" aria-hidden="true"></i>
            Contratos para empresas
          </h3>
          <p>Converse com o Mipo sobre uma solução fixa ou mensal para as entregas da sua empresa.</p>
          <a href="${whatsappUrl}">Conversar sobre contrato</a>
        </article>
        <article class="service-card">
          <h3>
            <i class="bi bi-file-earmark-text icon service-icon" aria-hidden="true"></i>
            Documentos e encomendas
          </h3>
          <p>Coleta e entrega de documentos ou encomendas na área de cobertura confirmada.</p>
          <a href="${whatsappUrl}">Consultar coleta e entrega</a>
        </article>
      </div>
      <div class="benefits" aria-labelledby="titulo-diferenciais">
        <h3 id="titulo-diferenciais">O cuidado do Mipo em cada pedido</h3>
        <ul>
          <li>
            <i class="bi bi-clock-history icon benefit-icon" aria-hidden="true"></i>
            <span><strong>Agilidade no atendimento</strong> para entender sua necessidade.</span>
          </li>
          <li>
            <i class="bi bi-shield-check icon benefit-icon" aria-hidden="true"></i>
            <span><strong>Cuidado e segurança</strong> no manuseio e na entrega.</span>
          </li>
          <li>
            <i class="bi bi-geo-alt icon benefit-icon" aria-hidden="true"></i>
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
            <i class="bi bi-geo-alt icon detail-icon" aria-hidden="true"></i>
            Cidades atendidas
          </dt>
          <dd>Balneário Camboriú e Camboriú</dd>
        </div>
        <div>
          <dt>
            <i class="bi bi-clock icon detail-icon" aria-hidden="true"></i>
            Horário
          </dt>
          <dd>Atendimento 24 horas, todos os dias</dd>
        </div>
        <div>
          <dt>
            <i class="bi bi-credit-card icon detail-icon" aria-hidden="true"></i>
            Formas de pagamento
          </dt>
          <dd>Dinheiro, Pix e Cartão</dd>
        </div>
        <div>
          <dt>
            <i class="bi bi-geo-alt icon detail-icon" aria-hidden="true"></i>
            Endereço
          </dt>
          <dd>
            R. 1950, 321 - Centro, Balneário Camboriú - SC, 88330-470<br />
            <a class="map-link" href="${googleMapsUrl}" target="_blank" rel="noopener noreferrer">
              Ver no Google Maps
              <i class="bi bi-box-arrow-up-right icon external-icon" aria-hidden="true"></i>
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
          <p>Entre em contato pelo <a href="${whatsappUrl}">WhatsApp do Mipo</a> para consultar uma entrega.</p>
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
          <p>Consulte o Mipo pelo <a href="${whatsappUrl}">WhatsApp</a>.</p>
        </details>
      </div>
    </section>

    <section id="contato" aria-labelledby="titulo-contato">
      <h2 id="titulo-contato">Entre em contato</h2>
      <p>Consulte o Mipo sobre sua necessidade de entrega pelo WhatsApp.</p>
      <p>Se o WhatsApp não abrir, o número de contato é <span>+55 47 99762-8214</span>.</p>
      <a class="contact-cta whatsapp-cta" href="${whatsappUrl}">
        <i class="bi bi-whatsapp icon" aria-hidden="true"></i>
        Conversar com o Mipo pelo WhatsApp
      </a>
    </section>
  </main>

  <footer class="site-footer" aria-labelledby="titulo-rodape">
    <div class="footer-details">
      <div>
        <h2 id="titulo-rodape" class="footer-brand">
          <img src="${companyLogo}" alt="O Mipo Express" />
        </h2>
        <address>R. 1950, 321 - Centro, Balneário Camboriú - SC, 88330-470</address>
      </div>
      <div>
        <h3>
          <i class="bi bi-clock icon footer-icon" aria-hidden="true"></i>
          Atendimento
        </h3>
        <p>24 horas, todos os dias</p>
      </div>
      <div>
        <h3>
          <i class="bi bi-credit-card icon footer-icon" aria-hidden="true"></i>
          Formas de pagamento
        </h3>
        <p>Dinheiro, Pix e Cartão</p>
      </div>
      <div>
        <h3>Contato e redes sociais</h3>
        <p>
          <a class="footer-link-with-icon" href="${whatsappUrl}">
            <i class="bi bi-whatsapp icon social-icon" aria-hidden="true"></i>
            Fale com o Mipo
          </a>
        </p>
        <p>Número: <span>+55 47 99762-8214</span></p>
        <p>
          <a class="footer-link-with-icon" href="${instagramUrl}" target="_blank" rel="noopener noreferrer">
            <i class="bi bi-instagram icon social-icon" aria-hidden="true"></i>
            Instagram: @mipo_express
          </a>
        </p>
      </div>
    </div>
  </footer>
`
