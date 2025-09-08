You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
ruixen-accordian01.tsx
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  LayoutList,
  Settings,
  Accessibility,
} from "lucide-react";
import { ElementType } from "react";

type AccordionItemType = {
  icon: ElementType;
  value: string;
  question: string;
  answer: string;
};

const accordionItems: AccordionItemType[] = [
  {
    icon: HelpCircle,
    value: "item-1",
    question: "Is this an accordion component?",
    answer:
      "Yes. This is an accordion component built with Radix UI and styled with Tailwind CSS.",
  },
  {
    icon: LayoutList,
    value: "item-2",
    question: "How do I use this component?",
    answer:
      "You can use this component to organize content in collapsible sections. It's perfect for FAQs, settings panels, or any content that benefits from progressive disclosure.",
  },
  {
    icon: Settings,
    value: "item-3",
    question: "Can I customize the styling?",
    answer:
      "Absolutely! This component uses Tailwind CSS for styling, so you can easily customize the appearance by modifying the class names. The component is also built with accessibility in mind.",
  },
  {
    icon: Accessibility,
    value: "item-4",
    question: "Is it accessible?",
    answer:
      "Yes! This accordion component is built on top of Radix UI's Accordion primitive, which provides full keyboard navigation and proper ARIA attributes for screen readers.",
  },
];

export default function Accordion_01() {
  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-6">
      <Accordion type="single" collapsible className="space-y-3">
        {accordionItems.map(({ icon: Icon, value, question, answer }) => (
          <AccordionItem
            key={value}
            value={value}
            className="group border border-black/10 dark:border-white/10 rounded-md overflow-hidden transition-all duration-300"
          >
            <AccordionTrigger
              className="flex items-center justify-between w-full px-4 py-3 bg-transparent text-left group-data-[state=open]:bg-black/[0.04] dark:group-data-[state=open]:bg-white/[0.05] transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <Icon className="w-5 h-5 transition-colors duration-300 text-black/60 dark:text-white/60 group-data-[state=open]:text-black dark:group-data-[state=open]:text-white" />
                <span className="text-base font-medium text-black dark:text-white">
                  {question}
                </span>
              </div>
              {/* No chevron rotation */}
              <span className="text-xs text-black/40 dark:text-white/40 group-data-[state=open]:text-black dark:group-data-[state=open]:text-white">
                {value.toUpperCase()}
              </span>
            </AccordionTrigger>

            <AccordionContent className="relative px-4 py-3 text-sm text-black dark:text-white border-t border-black/10 dark:border-white/10 before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-black dark:before:bg-white before:opacity-0 group-data-[state=open]:before:opacity-100 transition-all duration-300">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}


demo.tsx
import Accordion_01 from "@/components/ui/ruixen-accordian01";

const DemoOne = () => {
  return <Accordion_01 />;
};

export { DemoOne };

```

Copy-paste these files for dependencies:
```tsx
ruixen.ui/accordian
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Info, Settings, Code, Accessibility } from "lucide-react";


const items = [
    {
        id: "1",
        icon: Info,
        title: "What is the core philosophy of Origin UI?",
        content:
            "Origin UI emphasizes developer experience by offering lightweight, accessible components with strong TypeScript support and excellent documentation.",
    },
    {
        id: "2",
        icon: Settings,
        title: "How do I customize styles in Origin UI?",
        content:
            "You can easily customize styles using CSS variables, Tailwind, or traditional CSS by overriding classNames or using the style prop.",
    },
    {
        id: "3",
        icon: Code,
        title: "How performant is Origin UI?",
        content:
            "Optimized for performance with minimal bundle size, tree shaking, and fast rendering to keep your apps light and fast.",
    },
    {
        id: "4",
        icon: Accessibility,
        title: "Is accessibility a priority in Origin UI?",
        content:
            "Absolutely! All components follow WAI-ARIA guidelines and support keyboard navigation and screen readers out of the box.",
    },
];

export const Component = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);
    const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const toggleItem = (id: string) => {
        setOpenItem((current) => (current === id ? null : id));
    };

  return (
        <div
            className="
        max-w-md
        bg-white/30 dark:bg-black/30
        backdrop-blur-md
        border border-gray-300 dark:border-gray-700
        rounded-lg
        shadow-lg shadow-black/20 dark:shadow-white/10
        transition-colors duration-500
      "
        >
            <h2 className="text-2xl font-extrabold text-black dark:text-white px-5 pt-5 select-none">
                FAQs
            </h2>

            <div>
                {items.map(({ id, icon: Icon, title, content }) => {
                    const isOpen = openItem === id;

                    return (
                        <div
                            key={id}
                            className="border-t border-gray-300 dark:border-gray-700 last:border-b-0"
                        >
                            <button
                                onClick={() => toggleItem(id)}
                                aria-expanded={isOpen}
                                className={`
                                    flex items-center justify-between w-full
                                    px-5 py-4
                                    text-black dark:text-white
                                    text-base font-medium
                                    cursor-pointer
                                    bg-transparent
                                    transition-colors duration-300
                                    hover:bg-black/5 dark:hover:bg-white/10
                                    select-none
                                    focus:outline-none
                                    `}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon
                                        className="w-4 h-4 text-black dark:text-white"
                                        strokeWidth={2}
                                        aria-hidden="true"
                                    />
                                    <span>{title}</span>
                                </div>

                                <div className="relative w-4 h-4 flex-shrink-0">
                                    <Plus
                                        className={`absolute inset-0 text-black dark:text-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                                            }`}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                    />
                                    <Minus
                                        className={`absolute inset-0 text-black dark:text-white transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
                                            }`}
                                        strokeWidth={2}
                                        aria-hidden="true"
                                    />
                                </div>
                            </button>

                            {/* Content wrapper */}
                            <motion.div
                                initial={false}
                                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                style={{ overflow: "hidden" }}
                            >
                                <div
                                    ref={(el) => {
                                        contentRefs.current[id] = el;
                                    }}
                                    className="px-5 pb-5 text-gray-700 dark:text-gray-300 text-sm leading-relaxed select-text"
                                >
                                    {content}
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
  );
};

```
```tsx
originui/accordion
"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-left font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        width={16}
        height={16}
        strokeWidth={2}
        className="shrink-0 opacity-60 transition-transform duration-200"
        aria-hidden="true"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };

```

Install NPM dependencies:
```bash
lucide-react, framer-motion, @radix-ui/react-icons, @radix-ui/react-accordion
```

Extend existing Tailwind 4 index.css with this code (or if project uses Tailwind 3, extend tailwind.config.js or globals.css):
```css
@import "tailwindcss";
@import "tw-animate-css";

@theme inline {
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-accordion-up: accordion-up 0.2s ease-out;
}


@keyframes accordion-down {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes accordion-up {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them

