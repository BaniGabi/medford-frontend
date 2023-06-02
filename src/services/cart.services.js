import http from "../http.common";

class CartDataService {
  addToCart(cartItem) {
    return http.post("/cart/addToCart", cartItem);
  }

  getCart(user) {
    return http.get(`/cart/getCart?user=${user}`);
  }

  deleteCart(productId) {
    return http.delete(`/cart/delete/${productId}`);
  }
}

export default new CartDataService();
