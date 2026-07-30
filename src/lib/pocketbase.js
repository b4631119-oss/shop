// src/lib/pocketbase.js
import PocketBase from 'pocketbase';

const PB_URL = 'http://127.0.0.1:8090';

export const pb = new PocketBase(PB_URL);

// Отключаем автоотмену
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

// ✅ ИСПРАВЛЕННАЯ ФУНКЦИЯ ДЛЯ КАРТИНОК
export const getImageUrl = (product, filename) => {
  if (!product || !filename) {
    console.log('❌ Нет продукта или файла');
    return '';
  }
  
  // Получаем collectionId или collectionName
  const collectionId = product.collectionId || product.collectionName;
  
  if (!collectionId) {
    console.log('❌ Нет collectionId');
    return '';
  }
  
  const url = pb.files.getURL(product, filename);
  console.log('🖼️ URL картинки:', url);
  return url;
};