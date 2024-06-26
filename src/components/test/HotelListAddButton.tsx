import { doc, collection, writeBatch } from "firebase/firestore";
import { store } from "@remote/firebase";
import { COLLECTIONS } from "@/constants";

import Button from "@shared/Button";

import { HOTEL_NAMES, IMAGES, HOTEL, EVENTS, ROOMS } from "../../mock/data";

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const HotelListAddButton = () => {
  const batch = writeBatch(store);

  const handleButtonClick = () => {
    const hotels = HOTEL_NAMES.map((name, idx) => {
      return {
        name: name,
        mainImageUrl: IMAGES[Math.floor(Math.random() * IMAGES.length)],
        images: IMAGES,
        price: random(130000, 200000),
        starRating: random(1, 5),
        ...HOTEL,
        ...(EVENTS[idx] != null && { events: EVENTS[idx] }),
      };
    });

    hotels.forEach((hotel) => {
      const hotelDocRef = doc(collection(store, COLLECTIONS.HOTEL));

      batch.set(hotelDocRef, hotel);

      ROOMS.forEach((room) => {
        const subDocRef = doc(collection(hotelDocRef, COLLECTIONS.ROOM));
        batch.set(subDocRef, room);
      });
    });

    batch.commit();
  };

  return <Button onClick={handleButtonClick}>Add Hotel</Button>;
};
