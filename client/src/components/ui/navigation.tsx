import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navigation = () => {
  const [location] = useLocation();
  const isMobile = useIsMobile();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/approach", label: "Approach" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/book", label: "Book a Session" },
  ];

  const NavLinks = () => (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <a
            className={`${
              location === link.href
                ? "text-primary font-medium"
                : "text-slate-600 hover:text-primary"
            } transition-colors`}
          >
            {link.label}
          </a>
        </Link>
      ))}
    </>
  );

  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-semibold text-primary">Manovikaasa</a>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <NavLinks />
              </div>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-8">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;