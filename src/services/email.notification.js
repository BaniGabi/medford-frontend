import http from "../http.common";

class EmailNotification {
  sendEmail(message) {
    return http.post("/cart/send-email", message);
  }
}

export default new EmailNotification();
