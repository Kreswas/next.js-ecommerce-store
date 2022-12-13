import { sql } from './database';

export type Item = {
  id: number;
  name: string;
  type: string;
  color: string;
  price: number;
  description: string;
};

export async function getItem() {
  const pageItems = await sql<Item[]>`
  SELECT * FROM product;
  `;
  console.log('database', pageItems);
}
export async function getItemById(id: number) {
  const [item] = await sql<Item[]>`
  SELECT * FROM product WHERE id=${id}`;

  return item;
}
