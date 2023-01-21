import { PinnedRepos } from "../lib/types";
import Card from "./Card";
import { FiStar, FiArrowRight } from "react-icons/fi";
import { VscRepoForked } from "react-icons/vsc";

const PinnedRepos = (props: { pinnedRepos: PinnedRepos }) => {
  return (
    <section className="prose mb-10 flex w-full flex-col gap-6 prose-a:no-underline">
      <h2
        className="m-0 text-[2.5rem] font-extrabold leading-none text-zinc-900 dark:text-zinc-200"
        id="projects"
      >
        Top Projects
      </h2>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        {props.pinnedRepos.map((repo, index) => (
          <a
            key={index}
            href={`${repo.url}`}
            target="_blank"
            rel="noreferrer"
            className="gap-4 rounded-lg bg-gradient-to-r from-zinc-500 to-stone-500 p-1 shadow-lg shadow-zinc-800/10 duration-300 hover:scale-[103%] hover:shadow-xl hover:shadow-zinc-800/10 dark:shadow-zinc-200/10 dark:hover:shadow-zinc-200/10"
          >
            <div className="flex h-full cursor-pointer flex-col justify-between rounded-lg bg-zinc-200 p-4 dark:bg-zinc-800">
              <div>
                <h3 className="m-0 mb-6 w-full text-lg font-semibold leading-none tracking-tight text-zinc-800 dark:text-zinc-200">
                  {repo.name}
                </h3>
                <p className="m-0 mb-6 w-full text-sm tracking-tight text-zinc-700 dark:text-zinc-300">
                  {repo.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <a
        href="https://github.com/jasonmic2000?tab=repositories"
        target="_blank"
        rel="noreferrer"
        className="group flex cursor-pointer items-center gap-2 text-zinc-500 no-underline duration-200 hover:text-zinc-700 dark:hover:text-zinc-400"
      >
        View More{" "}
        <span className="duration-200 group-hover:translate-x-1">
          <FiArrowRight />
        </span>
      </a>
    </section>
  );
};

export default PinnedRepos;
