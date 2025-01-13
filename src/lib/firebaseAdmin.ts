import { cert, getApp, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

import env from "@/utils/validateEnv";

const adminApp =
    getApps().length > 0
        ? getApp()
        : initializeApp({
              credential: cert({
                  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                  clientEmail: env.FIREBASE_CLIENT_EMAIL,
                  privateKey: JSON.parse(env.FIREBASE_PRIVATE_KEY),
              }),
          });

export const auth = getAuth(adminApp);
export const firestore = getFirestore(adminApp);
export const storage = getStorage(adminApp);
