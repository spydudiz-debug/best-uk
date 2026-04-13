import Link from "next/link";

type Props = {
  currentLabel: string;
};

export default function SetupGuideBreadcrumb({ currentLabel }: Props) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-body-muted">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/#home" className="transition hover:text-accent-cyan">
            Home
          </Link>
        </li>
        <li aria-hidden className="text-white/25">
          /
        </li>
        <li>
          <Link href="/setup-guide" className="transition hover:text-accent-cyan">
            Setup Guide
          </Link>
        </li>
        <li aria-hidden className="text-white/25">
          /
        </li>
        <li className="font-medium text-white/90">{currentLabel}</li>
      </ol>
    </nav>
  );
}
