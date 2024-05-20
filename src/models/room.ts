export interface Room {
  avaliableCount: number;
  basicInfo: BasicInfo;
  imageUrl: string;
  price: number;
  refundable: boolean;
  roomName: string;
}

interface BasicInfo {
  [key: string]: string | number;
}
