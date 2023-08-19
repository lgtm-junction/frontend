
import { firebaseApp } from "./firebase.config";
import { getFirestore, doc, getDoc, collection, getDocs, DocumentData, query, where, documentId } from "firebase/firestore";
import { Food, FoodCollectionName } from "./models/food";

const db = getFirestore(firebaseApp)

export async function getDocument<T>(collectionName: string, id: string) {
    return getDoc<T, DocumentData>(doc(db, collectionName, id) as any);
}

export async function getDocuments<T>(collectionName: string) {
    return getDocs<T, DocumentData>(collection(db, collectionName) as any);
}


export async function getFoods(foodIds: string[]): Promise<Food[]> {

    const q = query(collection(db, FoodCollectionName), where(documentId(), "in", foodIds));

    return await getDocs<Food, DocumentData>(q as any).then((snapshot) => {
        const foods: Food[] = [];
        snapshot.forEach((doc) => {
            const food = {
                ...doc.data(),
                id: doc.id,
            };
            foods.push(food);
        });
        return foods;
    });
}


export async function getAllFoods(): Promise<Food[]> {
    return await getDocuments<Food>(FoodCollectionName).then((snapshot) => {
        const foods: Food[] = [];
        snapshot.forEach((doc) => {
            const food = {
                ...doc.data(),
                id: doc.id,
            };
            foods.push(food);
        });
        return foods;
    });
}