export interface Product {
  item_id: number;
  col_id: number;
  name: string;
  price: number;
  title: string;
  imageUrl: string;
  quantity: number;
}

export interface CartState {
  items: Product[];
  totalItems: number;
}

