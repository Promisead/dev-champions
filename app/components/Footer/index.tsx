import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: { name: string; href: string }[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Menu",
    link: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "https://blogs.dev-champions.tech" }, // Updated Blog link
      { name: "Jobs", href: "https://jobs.dev-champions.tech" },
      { name: "Contact", href: "https://api.whatsapp.com/send/?phone=+2349115034504&text=Feel%20free%20to%20email%20us%20at%20info%40dev-champions.tech%20too" },
    ],
  },
  {
    id: 2,
    section: "Category",
    link: [
      { name: "Design", href: "/" },
      { name: "Mockup", href: "/" },
      { name: "View all", href: "/" },
      { name: "Log In", href: "https://blogs.dev-champions.tech/login" },
    ],
  },
  {
    id: 3,
    section: "Pages",
    link: [
      { name: "404", href: "/" },
      { name: "Instructions", href: "/" },
      { name: "License", href: "/" },
      { name: "Meeting", href: "/" },
    ],
  },
  {
    id: 4,
    section: "Others",
    link: [
      { name: "Styleguide", href: "/" },
      { name: "Changelog", href: "/" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-black -mt-40 z-20" id="first-section">
      <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Marquee Section */}
<div className="overflow-hidden whitespace-nowrap mt-10">
  <div className="inline-block animate-marquee">
    <span className="text-lg font-bold px-4 text-white">
      <span className="">Explore Our Blog posts:</span>{" "}
      <span >AI Innovations</span>,{" "}
      <span >Data Science & Analytics</span>,{" "}
      <span >Digital Agency Success Stories</span>,{" "}
      <span >E-commerce & Online Business</span>,{" "}
      <span >Events & Community Initiatives</span>,{" "}
      <span >Future of Technology</span>,{" "}
      <span >Software Development</span>,{" "}
      <span >Team Talks & Behind-the-Scenes</span>,{" "}
      <span >Tech Tutorials & How-Tos</span>,{" "}
      <span >UI/UX</span>,{" "}
      <span >Web Design</span>, and{" "}
      <span >Web3</span>. Discover expert insights and stay ahead with{" "}
      <Link
        href="https://dev-blogs.com"
        className="text-[orange] underline"
      >
        Dev Blogs
      </Link>{" "}
      today!
    </span>
  </div>
</div>

        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          
          {/* COLUMN-1 */}
          <div className="col-span-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center leading-9 mb-4 lg:mb-20">
                <Image
                  src="/images/logo/logo_web_white.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="w-18 h-18"
                  unoptimized
                />
                <h3 className="text-white text-3xl font-semibold leading-9 mx-4">
                  Dev Champions
                </h3>
              </Link>
            </div>

            <div className="flex gap-4">
              <div className="footer-icons">
                <Link href="https://facebook.com/DevChampions">
                  <Image
                    src="/images/footer/vec.svg"
                    alt="facebook"
                    width={15}
                    height={20}
                    unoptimized
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://wa.me/2349115034504">
                  <Image
                    src="/images/footer/whatsapp.svg"
                    alt="whatsapp"
                    width={20}
                    height={20}
                    unoptimized
                  />
                </Link>
              </div>
              <div className="footer-icons">
                <Link href="https://www.linkedin.com/in/promise-champion-a0020656/">
                  <Image
                    src="/images/footer/linkedin.svg"
                    alt="linkedin"
                    width={20}
                    height={20}
                    unoptimized
                  />
                </Link>
              </div>
            </div>

            <div className="mt-8 text-white">
              <p>
                Email:{" "}
                <a href="mailto:info@dev-champions.tech" className="underline">
                  info@dev-champions.tech
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+2349115034504" className="underline">
                  +234 9115 034 504
                </a>
              </p>
            </div>
          </div>

          {/* COLUMN-2/3 */}
          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
              <ul>
                {product.link.map((item, index) => (
                  <li key={index} className="mb-5">
                    <Link
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : "_self"} // Open external links in new tab
                      className="text-white text-lg font-normal mb-6 space-links"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* All Rights Reserved */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
        <p className="text-white">
        Loved our content? Leave us a review on
        <Link href="https://g.page/dev-champions/review" className="text-[yellow] underline"> Google</Link>.
      </p>
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className="text-center md:text-start text-offwhite text-lg">
                Dev Champions IT &copy; 2024 - All Rights Reserved
              </h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/">
                <h3 className="text-offwhite pr-6">Privacy policy</h3>
              </Link>
              <Link href="/">
                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">
                  Terms & conditions
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
