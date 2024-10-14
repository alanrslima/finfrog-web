export type Transaction = {
  id: string;
  name: string;
  value: number;
  date: string;
  account: {
    id: string;
    name: string;
  };
  //   category?: null;
  createdAt: string;
};
