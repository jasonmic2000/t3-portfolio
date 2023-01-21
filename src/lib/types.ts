export type Repo = {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
};

export type PinnedRepos = Repo[];
