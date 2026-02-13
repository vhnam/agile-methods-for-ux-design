// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Agile Methods for UX Design",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vhnam/agile-methods-for-ux-design",
        },
      ],
      sidebar: [
        {
          label: "What is Agile and where it came from?",
          items: [
            {
              label: "Welcome to Agile Methods for UX Design",
              slug: "what-is-agile-and-where-it-came-from/welcome-to-agile-methods-for-ux-design",
            },
            {
              label: "A Brief History of Agile",
              slug: "what-is-agile-and-where-it-came-from/a-brief-history-of-agile",
            },
            {
              label: "Why Is Design Missing in Agile?",
              slug: "what-is-agile-and-where-it-came-from/why-is-design-missing-in-agile",
            },
            {
              label: "Common Agile Rituals and Meetings",
              slug: "what-is-agile-and-where-it-came-from/common-agile-rituals-and-meetings",
            },
            {
              label: "What Does an Agile Team Look Like?",
              slug: "what-is-agile-and-where-it-came-from/what-does-an-agile-team-look-like",
            },
            {
              label: "Common Agile Practices and Jargon",
              slug: "what-is-agile-and-where-it-came-from/common-agile-practices-and-jargon",
            },
            {
              label: "Design Meetings and Practices in Agile",
              slug: "what-is-agile-and-where-it-came-from/design-meetings-and-practices-in-agile",
            },
            {
              label: "Lesson 1 Recap",
              slug: "what-is-agile-and-where-it-came-from/recap",
            },
          ],
        },
        {
          label: "Agile Patterns, Anti-Patterns, and Myths",
          items: [
            {
              label: "Welcome and Introduction",
              slug: "agile-patterns-anti-patterns-and-myths/welcome-and-introduction",
            },
            {
              label: "There Is No Agile",
              slug: "agile-patterns-anti-patterns-and-myths/there-is-no-agile",
            },
            {
              label: "Agile Myths",
              slug: "agile-patterns-anti-patterns-and-myths/agile-myths",
            },
            {
              label: "Agile Anti-Pattern",
              slug: "agile-patterns-anti-patterns-and-myths/agile-anti-pattern",
            },
            {
              label: "Agile Patterns in Large Organizations",
              slug: "agile-patterns-anti-patterns-and-myths/agile-patterns-in-large-organizations",
            },
          ],
        },
      ],
    }),
  ],
});
