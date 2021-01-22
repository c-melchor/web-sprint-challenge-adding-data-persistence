exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments("project_id");
      tbl.string("project_name", 128).notNullable();
      tbl.string("project_description", 128);
      tbl
        .boolean("project_completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("tasks", tbl => {
      tbl.increments("task_id");
      tbl.string("task_description", 128).notNullable();
      tbl.string("task_notes", 1000);
      tbl
        .boolean("task_completed")
        .notNullable()
        .defaultTo(false);
      tbl
        .integer("project_id")
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE");
    })
    .createTable("resources", tbl => {
      tbl.increments("resource_id");
      tbl
        .string("resource_name", 128)
        .notNullable()
        .unique();
      tbl.string("resource_description", 1000);
    })
    .createTable("project_resources", tbl => {
      tbl
        .integer("resource_id")
        .notNullable()
        .references("resource_id")
        .inTable("resources")
        .onDelete("CASCADE");
      tbl
        .integer("project_id")
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("projects");
};
