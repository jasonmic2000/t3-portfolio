import Link from "next/link";
import type { ReactElement } from "react";

const Card = ({
  children,
  href,
  target,
}: {
  children: ReactElement;
  href: string;
  target?: string;
}) => {
  return (
    <>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-zinc-400/20 p-4 text-black shadow-lg shadow-zinc-800/10 duration-200 hover:scale-[103%] hover:bg-zinc-300 hover:shadow-2xl hover:shadow-zinc-800/10 dark:bg-zinc-500/20 dark:text-white dark:shadow-zinc-200/5 dark:hover:bg-white/20 dark:hover:shadow-zinc-200/5"
        href={href}
        target={target ? target : ""}
      >
        {children}
      </Link>
    </>
  );
};

export default Card;
