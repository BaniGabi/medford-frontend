import http from "../http.common";

class DrugsDataService {
  getAll() {
    return http.get("/getAll");
  }

  get(id) {
    return http.get(`/drugs/${id}`);
  }

  create(data) {
    return http.post("/create", data);
  }

  update(id, data) {
    return http.put(`/drugs/${id}`, data);
  }

  delete(id) {
    return http.delete(`/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/drugs`);
  }

  findByTitle(title) {
    return http.get(`/drugs?title=${title}`);
  }
}

export default new DrugsDataService();
