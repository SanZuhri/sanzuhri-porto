import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/mdx.css";

// Polyfill for Buffer
import { Buffer } from 'buffer';
(window as any).Buffer = Buffer;

createRoot(document.getElementById("root")!).render(<App />);
