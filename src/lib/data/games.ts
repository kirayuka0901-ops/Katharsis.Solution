/**
 * EDIT YOUR GAMES HERE
 * 1. Put each game's image inside static/games/ (example: static/games/portal2.webp).
 * 2. Set image to its public path (example: "/games/portal2.webp").
 * 3. Add, remove, or reorder entries as you like.
 */
export type GameEntry = {
    name: string;
    image: string;
    description?: string;
    link?: string;
};

export const games: GameEntry[] = [
    { name: "Your first game", image: "/games/replace-with-your-game-art.svg", description: "Replace this card with a game you play.", link: "" },
    { name: "Your second game", image: "/games/replace-with-your-game-art.svg", description: "Add a short description if you want.", link: "" },
    { name: "Your third game", image: "/games/replace-with-your-game-art.svg", description: "You can add as many games as you like.", link: "" },
];
