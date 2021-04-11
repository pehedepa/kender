import React from 'react';
import ItemList from './itemList/itemList';
import ShoppingCart from './shoppingCart/shoppingCart';

export default function ShoppingView() {
  return (
    <>
      <ItemList />
      <ShoppingCart />
    </>
  );
}
