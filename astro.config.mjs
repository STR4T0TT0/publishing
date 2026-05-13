import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";

export default defineConfig({
  integrations: [
    AutoImport({
      imports: [
        {
          "./src/components/editorial/PullQuote.astro": [
            ["default", "PullQuote"],
          ],
          "./src/components/editorial/StrategicTakeaways.astro": [
            ["default", "StrategicTakeaways"],
          ],
        },
      ],
    }),
    mdx(),
  ],
});