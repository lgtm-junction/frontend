"use client";
import * as S from "../styles";
import { useEffect, useState } from "react";
import { getDocuments } from "@/firebase/getData";
import { Restaurant, RestaurantCollectionName } from "@/firebase/models/restaurant";


export default function Home() {

  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  const fetchRestaurants = async () => {

    getDocuments<Restaurant>(RestaurantCollectionName)
    .then((querySnapshot) => {
      const newData = querySnapshot.docs
      .map((doc) => ({ ...doc.data(), id: doc.id }));

      setRestaurants(newData);
    })

  }

  useEffect(() => {
    fetchRestaurants();
  }, [])

  return <S.Container><pre>{
    JSON.stringify(restaurants, null, 2)
    }</pre></S.Container>;
}
