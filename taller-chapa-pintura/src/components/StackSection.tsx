import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  z?: number;
  stack?: boolean;
  className?: string;
};

export default function StackSection({
  children,
  id,
  z = 0,
  stack = true,
  className = "bg-white",
}: Props) {
  return (
    <section
      id={id}
      style={{ zIndex: z }}
      className={[
        "relative w-full min-h-screen",
        "flex items-center",
        "overflow-hidden",
        stack ? "md:sticky md:top-0" : "",
        className,
      ].join(" ")}
    >
      <div className="mx-auto w-full max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-28 md:pb-16 lg:px-8">
        {children}
      </div>
    </section>
  );
}