import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6">
      <div className="container flex items-center justify-between">
        <p className="text-foreground/80">
          &copy; {new Date().getFullYear()} Altura. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank">
            <Github className="w-6 h-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="w-6 h-6 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="w-6 h-6 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
