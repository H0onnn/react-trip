import { COLLECTIONS } from "@/constants";
import { Hotel } from "@/models/hotel";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  startAfter,
} from "firebase/firestore";
import { store } from "./firebase";

export const getHotels = async (pageParams?: number) => {
  const hotelQuery =
    pageParams === 1
      ? query(collection(store, COLLECTIONS.HOTEL), limit(10))
      : query(
          collection(store, COLLECTIONS.HOTEL),
          startAfter(pageParams),
          limit(10),
        );

  const hotelsSnapshot = await getDocs(hotelQuery);

  const items = hotelsSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Hotel,
  );

  return {
    items,
  };
};

export const getHotel = async (id: string) => {
  const snapshot = await getDoc(doc(store, COLLECTIONS.HOTEL, id));

  return {
    id,
    ...snapshot.data(),
  } as Hotel;
};
