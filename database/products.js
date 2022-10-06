import fs from 'node:fs';

console.log('fs', 'write' in fs);

export const products = [
  { id: 1, name: 'Yarn purple', type: 'Cotton', color: 'Purple', price: 2.67 },
  { id: 2, name: 'Yarn orange', type: 'Cotton', color: 'Orange', price: 1.73 },
  { id: 3, name: 'Yarn green', type: 'Cotton', color: 'Green', price: 6.37 },
  { id: 4, name: 'Yarn red', type: 'Cotton', color: 'Red', price: 2.42 },
  {
    id: 5,
    name: 'Yarn light',
    type: 'Cotton',
    color: 'Light-mixed',
    price: 8.89,
  },
  {
    id: 6,
    name: 'Yarn purple pack',
    type: 'Cotton',
    color: 'Purple',
    price: 27.63,
  },
  {
    id: 7,
    name: 'Yarn green pack',
    type: 'Cotton',
    color: 'Green',
    price: 11.25,
  },
  {
    id: 8,
    name: 'Yarn mix',
    type: 'Cotton',
    color: 'Dark-mixed',
    price: 16.73,
  },
];
