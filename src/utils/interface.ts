export interface IChildren {
  children: React.ReactNode;
}

export interface IDrink {
  id: string;
  name: string;
  description: string;
  value: number;
  type: string;
  img: string;
}

export interface ICart extends IDrink {
  quantity: number;
}
