import Layout from "../components/Layout";
import Footer from "../components/Footer";
import LinksComponent from "../components/Links";

export default function Links() {
  return (
    <Layout>
      <div className="relative flex h-full min-h-screen w-full flex-col items-center p-8">
        <section className="prose mt-16 mb-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
          <div>
            <h1 className="mb-3 leading-none text-slate-900 dark:text-slate-50">
              Links
            </h1>
            <p className="m-0 leading-tight text-zinc-700 dark:text-zinc-400">
              Different places you can find me online
            </p>
          </div>
          <LinksComponent />
        </section>
        <Footer />
      </div>
    </Layout>
  );
}
