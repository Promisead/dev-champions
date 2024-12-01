"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FAQ = () => {
  return (
    <div
      id="faq-section"
      className="mx-auto max-w-7xl py-24 lg:px-8 bg-faqblue rounded-2xl my-16 faq-bg"
    >
      <h3 className="text-xl font-normal text-white text-center mb-6">FAQ</h3>
      <h2 className="text-4xl lg:text-6xl font-semibold text-center text-white">
        Frequently asked <br /> questions.
      </h2>
      <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>Can you design my site or App?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  Absolutely! We design custom, user-friendly websites and Apps
                  <br /> tailored to your needs. Let's bring <br /> your vision
                  to life!
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>Can you code my site or mobile App?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  Absolutely! Our team of experienced developers can code your
                  site or mobile Apps <br />
                  from scratch or enhance your existing site
                  <br /> to meet your specific needs.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>Do you offer IT tutorials?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                  Yes, we provide comprehensive IT tutorials covering a wide
                  range of topics,
                  <br /> from basic computer skills to advanced programming{" "}
                  <br /> and data science.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6 mb-5">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>Can you help with SEO optimization?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                Definitely! Our SEO experts can optimize your website to improve  <br/>
                 search engine rankings, increase traffic,
                 <br/>and enhance your online presence.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>

        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white py-8 px-6">
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-2xl font-medium">
                  <span>Do you provide AI solutions? </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-black font-normal opacity-50">
                Yes, we specialize in developing custom AI solutions tailored to your business needs,
                  {" "}
                  <br /> including machine learning models, natural language processing,  <br /> and computer vision applications. 
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
