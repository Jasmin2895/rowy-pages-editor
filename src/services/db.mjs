import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

function getdb() {
    if (!db) {
        const firebaseConfig = {
            apiKey: process.env.API_KEY,
            authDomain: process.env.AUTH_DOMAIN,
            projectId: "meetingstrackerextension",
            storageBucket: process.env.STORAGE_BUCKET,
            messagingSenderId: process.env.MESSAGING_SENDER_ID,
            appId: process.env.APP_ID
        }

        const app = initializeApp(firebaseConfig);

        db = getFirestore(app)
    }
    return db;
}

export default getdb;