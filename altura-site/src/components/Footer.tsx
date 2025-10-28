import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 mt-20 border-t border-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-6 mb-4">
          <Link href="https://github.com" target="_blank">
            <Github className="w-6 h-6 hover:text-primary transition-transform duration-300 ease-in-out transform hover:scale-125" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Twitter className="w-6 h-6 hover:text-primary transition-transform duration-300 ease-in-out transform hover:scale-125" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Linkedin className="w-6 h-6 hover:text-primary transition-transform duration-300 ease-in-out transform hover:scale-125" />
          </Link>
        </div>
        <p className="text-foreground/80">
          &copy; {new Date().getFullYear()} Altura. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
