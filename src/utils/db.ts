import { firestore } from "@/lib/firebaseAdmin";
import { User } from "@/types/User";

const converter = <T>() => ({
    toFirestore: (data: T) => data as FirebaseFirestore.DocumentData,
    fromFirestore: (snap: FirebaseFirestore.QueryDocumentSnapshot) =>
        snap.data() as T,
});

const Model = <T>(collectionPath: string) =>
    firestore.collection(collectionPath).withConverter(converter<T>());

const db = {
    users: Model<User>("users"),
};

export { db };
