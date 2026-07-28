export default function Footer() {
  return (
    <footer className="w-full px-6 py-24 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-white/10 pt-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-sans text-[13px] text-text-primary">
            © {new Date().getFullYear()} Krista Design Systems.
          </p>
          <p className="mt-2 font-sans text-[13px] text-text-muted">
            Powerful technology, made to feel effortless.
          </p>
        </div>
        <nav className="flex gap-6">
          <a
            href="mailto:kristina.kerzan@gmail.com"
            className="font-sans text-[13px] text-text-muted transition-colors hover:text-text-primary"
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/krista-kerzan/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[13px] text-text-muted transition-colors hover:text-text-primary"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
