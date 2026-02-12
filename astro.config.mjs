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
          ],
        },
      ],
    }),
  ],
});
