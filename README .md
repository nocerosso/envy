This is a modified version of astro-ecommerce a theme for Astro 

Here the original REDME.md file  [astro-ecommerce README.md](astro-ecommerce_README.md) from Creative TIM

I did some changes 


## 🚀 Project Structure 
Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── cart/
│   │   ├── checkout/
│   │   ├── incentives/
│   │   ├── order/
│   │   ├── products/
│   │   ├── promo/
│   │   ├── reviews/
│   │   ├── store/
│   │   ├── dashboardContext.tsx
│   │   ├── footer.tsx
│   │   └── navbar.tsx
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── landing.astro
│       ├── product.astro
│       └── shopping-cart.astro
├── package.json
├── README.md
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

