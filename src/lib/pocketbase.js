// src/lib/pocketbase.js
import PocketBase from 'pocketbase';

// 🔥 ЗАМЕНИ НА СВОЙ URL С RENDER
const PB_URL = 'https://pocketbase-telephone-osh.onrender.com';

export const pb = new PocketBase(PB_URL);
pb.autoCancellation(false);

export const getProducts = async () => {
  try {
    const result = await pb.collection('products').getList(1, 100, {
      sort: '-created',
    });
    return result.items;
  } catch (error) {
    console.error('Ошибка загрузки товаров:', error);
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    return await pb.collection('products').getOne(id);
  } catch (error) {
    return null;
  }
};

export const getImageUrl = (product, filename) => {
  if (!product || !filename) return '';
  return pb.files.getURL(product, filename);
};