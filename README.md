
## 使用技術一覧

<div style="display: inline">

  <!-- フロントエンドのフレームワーク一覧 -->
  <a href="https://nodejs.org/ja">
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=for-the-badge">
  </a>
  <a href="https://nextjs.org/">
  <img src="https://img.shields.io/badge/-Next.js-blue.svg?logo=next.js&style=for-the-badge">
  </a>
  <!-- フロントエンドの言語 -->
  <a href="http://ja.react.dev/">
  <img src="https://img.shields.io/badge/-React-23272f.svg?logo=react&style=for-the-badge">
  </a>
  <a href="https://www.typescriptlang.org/">
  <img src="https://img.shields.io/badge/-Typescript-FFF.svg?logo=typescript&style=for-the-badge">
  </a>  
  <!-- ミドルウェア -->
  <a href="https://prismic.io/">
  <img src="https://img.shields.io/badge/-Prismic-484A7A.svg?logo=prismic&style=for-the-badge">
  </a>

</div>

#### 使用ライブラリ

<div>
  <!-- 使用ライブラリ -->
  <p><a href="https://prismic.io/">prismic</a></p>
  <p><a href="https://gsap.com/">GSAP</a></p>
  <p><a href="https://r3f.docs.pmnd.rs/getting-started/introduction">r3f</a></p>
  <p><a href="https://drei.docs.pmnd.rs/getting-started/introduction">Drei</a></p>
  <p><a href="https://tailwindcss.com/">tailwindcss</a></p>
