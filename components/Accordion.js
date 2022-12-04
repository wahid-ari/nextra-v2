import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Accordion({ title, body }) {
  return (
    <div className="w-full mt-4">
      <div className="w-full rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex items-center justify-between align-middle w-full text-[15px] font-semibold text-left pl-4 pr-2 py-2 text-blue-500 rounded-lg !bg-blue-50 dark:!bg-neutral-900 dark:hover:!bg-neutral-800 hover:!bg-blue-100 transition-all duration-200">
                <span>{title}</span>
                <ChevronRightIcon
                  className={`${open ? 'transform rotate-90 transition-transform duration-300' : 'transition-transform duration-300'
                    } w-5 h-5 text-blue-500`}
                />
              </Disclosure.Button>
              <Transition
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-200 opacity-100"
                leaveTo="transform scale-95 opacity-0">
                <Disclosure.Panel className="py-3 text-base pl-4 pr-2">
                  {body}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}