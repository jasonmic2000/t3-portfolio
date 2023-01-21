/* eslint-disable @next/next/no-img-element */
import Layout from "../components/Layout";
import { signIn, signOut, useSession } from "next-auth/react";
import { getPinnedRepos } from "../lib/repos";
import type { Repo } from "../lib/types";

import { trpc } from "../utils/trpc";
import Card from "../components/Card";
import PinnedRepos from "../components/PinnedRepos";

const Home = (props: { pinnedRepos: Repo[] }) => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

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
                  <span className="text-[hsl(280,100%,70%)]">Michael</span>
                </h2>
                <p className="m-0 mb-4 text-zinc-800 dark:text-zinc-300">
                  Web Dev currently working at Maxxton Technologies
                </p>
                <p className="m-0 text-sm text-zinc-700 dark:text-zinc-400">
                  Learning about the web and experimenting with new technologies
                  as well.
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
          </div>
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="text-slate-900 dark:text-slate-50">Jason </span>
              <span className="text-[hsl(280,100%,70%)]">Michael</span>
            </h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
              <Card href="https://create.t3.gg/en/usage/first-steps">
                <>
                  <h3 className="text-2xl font-bold">First Steps →</h3>
                  <div className="text-lg">
                    Just the basics - Everything you need to know to set up your
                    database and authentication.
                  </div>
                </>
              </Card>
              <Card href="https://create.t3.gg/en/introduction">
                <>
                  <h3 className="text-2xl font-bold">Documentation →</h3>
                  <div className="text-lg">
                    Learn more about Create T3 App, the libraries it uses, and
                    how to deploy it.
                  </div>
                </>
              </Card>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-2xl text-white">
                {hello.data ? hello.data.greeting : "Loading tRPC query..."}
              </p>
              <AuthShowcase />
            </div>
          </div>
          <PinnedRepos pinnedRepos={props.pinnedRepos} />
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

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
