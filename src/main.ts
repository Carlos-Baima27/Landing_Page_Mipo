import './style.css'

const whatsappMessage = encodeURIComponent('Olá! Gostaria de cotar uma entrega com a Mipo.')
const whatsappUrl = `https://wa.me/5547997628214?text=${whatsappMessage}`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="site-header">
    <a class="site-brand" href="#inicio">Mipo Express</a>
    <nav aria-label="Navegação principal">
      <a href="#servicos">Serviços</a>
      <a href="#cobertura">Cobertura</a>
      <a href="#faq">Perguntas frequentes</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>

  <main>
    <section id="inicio" aria-labelledby="titulo-principal">
      <p>Entregas expressas em Balneário Camboriú e região.</p>
      <h1 id="titulo-principal">Conte com a Mipo para suas entregas</h1>
      <p>Serviço de motoboy para pessoas e empresas.</p>
      <a href="${whatsappUrl}">Pedir motoboy pelo WhatsApp</a>
    </section>

    <section id="servicos" aria-labelledby="titulo-servicos">
      <h2 id="titulo-servicos">Serviços</h2>
      <p>Entregas para pessoas e empresas em Balneário Camboriú e Camboriú.</p>
    </section>

    <section id="cobertura" aria-labelledby="titulo-cobertura">
      <h2 id="titulo-cobertura">Área de cobertura</h2>
      <p>Balneário Camboriú e Camboriú, Santa Catarina.</p>
    </section>

    <section id="faq" aria-labelledby="titulo-faq">
      <h2 id="titulo-faq">Perguntas frequentes</h2>
      <p>Fale com a Mipo para tirar dúvidas sobre as entregas.</p>
    </section>

    <section id="contato" aria-labelledby="titulo-contato">
      <h2 id="titulo-contato">Entre em contato</h2>
      <p>Consulte a Mipo sobre sua necessidade de entrega pelo WhatsApp.</p>
      <p>Se o WhatsApp não abrir, o número de contato é <span>+55 47 99762-8214</span>.</p>
      <a href="${whatsappUrl}">Conversar com a Mipo pelo WhatsApp</a>
    </section>
  </main>
`
