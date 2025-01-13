/**
 * Parses .env parameters and ensures they are of required types. If any .env parameters are
 * missing, the server will not start and an error will be thrown.
 */

import "@/utils/envConfig";
import { cleanEnv } from "envalid";
import { str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
    NEXT_PUBLIC_FIREBASE_API_KEY: str(),
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: str(),
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: str(),
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: str(),
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: str(),
    NEXT_PUBLIC_FIREBASE_APP_ID: str(),
    NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: str(),
    FIREBASE_CLIENT_EMAIL: str(),
    FIREBASE_PRIVATE_KEY: str(),
});
