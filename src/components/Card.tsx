import Link from "next/link";
import type { ReactElement } from "react";

const Card = ({ children, href }: { children: ReactElement; href: string }) => {
  return (
    <>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
        href={href}
        target="_blank"
      >
        {children}
      </Link>
    </>
  );
};

export default Card;
