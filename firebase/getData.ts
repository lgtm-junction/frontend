
import { MenuType } from "@/types/type";
import { firebaseApp } from "./firebase.config";
import { getFirestore, doc, getDoc, collection, getDocs, DocumentData, query, where, documentId } from "firebase/firestore";

export const MenuCollectionName = "foods";
export const RestaurantCollectionName = "stores";
export const CustomCollectionName = "customizations";

const db = getFirestore(firebaseApp)

export async function getDocument<T>(collectionName: string, id: string) {
    return getDoc<T, DocumentData>(doc(db, collectionName, id) as any);
}

export async function getDocuments<T>(collectionName: string) {
    return await getDocs<T, DocumentData>(collection(db, collectionName) as any).then((snapshot) => {
        const docs: T[] = [];
        snapshot.forEach((doc) => {
            docs.push({
                ...doc.data(),
                id: doc.id,
            });
        });
        return docs;
    });
}


export async function getMenus(menuIds: string[]): Promise<MenuType[]> {

    const q = query(collection(db, MenuCollectionName), where(documentId(), "in", menuIds));

    return await getDocs<MenuType, DocumentData>(q as any).then((snapshot) => {
        const menus: MenuType[] = [];
        snapshot.forEach((doc) => {
            const menu = {
                ...doc.data(),
                id: doc.id,
            };
            menus.push(menu);
        });
        return menus;
    });
}