</div>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [開発環境構築](#開発環境構築)


## プロジェクトについて

<p align="right">(<a href="#top">トップへ</a>)</p>

<!-- プロジェクトの概要を記載 -->
<p>
  このサイトはNext.jsとThree.js (react-three-fiber/r3f)を組み合わせたサイト制作を学ぶためにPrismicより配信されたyoutubeを見ながら作成しました。<br />
  インタラクティブな体験を提供できるUI/UXについて学びながら、ユーザーに魅力的なウェブサイトを提供することを目指しました。<br />
  また、コンテンツ管理システムとしてPrismicを活用し、効率的なコンテンツ更新のワークフローについても習得しました。
</p>


### 制作後の振り返り
<p>
  Three.jsをより簡単に扱えるReact Three Fiber（r3f）に今回の学習で初めて触れました。動画を見ながらの制作だったので受動的ではありましたが、ライブラリについて体系的に学ぶことができました。<br />
  r3fとdrei、GSAPでここまで簡単にWebGLとインタラクティブなアニメーションを導入できることに驚いたとともに、自身の3Dウェブ技術の学習進度に課題を感じました。<br />
  また、ライブラリは便利である反面、内部の処理が抽象化されており、応用するには基礎となるThree.jsやWebGLについての学習が必要であり、この点は今後学習を進めていきたいと考えています。<br />
  今回は簡単にWebGL表現を組み込む手法があることと、インタラクティブなアニメーションを加えることで生まれる視覚的インパクトについて学べたことが非常に大きな経験となりました。<br />
  Prismicについては非常に手軽にコンテンツの更新を行えることから、小規模なサイトやランディングページには有用だと感じました。実務での使用機会は限られるかもしれませんが、CMSサービスの一つを実践的に学習できたことに価値を感じています。<br />
  動画を見ながらの受動的な学びでしたが、今後は自ら調べ、次の制作プロジェクトに積極的に活かしていきたいと思います。
</p>

## 開発環境構築

### prismic
<a href="https://fizzy-nanae.prismic.io/builder/working?language=en-us">ダッシュボード</a>

### ローカル環境

<a href="http://localhost:3000/" target="_blank">フロント(Next)</a>

<a href="http://localhost:9999/" target="_blank">CMS(prismic - Slice Machine)</a>

----------------
# Prismic + Next.js Minimal Starter

Want to quickly get started building your own project with [Prismic][prismic] and [Next.js][nextjs]? This project includes basic configurations and nothing else. The project includes one Rich Text Slice, a homepage, and a dynamic page.

- **Demo**: [Open live demo][live-demo]
- **Learn more about Prismic and Next.js**: [Prismic Next.js Documentation][prismic-docs]

&nbsp;

![Website screenshot](https://user-images.githubusercontent.com/31219208/228821412-fdde92b2-c13c-4287-b799-611fa96a5fd6.png)

&nbsp;

## 🚀 Quick Start

To start a new project using this starter, run the following commands in your terminal:

```sh
npx degit prismicio-community/nextjs-starter-prismic-minimal your-project-name
cd your-project-name
npx @slicemachine/init@latest
```

The commands will do the following:

1. Start a new Next.js project using this starter.
2. Ask you to log in to Prismic or [create an account][prismic-sign-up].
3. Create a new Prismic content repository with sample content.

When you're ready to start your project, run the following command:

```sh
npm run dev
```

## How to use your project

To edit the content of this project, go to [prismic.io/dashboard](https://prismic.io/dashboard), click on the repository for this website, and start editing.

### Create a page

To create a page, click on the green pencil icon, then select **Page**.

Pages are made of Slices. You can add and rearrange Slices to your pages.

Your new page will be accessible by its URL, but it won't appear on the website automatically. To let users discover it, add it to the navigation.

### Preview documents

If you chose this starter when you created a new repository from the Prismic Dashboard, then your repository is preconfigured with previews on localhost. To change the preview configuration or add previews to your production or staging environments, see [Preview Drafts in Next.js](https://prismic.io/docs/technologies/preview-content-nextjs) in the Prismic documentation.

### Customize this website

This website is preconfigured with Prismic. It has three Prismic packages installed:

- `@prismicio/client` provides helpers for fetching content from Prismic
- `@prismicio/react` provides React components for rendering content from Prismic
- `@prismicio/next` provides a wrapper component to configure Prismic previews

These packages are already integrated and employed in this app. Take a look at the code to see how they're used.

### Edit the code

There are two steps to rendering content from Prismic in your Next.js project:

1. Fetch content from the Prismic API using `@prismicio/client`.
2. Template the content using components from `@prismicio/react`.

Here are some of the files in your project that you can edit:

- `prismicio.ts` - This file includes configuration for `@prismicio/client` and exports useful API helpers.
- `app/layout.tsx` - This is your layout component, which includes configuration for `@prismicio/react` and `@prismicio/next`.
- `app/page.tsx` - This is the app homepage. It queries and renders a page document with the UID (unique identifier) "home" from the Prismic API.
- `app/[uid]/page.tsx` - This is the page component, which queries and renders a page document from your Prismic repository based on the UID.
- `slices/*/index.tsx` - Each Slice in your project has an index.tsx file that renders the Slice component. Edit this file to customize your Slices.

These are important files that you should leave as-is:

- `app/api/exit-preview/route.ts` - Do not edit or delete this file. This is the API endpoint to close a Prismic preview session.
- `app/api/preview/route.ts` - Do not edit or delete this file. This is the API endpoint to launch a Prismic preview session.
- `app/slice-simulator/page.tsx` - Do not edit or delete this file. This file simulates your Slice components in development.
- `slices/` - This directory contains Slice components, which are generated programmatically by Slice Machine. To customize a Slice template, you can edit the Slice's index.tsx file. To add Slices, delete Slices, or edit Slice models, use Slice Machine (more info below).

Learn more about how to edit your components with [Fetch Data in Next.js](https://prismic.io/docs/technologies/fetch-data-nextjs) and [Template Content in Next.js](https://prismic.io/docs/technologies/template-content-nextjs).

Learn more about how to use [TypeScript with Prismic](https://prismic.io/docs/typescript-nextjs).

### Deploy to the web

To put your project online, see [Deploy your Next.js App](https://prismic.io/docs/technologies/deploy-nextjs).

### Edit content models with Slice Machine

This project includes an application called Slice Machine, which generates models for your Custom Types and Slices. Slice Machine stores the models locally in your codebase, so you can save and version them. It also syncs your models to Prismic. To learn how to use Slice Machine, read [Model Content in Next.js](https://prismic.io/docs/technologies/model-content-nextjs).

If you change or add to your Custom Types, you'll need to update your route handling to match. To learn how to do that, read [Define Paths in Next.js](https://prismic.io/docs/technologies/define-paths-nextjs).

## Documentation

For the official Prismic documentation, see [Prismic's guide for Next.js][prismic-docs] or the [technical references for the installed Prismic packages](https://prismic.io/docs/technologies/technical-references).

## License

```
Copyright 2013-2022 Prismic <contact@prismic.io> (https://prismic.io)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[prismic]: https://prismic.io/
[prismic-docs]: https://prismic.io/docs/technologies/nextjs
[prismic-sign-up]: https://prismic.io/dashboard/signup
[nextjs]: https://nextjs.org/
[live-demo]: https://nextjs-starter-prismic-minimal.vercel.app/
