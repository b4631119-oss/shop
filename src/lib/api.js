// src/lib/api.js
const API_URL = import.meta.env.VITE_API_URL ;
export const BASE_URL = API_URL.replace(/\/api\/?$/, '');

// ============ ТОВАРЫ ============
export const getProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/products/`);
    if (!res.ok) throw new Error('Ошибка загрузки товаров');
    const data = await res.json();
    const products = Array.isArray(data) ? data : data.results || [];
    
    // Преобразуем price и oldPrice в числа
    return products.map(p => ({
      ...p,
      price: Number(p.price) || 0,
      oldPrice: p.old_price ? Number(p.old_price) : null,
      inStock: p.in_stock !== undefined ? p.in_stock : p.inStock,
    }));
  } catch (error) {
    console.error('Ошибка загрузки товаров:', error);
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    const res = await fetch(`${API_URL}/products/${id}/`);
    if (!res.ok) return null;
    const data = await res.json();
    
    // Преобразуем price и oldPrice в числа
    return {
      ...data,
      price: Number(data.price) || 0,
      oldPrice: data.old_price ? Number(data.old_price) : null,
      inStock: data.in_stock !== undefined ? data.in_stock : data.inStock,
    };
  } catch (error) {
    return null;
  }
};

export const getProductsByCategory = async (category) => {
  try {
    const allProducts = await getProducts();
    return allProducts.filter(p => p.category === category);
  } catch (error) {
    console.error('Ошибка фильтрации:', error);
    return [];
  }
};

// ============ КАРТИНКИ ============
export const getImageUrl = (product, filenameOrUrl) => {
  // Если передан URL напрямую
  if (typeof filenameOrUrl === 'string') {
    if (filenameOrUrl.startsWith('http://') || filenameOrUrl.startsWith('https://')) {
      return filenameOrUrl;
    }
    if (filenameOrUrl.startsWith('/')) {
      return `${BASE_URL}${filenameOrUrl}`;
    }
    return `${BASE_URL}/${filenameOrUrl}`;
  }

  // Если передан product
  if (product) {
    // Проверяем поле image
    if (product.image && typeof product.image === 'string') {
      if (product.image.startsWith('http://') || product.image.startsWith('https://')) {
        return product.image;
      }
      return `${BASE_URL}${product.image.startsWith('/') ? '' : '/'}${product.image}`;
    }
    
    // Проверяем массив images
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      const firstImage = product.images[0];
      
      // Если images это строки
      if (typeof firstImage === 'string') {
        if (firstImage.startsWith('http://') || firstImage.startsWith('https://')) {
          return firstImage;
        }
        return `${BASE_URL}${firstImage.startsWith('/') ? '' : '/'}${firstImage}`;
      }
      
      // Если images это объекты с полем image_url
      if (firstImage && firstImage.image_url) {
        return firstImage.image_url;
      }
    }
  }

  return '';
};

// ============ ИЗБРАННОЕ (localStorage) ============
export const getFavorites = () => {
  try {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  } catch {
    return [];
  }
};

export const addToFavorites = (product) => {
  const favorites = getFavorites();
  const exists = favorites.some(item => item.id === product.id);
  if (!exists) {
    favorites.push(product);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
  return favorites;
};

export const removeFromFavorites = (productId) => {
  const favorites = getFavorites();
  const updated = favorites.filter(item => item.id !== productId);
  localStorage.setItem('favorites', JSON.stringify(updated));
  return updated;
};

export const isInFavorites = (productId) => {
  const favorites = getFavorites();
  return favorites.some(item => item.id === productId);
};

export const clearFavorites = () => {
  localStorage.removeItem('favorites');
  return [];
};