import appCss from "./app.css?url";
import { useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";

import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import emailjs from "@emailjs/browser";

let theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#05070b",
      paper: "#0d121b",
    },
    primary: {
      main: "#5fa8b8",
    },
    text: {
      primary: "#f3f6f9",
      secondary: "#b7c2d1",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  shape: {
    borderRadius: 12,
  },
});

theme = responsiveFontSizes(theme);

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Raif Karaahmetoglu Portfolio" },
    {
      name: "google-site-verification",
      content: "npeIEdB7lOOq3oM9_aJGWN0gh1DezV-6z-qwFEPoOk4",
    },
  ];
}

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500;700&display=swap",
  },
  { rel: "stylesheet", href: appCss },
  { rel: "icon", type: "image/png", href: "./images/batdev.png" },
];


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        ></script>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useEffect(() => {
    emailjs.init({
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Outlet />
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
