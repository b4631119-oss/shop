// src/lib/pocketbase.js
import PocketBase from 'pocketbase';

// 🔥 Используем твой URL с pockethost.io
const PB_URL = import.meta.env.VITE_PB_URL || 'https://telefon-osh.pockethost.io';

export const pb = new PocketBase(PB_URL);
pb.autoCancellation(false);

export const getProducts = async () => {
  try {
    console.log('📡 Запрос к PocketBase...');
    const result = await pb.collection('products').getList(1, 100, {
      sort: '-created',
    });
    console.log('📦 Получено товаров:', result.items.length);
    return result.items;
  } catch (error) {
    console.error('❌ Ошибка загрузки товаров:', error);
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    return await pb.collection('products').getOne(id);
  } catch (error) {
    console.error('❌ Ошибка загрузки товара:', error);
    return null;
  }
};

export const getImageUrl = (product, filename) => {
  if (!product || !filename) return '';
  // Используем PB_URL для корректного URL
  return `${PB_URL}/api/files/${product.collectionId || product.collectionName}/${product.id}/${filename}`;
};