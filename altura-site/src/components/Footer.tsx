import { Github, Twitter, Linkedin, MountainIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 mt-20 border-t border-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-heading">
            <MountainIcon className="h-6 w-6 text-primary" />
            <span>
              Alt<span className="text-primary">ura</span>
            </span>
          </Link>
          <div className="flex justify-center items-center gap-6">
            <Link href="https://github.com" target="_blank" aria-label="Github">
              <Github className="w-6 h-6 text-foreground/80 hover:text-primary transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-foreground/80 hover:text-primary transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="Linkedin">
              <Linkedin className="w-6 h-6 text-foreground/80 hover:text-primary transition-transform duration-300 ease-in-out transform hover:scale-125" />
            </Link>
          </div>
          <p className="text-foreground/60">
            &copy; {new Date().getFullYear()} Altura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
