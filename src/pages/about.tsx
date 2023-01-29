import Layout from "../components/Layout";
import Footer from "../components/Footer";

export default function About() {
  return (
    <Layout>
      <div className="relative flex h-full min-h-screen w-full flex-col items-center p-8">
        <section className="prose mt-16 mb-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
          <div>
            <h1 className="mb-3 leading-none text-slate-900 dark:text-slate-50">
              About Me
            </h1>
            <p className="m-0 leading-tight text-zinc-700 dark:text-zinc-400">
              🚧This page is currently under construction.🚧
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
