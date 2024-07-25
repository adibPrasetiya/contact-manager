import { config } from "dotenv";

config();

export const APP_PORT = process.env.APP_PORT;
export const VAULT_ENDPOINT = process.env.VAULT_ENDPOINT;
export const VAULT_TOKEN = process.env.VAULT_TOKEN;
