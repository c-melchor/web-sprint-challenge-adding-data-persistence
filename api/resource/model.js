const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("resources");
  },
  insert(resource) {
    return db("resources")
      .insert(resource)
      .then(resource_id => {
        return db("resources")
          .where("resource_id", resource_id)
          .first();
      });
  }
};
