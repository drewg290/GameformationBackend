import db from "#db/client";
import { createGame } from "#db/queries/games";
import { createReview } from "#db/queries/reviews";
import { createUser } from "#db/queries/users";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  await db.query("TRUNCATE TABLE users RESTART IDENTITY CASCADE");
  await db.query("TRUNCATE TABLE games RESTART IDENTITY CASCADE");
  await db.query("TRUNCATE TABLE reviews RESTART IDENTITY CASCADE");
  await createUser("foo", "bar");
  await createGame(
    "Assassin's Creed",
    "Assassin's Creed is a historical action-adventure series where players relive the memories of assassins fighting against templars in pivotal moments throughout history."
  );
  await createGame(
    "Team Fortress 2",
    "Team Fortress 2 is a fast-paced, class-based multiplayer shooter with colorful characters, chaotic battles, and endless hats."
  );
  await createGame(
    "Grand Theft Auto 5",
    "GTA 5 is an open-world crime epic where players explore Los Santos, pulling off heists and causing chaos across a sprawling criminal underworld."
  );

  await createReview(
    "This Game Was Awesome",
    "I did enjoy this game",
    "5",
    "2"
  );
}
