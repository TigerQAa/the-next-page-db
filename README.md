
# The Next Page DB

The Next Page is a website to find peer reviews on books. This is the search part of The Next Page. This README will explain the tech stack and how the project works. This is currently a WIP until most of the website is finished.

# Svelte/Sveltekit

Svelte is a Javascript Framework. A framework has prebuilt libraries, components, and API to create a website easily. You can learn Svelte [here](https://learn.svelte.dev). (You don't need to learn Part 2 if you don't want to.)

SvelteKit is a framework that combines serverside and clientside code in one place with Svelte. It is similar to Next.js. If you don't know SvelteKit but know Svelte, skip to Part 3 at https://learn.svelte.dev.

# tRPC
tRPC is a way to create your api. Unlike other ways, where you would have to use a fetch call and not know the type, tRPC gives type safety to the frontend. tRPC documentation is [here](https://trpc.io/docs/quickstart).

# TailwindCSS

TailwindCSS is a way of writing CSS.

Normally, to style a button like this:

```html
<button>Press me!</button>
```

You would write a class in a css file like this:

```css
.press-button {
	background-color: rgb(52 211 153)
}
```

And then add the class to the button:

```html
<button class="press-button">Press me!</button>
```

This can easily get out of hand in bigger projects. With Tailwind, instead of writing the class in the file, you can:

```html
<button class="bg-emerald-400">Press me!</button>
```

Instead of writing classes and then use them, you just use the properties themselves. You can search for how to do things at the docs [here](https://tailwindcss.com/docs).

# Drizzle

Drizzle is an ORM (connects code to database). Drizzle docs are [here](https://orm.drizzle.team/).