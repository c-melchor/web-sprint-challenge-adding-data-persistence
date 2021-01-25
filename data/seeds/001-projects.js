exports.seed = function(knex) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          project_id: 1,
          project_name: "Paint dog house",
          project_description: "Paint Birdie's dog house blue",
          project_completed: true
        },
        {
          project_id: 2,
          project_name: "Make to do list",
          project_description: "Redux project, need to complete by Saturday",
          project_completed: false
        },
        {
          project_id: 3,
          project_name: "Create vision board",
          project_description: "Go to Michael's, buy craft supplies, create",
          project_completed: false
        }
      ]);
    });
};
