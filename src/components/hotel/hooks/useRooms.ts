import { useEffect } from "react";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { onSnapshot, doc, collection } from "firebase/firestore";
import { store } from "@/remote/firebase";
import { COLLECTIONS } from "@/constants";

import { getRooms } from "@remote/room";
import { Room } from "@models/room";

export const useRooms = ({ hotelId }: { hotelId: string }) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(doc(store, COLLECTIONS.HOTEL, hotelId), COLLECTIONS.ROOM),
      (snapshot) => {
        const newRooms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Room),
        }));

        queryClient.setQueryData(["rooms", hotelId], newRooms);
      },
    );

    return () => unSubscribe();
  }, [hotelId, queryClient]);

  return useQuery({
    queryKey: ["rooms", hotelId],
    queryFn: () => getRooms(hotelId),
  });
};
