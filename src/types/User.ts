export interface User {
    id?: string;
    name: string;
    email?: string;
    profilePicture?: string;
    isGuest: boolean;
    createdAt: FirebaseFirestore.Timestamp;
}
