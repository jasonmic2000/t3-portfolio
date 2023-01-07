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
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 text-black hover:bg-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
        href={href}
        target={target ? target : ""}
      >
        {children}
      </Link>
    </>
  );
};

export default Card;
