exports.seed = function(knex) {
  return knex("tasks")
    .truncate()
    .then(function() {
      return knex("tasks").insert([
        {
          task_id: 1,
          task_description: "Clean after painting",
          task_notes: "Use hypoallergenic cleaner",
          task_completed: false,
          project_id: 1
        },
        {
          task_id: 2,
          task_description: "Make sure to get gardening tools",
          task_notes: "Home Depot brand is best",
          task_completed: true,
          project_id: 3
        },
        {
          task_id: 3,
          task_description: "Call mom",
          task_notes: "Maybe FaceTime would be better",
          task_completed: false,
          project_id: 1
        }
      ]);
    });
};
