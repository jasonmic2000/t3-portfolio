/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import { getPinnedRepos } from "../lib/repos";
import type { Repo } from "../lib/types";

import PinnedRepos from "../components/PinnedRepos";
import Footer from "../components/Footer";

const Home = (props: { pinnedRepos: Repo[] }) => {
  return (
    <>
      <Layout>
        <main className="flex min-h-screen flex-col items-center justify-center">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <section className="prose mb-20 mt-16 flex w-full flex-col-reverse items-start justify-between gap-4 md:mt-0 md:flex-row md:gap-8 lg:mt-0 lg:flex-row lg:gap-14">
              <div className="leading-none">
                <h2 className="m-0 text-[2.5rem] font-extrabold text-zinc-900 dark:text-zinc-200">
                  <span className="text-slate-900 dark:text-slate-50">
                    Jason{" "}
                  </span>
                  <span className="text-fuchsia-400">Michael</span>
                </h2>
                <p className="m-0 mb-4 text-slate-900 dark:text-slate-50">
                  Web Dev currently working at Maxxton Technologies
                </p>
                <p className="m-0 text-sm text-zinc-700 dark:text-zinc-400">
                  Learning about the web and experimenting with new
                  technologies.
                </p>
              </div>
              <div className="min-w-fit">
                <img
                  src="https://i.pinimg.com/280x280_RS/a5/82/42/a58242e96fd87bca86b0d8dc92058a98.jpg"
                  alt="avatar"
                  className="min-w-32 m-0 h-32 rounded-full shadow-xl grayscale"
                />
              </div>
            </section>
            <PinnedRepos pinnedRepos={props.pinnedRepos} />
            <Footer />
          </div>
        </main>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const pinnedRepos = await getPinnedRepos();
  return {
    props: {
      pinnedRepos: pinnedRepos,
    },
    revalidate: 43200,
  };
}

export default Home;
