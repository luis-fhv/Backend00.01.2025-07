import express from "express";
import { readdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROUTER_PATH = __dirname;

for (const filename of readdirSync(ROUTER_PATH)) {
  const cleanName = filename.split(".").shift();

  if (cleanName !== "index") {
    // ⚡ Import dinámico con extensión
    const module = await import(`./${filename}`);
    router.use(`/${cleanName}`, module.default);
  }
}

export default router;
