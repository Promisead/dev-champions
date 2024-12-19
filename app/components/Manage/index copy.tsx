"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";

const names = [
  {
    heading: "Basic Software Development",
    price: 29,
    user: "per user, per month",
    button: "Get Started",
    profiles: "Access to IT tutorials and resources",
    posts: "Basic software development tools",
    templates: "Email support",
    view: "Monthly performance reports",
    support: "Monthly performance reports",
    category: "yearly",
  },
  {
    heading: "Professional Web Design",
    price: 59,
    user: "per user, per month",
    button: "Get Started",
    profiles: "All features in the Basic Plan",
    posts: "Advanced web design services",
    templates: "Custom design templates",
    view: "Priority email and chat support",
    support: "Weekly performance reports",
    category: "yearly",
  },
  {
    heading: "Enterprise IT Tutorials",
    price: 99,
    user: "per user, per month",
    button: "Get Started",
    profiles: "All features in the Professional Plan",
    posts: "Dedicated account manager",
    templates: "Comprehensive IT tutorials",
    view: "On-site training and consultation",
    support: "VIP Support",
    category: "yearly",
  },
  {
    heading: "Advanced Data Science",
    price: 79,
    user: "per user, per month",
    button: "Get Started",
    profiles: "All features in the Professional Plan",
    posts: "Advanced data science solutions",
    templates: "AI-powered analytics",
    view: "Custom data models",
    support: "Priority email and chat support",
    category: "monthly",
  },
  {
    heading: "AI Solutions",
    price: 89,
    user: "per user, per month",
    button: "Get Started",
    profiles: "All features in the Professional Plan",
    posts: "Custom AI solutions",
    templates: "400+ Templated",
    view: "Machine learning models",
    support: "24/7 Support",
    category: "monthly",
  },
  {
    heading: "SEO Optimization",
    price: 49,
    user: "per user, per month",
    button: "Get Started",
    profiles: "SEO audits and reports",
    posts: "Keyword research",
    templates: "On-page optimization",
    view: "Link building strategies",
    support: "Monthly performance reports",
    category: "monthly",
  },
];

const Manage = () => {
  const [enabled, setEnabled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("yearly");

  const toggleEnabled = () => {
    setEnabled(!enabled);
    setSelectedCategory(enabled ? "monthly" : "yearly");
  };

  const filteredData = names.filter(
    (items) => items.category === selectedCategory
  );

  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl sm:py-20 lg:px-8 my-16">
        <h3 className="text-center text-4xl sm:text-65xl font-black">
          Manage All Your Social Media <br /> Profiles From One Place.
        </h3>

        <div className="md:flex md:justify-around mt-20">
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
              unoptimized
            />
            <h4 className="text-lg font-semibold">
              Get Started with a Free Consultation
            </h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
              unoptimized
            />
            <h4 className="text-lg font-semibold">
              Start Your Journey with Us Today
            </h4>
          </div>
          <div className="flex gap-5 justify-center md:justify-start">
            <Image
              src="/images/manage/right.svg"
              alt="right-icon"
              width={21}
              height={14}
              unoptimized
            />
            <h4 className="text-lg font-semibold">Cancel Anytime</h4>
          </div>
        </div>

        <div className="mt-6 relative">
          <div className="dance-text mb-5">get 3 months free</div>
          <Image
            src="/images/manage/toggle.svg"
            alt="toggle-image"
            width={24}
            height={24}
            className="toggleImage"
            unoptimized
          />
          <div className="flex justify-center">
            <h3 className="text-sm font-medium mr-5">Billed Yearly</h3>
            <Switch
              checked={enabled}
              onChange={toggleEnabled}
              className={`${
                enabled ? "bg-darkpurple" : "bg-darkpurple"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only text-black">Enable notifications</span>
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            <h3 className="text-sm font-medium ml-5">Billed Monthly</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16 mx-5 gap-14 manage">
          {filteredData.map((items, i) => (
            <div className="manageTabs text-center p-10" key={i}>
              <h4 className="text-2xl font-bold mb-3">{items.heading}</h4>
              <h2 className="text-5xl sm:text-65xl font-extrabold mb-3">
                ${items.price}
              </h2>
              <p className="text-sm font-medium text-darkgrey mb-6">
                {items.user}
              </p>
              <a
                href="#"
                onClick={() =>
                  window.open(
                    "https://calendly.com/dev-champions-info/30min",
                    "_blank"
                  )
                }
              >
                <button className="text-sm font-bold text-blue bg-transparent hover:bg-blue hover:text-white border-2 border-blue rounded-full py-4 px-12 mb-6">
                  {items.button}
                </button>
              </a>
              <hr style={{ color: "darkgrey", width: "50%", margin: "auto" }} />
              <h3 className="text-sm font-medium text-darkgrey mb-3 mt-6">
                {items.profiles}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.posts}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.templates}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.view}
              </h3>
              <h3 className="text-sm font-medium text-darkgrey mb-3">
                {items.support}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
