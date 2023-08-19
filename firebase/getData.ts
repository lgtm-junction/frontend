
import { firebaseApp } from "./firebase.config";
import { getFirestore, doc, getDoc, collection, getDocs, DocumentData } from "firebase/firestore";
import { Food, FoodCollectionName } from "./models/food";

const db = getFirestore(firebaseApp)

export async function getDocument<T>(collectionName: string, id: string) {
    return getDoc<T, DocumentData>(doc(db, collectionName, id) as any);
}

export async function getDocuments<T>(collectionName: string) {
    return getDocs<T, DocumentData>(collection(db, collectionName) as any);
}


export async function getFoods(): Promise<Food[]> {
    return getDocuments<Food>(FoodCollectionName).then((snapshot) => {
        const foods: Food[] = [];
        snapshot.forEach((doc) => {
            const food = doc.data();
            foods.push(food);
        });
        return foods;
    });
}