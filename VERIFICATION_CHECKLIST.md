# Lista de Verificação e Auditoria Técnica (VERIFICATION CHECKLIST)

Este documento centraliza os itens de verificação técnica, regulatória e de conteúdo para o lançamento e continuidade operacional do site **Dario Eletricidade Industrial**.

---

## 📋 Itens Críticos de Verificação (TODO_CONFIRMAR)

### 1. Segurança e Conformidade Normativa (NR-10 e NR-35)
> **Origem no Código (`index.html`):** `<!-- TODO_CONFIRMAR: equipe capacitada em NR-10 e NR-35 e forma correta de apresentação. -->`

- [ ] **Certificações Ativas:** Confirmar que todos os eletricistas e engenheiros parceiros que atuam em campo possuem as certificações **NR-10 (Segurança em Instalações e Serviços em Eletricidade)** e **NR-35 (Trabalho em Altura)** devidamente ativas e válidas.
- [ ] **Laudos e ART/TRT:** Validar se a empresa está autorizada a emitir laudos técnicos oficiais e anotações de responsabilidade técnica (ART/TRT) para as adequações executadas, garantindo respaldo jurídico ao cliente industrial B2B.
- [ ] **Aviso Legal:** Garantir que as referências a essas normas nos textos de FAQ e LGPD atendam exatamente aos critérios legais de publicidade comercial e responsabilidade técnica.

---

## 📱 Dados de Contato e Canais de Comunicação

### 2. Integração com WhatsApp e Formulário Técnico
- [ ] **Número de Telefone:** Confirmar se o número `(19) 99786-9520` (configurado como `5519997869520` na API do WhatsApp) é o canal corporativo oficial definitivo.
- [ ] **Mensagens Pré-definidas:** Testar o fluxo de envio a partir dos botões do site e do formulário técnico de contato para garantir que as mensagens formatadas em URL cheguem perfeitamente estruturadas no aplicativo de destino.
- [ ] **Envio do Formulário:** Validar se os campos (Nome, Empresa, Cidade, Equipamento/Serviço, Mensagem) são capturados e transmitidos com formatação limpa e legível pelo usuário final.

---

## 📍 Cobertura Regional e Atendimento

### 3. Logística de Deslocamento Técnico
- [ ] **Cidades Atendidas:** Confirmar a lista de cobertura direta e sob consulta:
  - **Base Principal:** Indaiatuba/SP
  - **Atendimento Direto/Frequente:** Campinas/SP
  - **Sob Consulta / Projetos:** Salto, Itu, Jundiaí, Sorocaba e arredores.
- [ ] **Atendimento Emergencial:** Confirmar se há escala técnica contratual para atendimentos em turnos adicionais (noturnos/finais de semana) para indústrias com processos de manufatura contínua.

---

## ⚖️ Conformidade Legal e LGPD

### 4. Políticas do Rodapé (Footer)
- [ ] **Política de Privacidade:** Revisar os textos do modal de privacidade do rodapé para garantir total alinhamento com a **Lei Geral de Proteção de Dados (LGPD)**.
- [ ] **Termos de Uso:** Validar a cláusula de responsabilidade técnica, deixando explícito que as informações do site são de caráter informativo e orçamentos dependem de análise local ou dados técnicos detalhados.
- [ ] **Dados de Navegação:** Certificar-se de que não há coleta excessiva ou cookies sem o consentimento implícito ou explícito nas áreas de interação do formulário.

---

## 🎨 Design e Performance

### 5. Carregamento de Recursos e CDN
- [ ] **Ícones Lucide:** Verificar se todos os ícones Lucide declarados no HTML (ex: `map-pin`, `globe`, `activity`, `alert-triangle`, `check`, `help-circle`, `message-circle`, `x`) estão sendo renderizados corretamente via CDN e `lucide.createIcons()`.
- [ ] **Fontes Google:** Confirmar o carregamento assíncrono das famílias de fontes do Google Fonts no cabeçalho do documento, evitando impactos negativos na pontuação de Core Web Vitals (LCP, CLS).
