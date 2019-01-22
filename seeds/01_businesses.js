
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("businesses").del()
    .then(function () {
      // Inserts seed entries
      return knex("businesses").insert([
        {
          name: "Not Yo Momma's Pies",
          address: "456 MLK BLVD",
          category: "Food",
          phoneNumber: "777.777.7777",
          hours: "6am - 4pm",
          days: "Mon-Sat",
          website: "www.iamnotreal.com",
          social:"instagram.com"
        },
        {
          name: "GC Studio",
          address: "798 Cesar Chavez BLVD",
          category: "Art",
          phoneNumber: "888.888.8888",
          hours: "6am - 4pm",
          days: "Wed-Sun",
          website: "www.nosoyreal.com",
          social:"instagram.com"
        },
        {
          name: "Just Kicks",
          address: "123 Amelia Earhart Drive",
          category: "Apparel",
          phoneNumber: "999.999.9999",
          hours: "10am - 9pm",
          days: "Mon-Sun",
          website: "www.justkicks.com",
          social:"instagram.com"
        }
      ]);
    });
};
