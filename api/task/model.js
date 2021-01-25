const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("tasks")
      .select(
        "task_id",
        "task_description",
        "task_notes",
        "task_completed",
        "project_name",
        "project_description"
      )
      .join("projects", "tasks.project_id", "projects.project_id");
  },
  insert(task) {
    return db("tasks")
      .insert(task)
      .then(task_id => {
        return db("tasks")
          .where("task_id", task_id)
          .first();
      });
  }
};
