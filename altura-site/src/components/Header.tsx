import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm py-4 shadow-lg shadow-primary/20">
      <nav className="container flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-heading">
          Altura
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link href="#features" className="hover:text-primary transition-colors">
              Features
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className="hover:text-primary transition-colors">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </li>
        </ul>

        <Link href="#contact" className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Get in touch
        </Link>
      </nav>
    </header>
  );
}
