# meirelisadv.com.br

Site do escritório Gennisis Meirelis Advogados, feito em [Astro](https://astro.build).

## Branches

- `astro-src` — código-fonte (edite aqui).
- `main` — só o site gerado; é o que o Easypanel publica.
- Tag `backup-site-antigo-2026-10-20` — versão anterior do site, antes da migração.

## Comandos

```bash
npm install
npm run dev        # prévia em http://localhost:4321
npm run build      # gera o site em dist/
```

Para publicar: copie o conteúdo de `dist/` para a raiz da branch `main` e faça push.

## Onde mudar

- Telefone, endereço, IDs do Google Ads: `src/data/site.ts`
- Áreas de atuação (home + páginas `/atuacao/...`): `src/data/areas.ts`
- Home: `src/pages/index.astro`

O rótulo de conversão do Google Ads (`adsConversionLabel`) ainda precisa ser preenchido com o valor do painel do Google Ads.
