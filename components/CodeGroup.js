import { Tab } from "@headlessui/react";
import { AnimateSharedLayout, motion } from "framer-motion";
import cn from "clsx";

// https://github.com/mattrothenberg/tailwind-fancy-tab
export default function CodeGroup({ items, children, accentColor = "border-red-500" }) {
  return (
    <Tab.Group as="div" className="req-res my-4">
      <Tab.List className="flex items-center relative bg-blue-100/60 dark:bg-gray-700/75 rounded-t-xl " >
        <AnimateSharedLayout>
          {items.map((item, index) => (
            <Tab key={index + 1} as="div" className="group rounded">
              {({ selected }) => (
                <button className={cn("relative px-4 py-3 text-neutral-700 dark:text-neutral-200 text-[13px] font-medium",
                  `${selected ? '' : ""}`
                )}>
                  {item}
                  {selected && (
                    <motion.div
                      className={cn('absolute left-0 right-0 z-10 rounded-full h-[2px] bottom-0 border-b-2',
                        `${accentColor ? accentColor : "border-b-blue-500"}`
                      )}
                      layoutId="underline"
                      initial={false}
                    />
                  )}
                </button>
              )}
            </Tab>
          ))}
        </AnimateSharedLayout>
      </Tab.List>
      <Tab.Panels className="rounded-b-xl">
        {children}
      </Tab.Panels>
    </Tab.Group>
  )
}

CodeGroup.Item = ({ children, className }) => {
  return (
    <Tab.Panel className={className}>
      {children}
    </Tab.Panel>
  )
}