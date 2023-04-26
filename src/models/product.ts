export interface IProduct {
  id: number;
  status: string;
  currency: string;
  fundingMethod: string;
  total: number;
  order: string;
  client: string;
  invoice: string;
  createdAt: string;
  updatedAt: string;
}

export interface FilterProduct {
  status: string;
  client: string;
  createdAt: string;
  updatedAt: string;
  invoice: string;
}
