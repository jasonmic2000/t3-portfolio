import Layout from "../components/Layout";
import Footer from "../components/Footer";
import fs from "fs";
import showdown from "showdown";

export default function About(props: { html: string }) {
  return (
    <Layout>
      <div className="relative flex h-full min-h-screen w-full flex-col items-center p-8">
        <section className="prose mt-16 mb-12 flex w-full flex-col justify-between gap-6 md:mt-0 lg:mt-0">
          <div
            className="prose-headings:leading-none prose-h1:mb-3 prose-h1:text-slate-900 prose-p:leading-tight prose-p:text-zinc-700 prose-a:text-zinc-600 prose-a:decoration-dotted prose-a:underline-offset-4 prose-a:duration-300 hover:prose-a:text-fuchsia-400 dark:prose-h1:text-slate-50 dark:prose-h4:text-zinc-100 dark:prose-p:text-zinc-300 dark:prose-a:text-zinc-200 dark:hover:prose-a:text-fuchsia-400"
            dangerouslySetInnerHTML={{ __html: props.html }}
          ></div>
        </section>
        <Footer />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const markdownText = fs.readFileSync("src/content/about.md", "utf-8");
  const converter = new showdown.Converter({ metadata: true });
  const html = converter.makeHtml(markdownText);

  return {
    props: {
      html,
    },
  };
}
