import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

import Calendly from '../../meeting/calendly'

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: "About Us", href: "#aboutus-section", current: false },
    { name: "Services", href: "#services-section", current: false },
    { name: "Our Process", href: "#process", current: false },
    { name: "Blog", href: "#blog-section", current: false },
    { name: "Forms", href: "/forms", current: false },
    { name: "Jobs", href: "https://jobs.dev-champions.tech", current: false },
    { name: "Blog", href: "http://blogs.dev-champions.tech", current: false },
    
  /*  { name: "Testimonial", href: "#testimonial-section", current: false },
   */];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    const [isOpen, setIsOpen] = React.useState(false);
   
    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
      <>
        <div className="rounded-md max-w-sm w-full mx-auto z-50">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                       
                        <button onClick={openModal} className="bg-navyblue w-full hover:text-white text-white border border-purple font-medium py-2 px-4 rounded">
                        Book a call
                        </button>
                        {/* <Contactusform /> */}
                    </div>
                </div>
            </div>
        </div>

<Transition appear show={isOpen} as={Fragment}>
<Dialog as="div" className="relative z-50" onClose={closeModal}>
    <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
    >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
    </Transition.Child>

    <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Dialog.Panel className="md:w-[50%]  max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                   
                    <Calendly />
                </Dialog.Panel>
            </Transition.Child>
        </div>
    </div>
</Dialog>
</Transition>
      </>
    );
}

export default Data;
