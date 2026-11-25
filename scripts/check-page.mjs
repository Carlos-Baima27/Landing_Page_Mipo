import { readFile } from 'node:fs/promises'

const [mainSource, htmlSource, cssSource] = await Promise.all([
  readFile('src/main.ts', 'utf8'),
  readFile('index.html', 'utf8'),
  readFile('src/style.css', 'utf8'),
])

const failures = []

const internalLinks = [...mainSource.matchAll(/href="#([^"]+)"/g)].map((match) => match[1])
const renderedIds = new Set([...mainSource.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]))

for (const target of internalLinks) {
  if (!renderedIds.has(target)) failures.push(`Âncora interna inexistente: #${target}`)
}

const requiredWhatsappMessages = [
  'Olá! Gostaria de solicitar uma entrega avulsa.',
  'Olá! Gostaria de conversar sobre um contrato de entregas para minha empresa.',
  'Olá! Gostaria de consultar uma coleta e entrega de documentos ou encomendas.',
]

for (const message of requiredWhatsappMessages) {
  if (!mainSource.includes(message)) {
    failures.push(`Mensagem de WhatsApp ausente: ${message}`)
  }
}

if (!mainSource.includes('https://wa.me/5547997628214')) {
  failures.push('O número oficial não está configurado em src/main.ts.')
}

if (!mainSource.includes('Se o WhatsApp não abrir, o número de contato é')) {
  failures.push('Fallback textual do WhatsApp não está visível.')
}

if (!/html\s*\{\s*min-width:\s*320px;/s.test(cssSource) || !/body\s*\{\s*min-width:\s*320px;/s.test(cssSource)) {
  failures.push('O layout não registra o requisito mínimo de viewport de 320 px.')
}

if (!cssSource.includes('overflow-x: clip')) {
  failures.push('Não há proteção contra rolagem horizontal no corpo da página.')
}

if (!htmlSource.includes('<html lang="pt-BR">')) {
  failures.push('O idioma da página não está definido como pt-BR.')
}

if (failures.length) {
  console.error('Falhas nas verificações da página:')
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

console.log('Links internos, CTAs do WhatsApp, fallback e requisitos mínimos de 320 px estão configurados.')
