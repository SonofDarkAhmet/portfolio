import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  // Pre-render the single real route to static HTML at build time.
  prerender: ["/"],
  // Static hosts (Netlify/Vercel/etc.) expect a "dist" publish directory.
  buildDirectory: "dist",
} satisfies Config;
