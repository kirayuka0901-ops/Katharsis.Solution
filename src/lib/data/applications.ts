/** Edit this list to show the applications you actually use. */
export type ApplicationEntry = { name: string; image: string; description?: string; link?: string };

export const applications: ApplicationEntry[] = [
    { name: "Code editor", image: "/apps/replace-with-app-icon.svg", description: "Your preferred editor" },
    { name: "Creative app", image: "/apps/replace-with-app-icon.svg", description: "An app you enjoy using" },
    { name: "Daily tool", image: "/apps/replace-with-app-icon.svg", description: "Another app from your setup" },
];
