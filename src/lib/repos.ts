const repos = [
  {
    name: "dev.jasonjmichael.com",
    description: "Personal site made using the T3 Stack",
    language: "TypeScript",
    owner: "Jason",
    link: "https://github.com/jasonmic2000/t3-portfolio",
    languageColor: "#3178c6",
  },
  {
    name: "Meal Ordering App",
    description: "Meal Ordering App made using React with a Firebase Backend",
    language: "JavaScript",
    owner: "Jason",
    link: "https://github.com/jasonmic2000/React-Meal-Ordering",
    languageColor: "#f1e05a",
  },
  {
    name: "Expense Tracker",
    description:
      "Expense Tracking App made using React with a Firebase Backend",
    language: "JavaScript",
    owner: "Jason",
    link: "https://github.com/jasonmic2000/Finance-Tracker-Firebase",
    languageColor: "#f1e05a",
  },
  {
    name: "Cookbook",
    description: "Recipe Cookbook App made using React with a Firebase Backend",
    language: "JavaScript",
    owner: "Jason",
    link: "https://github.com/jasonmic2000/React-Cooking-Recipes",
    languageColor: "#3178c6",
  },
  {
    name: "Upbeat",
    description: "Music Player App made with PHP",
    language: "PHP",
    owner: "Jason",
    link: "https://github.com/jasonmic2000/Upbeat",
    languageColor: "#4F5D95",
  },
];

export async function getPinnedRepos() {
  return repos.map((repo) => {
    return {
      name: repo.name,
      description: repo.description,
      url: repo.link,
      language: repo.language,
      languageColor: repo.languageColor,
    };
  });
}
