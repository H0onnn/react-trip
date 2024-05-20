import { useQuery } from "@tanstack/react-query";
import { getHotel } from "@/remote/hotel";

export const useHotel = (id: string) => {
  return useQuery({
    queryKey: ["hotel", id],
    queryFn: () => getHotel(id),
  });
};
