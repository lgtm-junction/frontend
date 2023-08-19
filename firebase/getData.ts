
import { firebaseApp } from "./firebase.config";
import { getFirestore, doc, getDoc, collection, getDocs, DocumentData } from "firebase/firestore";

const db = getFirestore(firebaseApp)

export async function getDocument<T>(collectionName: string, id: string) {
    return getDoc<T, DocumentData>(doc(db, collectionName, id) as any);
}

export async function getDocuments<T>(collectionName: string) {
    return getDocs<T, DocumentData>(collection(db, collectionName) as any);
}
