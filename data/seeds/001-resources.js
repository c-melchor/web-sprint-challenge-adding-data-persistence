exports.seed = function(knex) {
  return knex("resources")
    .truncate()
    .then(function() {
      return knex("resources").insert([
        {
          resource_id: 1,
          resource_name: "Home Depot",
          resource_description: "Hardware store that sells paint"
        },
        {
          resource_id: 2,
          resource_name: "Michael's",
          resource_description: "Craft store"
        }
      ]);
    });
};
