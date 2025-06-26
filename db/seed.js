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
  await createUser("gamer123", "password123");
  await createUser("reviewMaster", "securePass!");

  await createGame(
    "The Witcher 3: Wild Hunt",
    "An open-world RPG following Geralt of Rivia as he searches for his adopted daughter in a war-torn fantasy world."
  );

  await createGame(
    "Red Dead Redemption 2",
    "An epic tale of life in America's unforgiving heartland at the dawn of the modern age."
  );

  await createGame(
    "The Legend of Zelda: Breath of the Wild",
    "Link awakens from a 100-year slumber to defeat Calamity Ganon in this open-air adventure."
  );

  await createGame(
    "Elden Ring",
    "A fantasy action-RPG set in a world created by Hidetaka Miyazaki and George R.R. Martin."
  );

  await createGame(
    "Minecraft",
    "A sandbox game where players explore, build, and survive in blocky, procedurally generated worlds."
  );

  await createGame(
    "Cyberpunk 2077",
    "An open-world RPG set in Night City, a megalopolis obsessed with power, glamour, and body modification."
  );

  await createGame(
    "God of War (2018)",
    "Kratos and his son Atreus journey through the Norse realms in this soft reboot of the action series."
  );

  await createGame(
    "Portal 2",
    "A puzzle-platformer where players use a portal gun to solve increasingly complex test chambers."
  );

  await createGame(
    "Stardew Valley",
    "A farming simulation RPG where players restore their grandfather's old farm in a charming countryside."
  );

  await createGame(
    "Hades",
    "A rogue-like dungeon crawler where Zagreus attempts to escape the Underworld and reach Mount Olympus."
  );

  await createGame(
    "Half-Life: Alyx",
    "A VR first-person shooter set between the events of Half-Life and Half-Life 2."
  );

  await createGame(
    "Disco Elysium",
    "An isometric RPG featuring unparalleled freedom of choice in a richly detailed urban setting."
  );

  await createReview(
    "Masterpiece of Gaming",
    "One of the best RPGs I've ever played with incredible depth and storytelling.",
    "5",
    "1",
    "2"
  );

  await createReview(
    "Good but overrated",
    "While the game is beautiful, I found the controls clunky at times.",
    "4",
    "2",
    "2"
  );

  await createReview(
    "Perfect for casual play",
    "I love coming back to this game after work to relax and unwind.",
    "5",
    "3",
    "2"
  );

  await createReview(
    "Too difficult for me",
    "The learning curve was too steep and I gave up after a few hours.",
    "2",
    "1",
    "2"
  );

  await createReview(
    "Changed my perspective on games",
    "This isn't just a game, it's an experience that stays with you.",
    "5",
    "3",
    "2"
  );
}
