import { People } from "protocols/people.js";
import { db } from "./../database/database.connection";

async function getPeople(id: number) {

  const people = await db.query<People>(
    `SELECT * FROM people WHERE "id" = $1;`,
    [id]
  );
  return people;
}

async function getQuantity() {

  const quantity = await db.query(`SELECT COUNT(*) FROM "people";`);
  
  return quantity.rows[0].count;
}

export const peopleRepository = { getPeople, getQuantity };
