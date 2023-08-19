import { CustomType, MenuType } from "@/types/type";
import {
    DocumentData,
    collection,
    doc,
    documentId,
    getDoc,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";
import { firebaseApp } from "./firebase.config";

export const MenuCollectionName = "foods";
export const RestaurantCollectionName = "stores";
export const CustomCollectionName = "customizations";

const db = getFirestore(firebaseApp);

export async function getDocument<T>(
  collectionName: string,
  id: string
): Promise<T> {
  return getDoc<T, DocumentData>(doc(db, collectionName, id) as any).then(
    (snapshot) => {
      return {
        ...(snapshot.data() as T),
        id: snapshot.id,
      };
    }
  );
}

export async function getDocuments<T>(collectionName: string): Promise<T[]> {
  return getDocs<T, DocumentData>(collection(db, collectionName) as any).then(
    (snapshot) => {
      const docs: T[] = [];
      snapshot.forEach((doc) => {
        docs.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      return docs;
    }
  );
}

export async function getMenu(menuId: string): Promise<MenuType> {
  const menu = await getDocument<MenuType>(MenuCollectionName, menuId);

  if (!menu.customizations) {
    const q = query(
      collection(db, CustomCollectionName),
      where("menuId", "==", menu.id)
    );
    menu.customizations = await getDocs<CustomType, DocumentData>(
      q as any
    ).then((snapshot) => {
      const customs: CustomType[] = [];
      snapshot.forEach((doc) => {
        const custom = {
          ...doc.data(),
          id: doc.id,
        };
        customs.push(custom);
      });
      return customs;
    });
  }

  return menu;
}

export async function getMenus(menuIds: string[]): Promise<MenuType[]> {
  const q = query(
    collection(db, MenuCollectionName),
    where(documentId(), "in", menuIds)
  );

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
