// src/lib/api.js

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';
export const BASE_URL = API_URL.replace(/\/api\/?$/, '');

export const getProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/products/`);
    if (!res.ok) throw new Error('Ошибка загрузки товаров');
    const data = await res.json();
    return Array.isArray(data) ? data : data.results || [];
  } catch (error) {
    console.error('Ошибка загрузки товаров:', error);
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    const res = await fetch(`${API_URL}/products/${id}/`);
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
};

export const getImageUrl = (product, filenameOrUrl) => {
  if (!product && !filenameOrUrl) return '';
  const url = filenameOrUrl || product?.image || (product?.images && product.images[0]);
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `${BASE_URL}${url.startsWith('/') ? '' : '/'}${url}`;
};
