'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useCallback } from 'react';

import ThemeToggle from '@/components/themeToggle';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { GlowingDot } from './glowingDot';

const navItems = [
  { name: 'home', path: '/' },
  { name: 'projects', path: '/projects' },
  { name: 'misc', path: '/misc' },
  { name: 'resume.', path: '#' },
];

const itemsWithGlowingDot: string[] = [];

export function Navbar() {
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isOpen, setIsOpen] = useState(false);
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const isCurrentPathActive = (path: string, pathname: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const getCurrentPageIndex = useCallback(() => {
    return navItems.findIndex(({ path }) => isCurrentPathActive(path, pathname));
  }, [pathname]);

  useEffect(() => {
    setActiveIndex(getCurrentPageIndex());
  }, [getCurrentPageIndex]);

  const handleNavigation = (index: string) => {
    setIsOpen(false);
    setActiveIndex(Number(index));
  };

  return (
    <aside className="mb-16 w-full mx-auto font-mono">
      <div className="flex justify-between items-center">
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="p-2">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <SheetTitle className="text-left cursor-pointer text-black dark:text-white font-mono">
                    Dhruv Jaradi
                  </SheetTitle>
                </Link>
              </SheetHeader>
              <nav className="mt-6 flex flex-col space-y-3 font-mono">
                {Object.entries(navItems).map(([index, { name, path }]) => {
                  const isActive = isCurrentPathActive(path, pathname);
                  // For "resume.", wrap with Tooltip
                  if (name === 'resume.') {
                    return (
                      <TooltipProvider key={path}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Link
                              href={path}
                              passHref
                              onClick={() => handleNavigation(index)}
                              ref={(el) => {
                                navRefs.current[Number(index)] = el;
                              }}
                              className="w-full text-left py-2 px-4 rounded-md text-blue-500 dark:text-orange-500"
                            >
                              <span className="z-10">{name}</span>
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Uploading soon!</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  }
                  return (
                    <Link
                      key={path}
                      href={path}
                      passHref
                      onClick={() => handleNavigation(index)}
                      ref={(el) => {
                        navRefs.current[Number(index)] = el;
                      }}
                      className="w-full text-left py-2 px-4 rounded-md text-blue-500 dark:text-orange-500"
                    >
                      {itemsWithGlowingDot.includes(name) && !isActive && (
                        <div className="relative top-1 right-1">
                          <GlowingDot />
                        </div>
                      )}
                      <span className="z-10">{name}</span>
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex ml-auto relative flex-wrap items-center gap-0">
          {activeIndex !== -1 && (
            <div
              className="absolute bottom-0 left-0 hidden lg:block outline-dashed outline-[0.15em] outline-[#D1D5DB] transition-all duration-300 ease-out rounded-md"
              style={{
                width: (navRefs.current[activeIndex]?.offsetWidth || 0) - 15,
                height: navRefs.current[activeIndex]?.offsetHeight || 0,
                transform: `translateX(${(navRefs.current[activeIndex]?.offsetLeft || 0) + 6}px)`,
              }}
            />
          )}
          {Object.entries(navItems).map(([index, { name, path }]) => {
            const isActive = isCurrentPathActive(path, pathname);
            // For "resume.", wrap with Tooltip
            if (name === 'resume.') {
              return (
                <TooltipProvider key={path}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={path}
                        passHref
                        onMouseEnter={() => setActiveIndex(Number(index))}
                        onMouseLeave={() => setActiveIndex(getCurrentPageIndex())}
                        ref={(el) => {
                          navRefs.current[Number(index)] = el;
                        }}
                        className="group relative transition-colors py-1 px-3 lg:py-2 lg:px-5 rounded-md font-mono text-blue-500 dark:text-orange-500"
                      >
                        <span className="z-10">{name}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Uploading soon!</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            }
            return (
              <Link
                key={path}
                href={path}
                passHref
                onMouseEnter={() => setActiveIndex(Number(index))}
                onMouseLeave={() => setActiveIndex(getCurrentPageIndex())}
                ref={(el) => {
                  navRefs.current[Number(index)] = el;
                }}
                className="group relative transition-colors py-1 px-3 lg:py-2 lg:px-5 rounded-md font-mono text-blue-500 dark:text-orange-500"
              >
                {itemsWithGlowingDot.includes(name) && !isActive && (
                  <div className="absolute top-1 right-1">
                    <GlowingDot />
                  </div>
                )}
                <span className="z-10">{name}</span>
              </Link>
            );
          })}
        </nav>
        <div className="flex-shrink-0 ml-4">
          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
