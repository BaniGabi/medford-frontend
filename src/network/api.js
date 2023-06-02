import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/products";

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/get_all/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Fetch product by ID
export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`${API_URL}/${productId}/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(
      `${API_URL}/products/create/`,
      productData
    );
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

// Update an existing product
export const updateProduct = async (productId, productData) => {
  try {
    const response = await axios.put(
      `${API_URL}/products/${productId}/update/`,
      productData
    );
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// Delete a product
export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${API_URL}/products/${productId}/delete/`);
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
