export type Shoes = {
  ID: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Image: string;
  Name: string;
  Description: string;
  Price: number;
  Color: string;
};

export type CartItem = {
  ID: number;
  quantity: number;
  CreatedAt: string;
  UpdatedAt: string;
  DeletedAt: string | null;
  Image: string;
  Name: string;
  Description: string;
  Price: number;
  Color: string;
};
