# 🎭 Evgeni Leonov – Official Website

A homepage for Swedish actor Evgeni Leonov

---

## Table of Content
- [About the project](#About-the-project) 
- [Functionality](#Functionality)
- [Technologies used](#Technologies-used)
- [Installation](#Installation)
- [Project structure](#Project-structure)
- [Workflow](#Workflow)
- [License](#License)
- [Contact](#Contact)


---

## About the project

A homepage for Swedish actor Evgeni Leonov where you can get an overview of his body of work and updates on what he is working on. 
The homepage was created with typescript and next and its content populated with CMS contentful.

---

## Functionality
- A start page with brief introduction 
- A latest page where you can see what work Evgeni recently  been involved with. 
- A cv page listing all the relevant work Evgeni has done.
- A gallery page of photos of Evgeni
- A media page of videos of Evgeni 



## Technologies Used

- [Next.js v.15 (App Router)](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Contentful](https://www.contentful.com/)
- [Framer-motion](https://www.npmjs.com/package/framer-motion)
- [Lenis](https://www.npmjs.com/package/lenis)


---

## Installation
```bash
# Clone repository
git clone https://github.com/AnkanGranero/evgeni-next.git

# Change directory
cd evgeni-next

# Install dependencies
yarn

# Start the development server
yarn dev
```

---

## Project structure

```
evgeni-next/
├─ app/
│  ├─ aktuellt/
│  │  └─ page.tsx
│  ├─ cv/
│  │  └─ page.tsx
│  ├─ galleri/
│  │  ├─ [id]/
│  │  │  └─ page.tsx
│  │  ├─ @modal/
│  │  │  └─ (.)[id]/
│  │  │     └─ page.tsx
│  │  ├─ default.tsx
│  │  └─ layout.tsx
│  ├─ github/
│  │  └─ workflows/
│  │     └─ deploy.yml
│  ├─ media/
│  │  └─ [selectedMedia]/
│  │     └─ page.tsx
│  ├─ types.ts
│  ├─ favicon.ico
│  ├─ layout.tsx
│  └─ page.tsx
│
├─ components/
│  ├─ icons/
│  │  ├─ social-media-icons.ts
│  │  └─ svg-icon.tsx
│  ├─ footer.tsx
│  ├─ image-detail.tsx
│  ├─ modal.tsx
│  ├─ navbar.jsx
│  ├─ overlay.jsx
│  └─ parallax-text.tsx
│
├─ lib/
│  ├─ contentful/
│  │  ├─ cv/
│  │  │  ├─ api.ts
│  │  │  └─ types.ts
│  │  ├─ gallery/
│  │  │  ├─ api.ts
│  │  │  ├─ image-variants.ts
│  │  │  └─ types.ts
│  │  ├─ latest/
│  │  │  ├─ api.ts
│  │  │  └─ types.ts
│  │  ├─ media/
│  │  │  └─ api.ts
│  │  └─ presentation/
│  │     ├─ api.tsx
│  │     ├─ client.ts
│  │     ├─ image.ts
│  │     ├─ rich-text.tsx
│  │     ├─ types.ts
│  │     ├─ url.ts
│  │     └─ views.ts
│
├─ public/
│  ├─ icons/
│  │  └─ mail.png
│  ├─ svgIcons/
│  │  ├─ facebook.svg
│  │  ├─ instagram.svg
│  │  ├─ mail.svg
│  │  ├─ spotify.svg
│  │  └─ youtube.svg
│  └─ Evgeni_Leonov_foto.jpg
│
├─ styles/
│  ├─ colors.scss
│  ├─ fonts.js
│  └─ globals.css
│
├─ eslint.config.mjs
├─ next-env.d.ts
├─ next.config.ts
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ tsconfig.json
├─ yarn.lock
└─ README.md
```


---

## Workflow

* Working in Agile sprints (SCRUM)
* GitHub projects with a Kanban board for sprint management
* Feature branches


---

## License

MIT License © 2025 Andreas Graner


---

## 🌍 Live Demo

https://evgeni-next.vercel.app/


---

## 📬 Contact

**Created by:** Andreas Granér  
📧 **Email:** [Andreas@graner.me](mailto:Andreas@graner.me)  
