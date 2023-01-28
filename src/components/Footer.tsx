export default function Footer() {
  return (
    <footer className="prose absolute bottom-0 flex w-full py-4 px-8 md:px-8 lg:px-0">
      <p className="m-0 text-sm text-zinc-700 dark:text-zinc-500">
        &#169; 2023{". "}
        <a
          className="text-zinc-800 underline decoration-dotted underline-offset-4 duration-300 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-200"
          href="https://github.com/jasonmic2000"
          target={"_blank"}
          rel="noreferrer"
        >
          Jason Michael.
        </a>{" "}
        <a
          className="text-zinc-800 underline decoration-dotted underline-offset-4 duration-300 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-200"
          href="https://opensource.org/licenses/MIT"
          target={"_blank"}
          rel="noreferrer"
        >
          MIT License.
        </a>{" "}
      </p>
    </footer>
  );
}
