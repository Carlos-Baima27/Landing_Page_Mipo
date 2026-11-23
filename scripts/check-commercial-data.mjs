import { readFile } from 'node:fs/promises'

const files = ['src/main.ts', 'index.html', '.docs/prd.md']
const contents = await Promise.all(files.map((file) => readFile(file, 'utf8')))
const combined = contents.join('\n')

const required = [
  'Todos os dias, 24h',
  'Balneário Camboriú e região',
  'Agilidade na entrega',
  'Cuidado e segurança no manuseio e na entrega',
  '+55 47 99762-8214',
  'R. 1950, 321 - Centro, Balneário Camboriú - SC, 88330-470',
]

const forbidden = [
  'das 07h às 00h',
  'Atendimento 24 horas',
  'Balneário Camboriú e Região',
  'Balneário Camboriú e Camboriú',
  'Agilidade no atendimento',
]

const missing = required.filter((value) => !combined.includes(value))
const stale = forbidden.filter((value) => combined.includes(value))

if (missing.length || stale.length) {
  if (missing.length) console.error(`Dados confirmados ausentes: ${missing.join(', ')}`)
  if (stale.length) console.error(`Dados antigos encontrados: ${stale.join(', ')}`)
  process.exit(1)
}

console.log('Dados comerciais críticos estão sincronizados.')
