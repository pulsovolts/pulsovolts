# Pulso Volts

Página única “Em breve” em Next.js, com a arte original da marca, layout mobile first e renderização no servidor a cada requisição. O layout compartilhado usa `connection()` e o cache de componentes está desativado para manter SSR nas páginas que utilizam esse layout.

## Executar

```sh
npm install
npm run dev
```

## Publicar

Configure `NEXT_PUBLIC_SITE_URL` com o domínio HTTPS definitivo antes de executar `npm run build`. Essa variável alimenta canonical, sitemap, imagens sociais e a URL da organização nos dados estruturados. Sem ela, o sitemap fica vazio para não publicar um domínio fictício.

```sh
npm run build
npm run start
```

SEO: HTML semântico em português, descrição, Open Graph, Twitter Card, robots.txt, sitemap e metadados para compartilhamento. A página não depende de JavaScript para exibir o conteúdo, mostrar o aviso “Em breve”. A descoberta e a posição em mecanismos de busca e assistentes dependem também da publicação, indexação e autoridade do domínio.

A página apresenta um cenário independente de bicicletas e cidade noturna e a logo em camada transparente, com flutuação e paralaxe do mouse. Os textos são inteiramente em português. O conteúdo e a logo são renderizados no servidor; apenas a interação decorativa usa um componente cliente. O movimento respeita a preferência de movimento reduzido e não depende de atualizações de estado do React a cada quadro.

Os arquivos utilizados e a direção visual estão em `docs/geracao-visual.md`. As imagens são servidas em WebP otimizado. O original fornecido pelo usuário permanece preservado.
