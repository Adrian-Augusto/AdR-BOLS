# Guia Visto Americano 2027

Landing page responsiva para um e-book educativo sobre o processo do visto americano B1/B2. Desenvolvida com React, TypeScript, Vite, Tailwind CSS, Framer Motion e Lucide React. Não há backend: a compra é encaminhada ao checkout externo configurado.

## Requisitos

- Node.js 20 ou superior
- npm

## Instalação local

```bash
npm install
Copy-Item .env.example .env.local
npm run dev
```

Edite `.env.local` e informe, no mínimo, `VITE_CHECKOUT_URL` antes de publicar. Sem URL válida, os botões de compra ficam desabilitados e a página informa a indisponibilidade, sem simular uma compra.

## Variáveis de ambiente

| Variável | Obrigatória | Finalidade |
| --- | --- | --- |
| `VITE_CHECKOUT_URL` | Sim para vender | URL HTTPS do checkout externo. UTMs e identificadores `gclid`/`fbclid` da página são encaminhados ao checkout. |
| `VITE_PRODUCT_PRICE` | Não | Preço exibido, em reais; padrão `29.90`. |
| `VITE_COMPANY_NAME` | Não | Nome da empresa no rodapé. |
| `VITE_SUPPORT_EMAIL` | Recomendável | E-mail de suporte exibido no rodapé. |
| `VITE_PRIVACY_URL` | Recomendável | URL publicada da política de privacidade. |
| `VITE_TERMS_URL` | Recomendável | URL publicada dos termos de uso. |
| `VITE_REFUND_URL` | Recomendável | URL da política de reembolso efetivamente aplicável. |
| `VITE_META_PIXEL_ID` | Não | Identificador público do Meta Pixel. |
| `VITE_GA4_MEASUREMENT_ID` | Não | Identificador de medição do GA4. |

As variáveis `VITE_*` são incluídas no pacote enviado ao navegador. Use somente identificadores públicos; nunca coloque segredos ou tokens privados nelas.

## Analytics

Com os identificadores públicos configurados, a página envia `ViewContent` ao Meta Pixel e `view_item` ao GA4 uma única vez por carregamento. No clique válido de compra, envia `InitiateCheckout` ao Meta Pixel e `begin_checkout` ao GA4, antes de encaminhar para o checkout. UTMs e os identificadores `gclid`/`fbclid` presentes na página são preservados na URL do checkout.

O evento `Purchase` não é enviado. A confirmação de uma transação só deve ser registrada por uma integração confiável com o provedor de pagamento (por exemplo, webhook no servidor), fora do escopo desta landing page.

## Build e publicação na Vercel

```bash
npm run build
npm run preview
```

Importe o projeto na Vercel, configure as variáveis de ambiente nas configurações do projeto e publique. A plataforma detecta o preset Vite automaticamente; o comando de build é `npm run build` e a pasta de saída é `dist`.

## Conteúdo e publicação

- O preço inicial é `R$ 29,90`; ajuste-o por `VITE_PRODUCT_PRICE`.
- Informe os dados reais da empresa, o contato de suporte e as políticas antes da publicação. A página não inventa prazos nem condições de reembolso: orienta o visitante a consultar os termos reais do vendedor e do checkout.
- A ilustração fornecida pelo usuário fica em `public/brasil-eua-editorial.png`; a legenda esclarece que as pessoas retratadas não endossam o guia. Otimize a imagem em WebP/AVIF antes de publicar para reduzir o carregamento.
- O material é apresentado como independente e educativo. Não garante a concessão de visto; as taxas oficiais não estão incluídas.
- Regras consulares, taxas e prazos podem mudar; revise o conteúdo do e-book e da página antes de cada edição.
