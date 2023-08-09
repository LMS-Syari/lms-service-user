"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",[
        {
          name: "Fauzan",
          profession: "Admin Frontend",
          role: "admin",
          email: "fauzan@admin.com",
          password: await bcrypt.hash("password", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Erika",
          profession: "Frontend Developer",
          role: "student",
          email: "erika@student.com",
          password: await bcrypt.hash("password", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]
    );
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  },
};
