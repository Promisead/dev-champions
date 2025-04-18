"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from "./Contactus";
import Image from "next/image";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "About Us", href: "#aboutus-section", current: false },
  { name: "Services", href: "#services-section", current: false },
  { name: "Our Process", href: "#process", current: false },
  // { name: "Forms", href: "/forms", current: false },
  { name: "Jobs", href: "https://jobs.dev-champions.tech", current: false },
  { name: "Blog", href: "http://blogs.dev-champions.tech", current: false },
/*  { name: "Testimonial", href: "#testimonial-section", current: false },
 */];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Disclosure as="nav" className="navbar z-50">
      <>
        <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8 z-50">
          <div className="relative flex h-12 sm:h-20 items-center">
            <div className="flex flex-1 items-center sm:justify-between">
              {/* LOGO */}

           {/* /   <div className="flex items-center space-x-4"> */}
             <div className="flex flex-col items-center gap-4 rounded-lg max-md:px-12  shadow-3xl sm:flex-row sm:justify-between px-16">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo/logo_web.png"
                    alt="Logo"
                    width={40} // Adjust width as needed for responsive sizing
                    height={40}
                    className="w-10 h-10" // Tailwind sizing for better control on smaller screens
                    unoptimized
                  />
                  <span className="ml-3 text-2xl sm:text-3xl font-semibold text-[#077998]">
                    Dev
                  </span>
                  <span className="ml-3 text-2xl sm:text-3xl font-semibold text-[#8A1D4F]">
                    Champions 
                  </span>
                </Link>
              </div>

              {/* LINKS */}

              <div className="hidden lg:flex items-center border-right ">
                <div className="flex justify-end space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900"
                          : "navlinks hover:text-black",
                        "px-3 py-4 rounded-md text-lg font-normal"
                      )}
                      aria-current={item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* <button className='hidden lg:flex justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'>Contact us</button> */}
              <Contactusform />
            </div>

            {/* DRAWER FOR MOBILE VIEW */}

            {/* DRAWER ICON */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            {/* DRAWER LINKS DATA */}

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export default Navbar;
