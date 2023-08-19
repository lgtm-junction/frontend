"use client";
import * as S from "../styles";
import { useEffect, useState } from "react";
import { getDocuments } from "@/firebase/getData";
import { Restaurant, RestaurantCollectionName } from "@/firebase/models/restaurant";
import { addDoc, collection, doc, getFirestore } from "firebase/firestore";
import { FoodCollectionName } from "@/firebase/models/food";
import { firebaseApp } from "@/firebase/firebase.config";

const testFood = {
  name: "Cafe Latte",
  price: 5000,
  image: "/cafeLatte.jpeg",
  customOptions: ["Milk Amount", "Grinding", "asdfasdf", "asdfdfs"],
}

const db = getFirestore(firebaseApp)

export default function Home() {

  const createDocs = async () => {

    addDoc(collection(db, FoodCollectionName), testFood);


  }

  useEffect(() => {
    createDocs();
  }, [])

  return <S.Container><pre>{
    JSON.stringify(testFood, null, 2)
    }</pre></S.Container>;
}
