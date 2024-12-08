import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Menu",
    link: ["Home", "Popular", "About", "Contact"],
  },
  {
    id: 2,
    section: "Category",
    link: ["Design", "Mockup", "View all", "Log In"],
  },
  {
    id: 3,
    section: "Pages",
    link: ["404", "Instructions", "License","Meeting"],
  },
  {
    id: 4,
    section: "Others",
    link: ["Styleguide", "Changelog"],
  },
];

const Footer = () => {
  return (
    <div className="bg-black -mt-40" id="first-section">
      <div className="mx-auto max-w-2xl pt-48 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center leading-9 mb-4 lg:mb-20">
                <Image
                  src="/images/logo/logo_web_white.png"
                  alt="Logo"
                  width={60} // Adjust width as needed for responsive sizing
                  height={60}
                  className="w-18 h-18" // Ensures logo scales on smaller screens
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
                    src={"/images/footer/vec.svg"}
                    alt="facebook"
                    width={15}
                    height={20}
                  />
                </Link>
              </div>
              <div className="footer-icons">
              <Link href="https://wa.me/2349115034504">
                  <Image
                    src={"/images/footer/whatsapp.svg"}
                    alt="whatsapp"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
             
              <div className="footer-icons">
                <Link href="https://www.linkedin.com/in/promise-champion-a0020656/">
                  <Image
                    src={"/images/footer/linkedin.svg"}
                    alt="instagram"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            </div>

            <div className="mt-8 text-white">
              <p>Email: <a href="mailto:yourbusiness@example.com" className="underline">info@dev-champions.tech</a></p>
              <p>Phone: <a href="tel:+1234567890" className="underline">+234 9115 034 504</a></p>
            </div>
          </div>

          {/* COLUMN-2/3 */}
          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">
                {product.section}
              </p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className="mb-5">
                    <Link
                      href="/"
                      className="text-white text-lg font-normal mb-6 space-links"
                    >
                      {link}
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
