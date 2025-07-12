import React from 'react';

// Utility function to merge class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none h-72",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};

// Demo component with equal-sized items
const EqualBentoDemo = () => {
  return (
    <div className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
        Equal Size BentoGrid Layout
      </h1>

      <BentoGrid>
        <BentoGridItem
          title="First Item"
          description="This is the first item in our equal-sized BentoGrid layout. Both containers have the same dimensions."
          header={
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
          }
          icon={
            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
          }
        />

        <BentoGridItem
          title="Second Item"
          description="This is the second item in our equal-sized BentoGrid layout. Notice how both containers maintain the same height and width."
          header={
            <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-purple-200 dark:from-purple-900 dark:to-purple-800 to-purple-100"></div>
          }
          icon={
            <div className="w-6 h-6 rounded-full bg-purple-500"></div>
          }
        />
      </BentoGrid>
    </div>
  );
};

export default EqualBentoDemo;