
import { MenuType } from "@/types/type";
import { firebaseApp } from "./firebase.config";
import { getFirestore, doc, getDoc, collection, getDocs, DocumentData, query, where, documentId } from "firebase/firestore";

export const MenuCollectionName = "foods";
export const RestaurantCollectionName = "stores";

const db = getFirestore(firebaseApp)

export async function getDocument<T>(collectionName: string, id: string) {
    return getDoc<T, DocumentData>(doc(db, collectionName, id) as any);
}

export async function getDocuments<T>(collectionName: string) {
    return getDocs<T, DocumentData>(collection(db, collectionName) as any);
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


export async function getAllMenus(): Promise<MenuType[]> {
    return await getDocuments<MenuType>(MenuCollectionName).then((snapshot) => {
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