import { setupApp } from "../server/app";

// Vercel serverless function entry point
export default async function handler(req: any, res: any) {
    const { app } = await setupApp();
    app(req, res);
}
