export function ServicesSection() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        {/* Title */}
        <p className="text-center text-sm font-bold uppercase">3 easy steps</p>
        <h2 className="text-center text-3xl font-bold md:text-5xl">Services</h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p>
        {/* Content */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
          {/* Item */}
          <div className="grid gap-4 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <p className="text-sm font-bold sm:text-xl">1</p>
            </div>
            <p className="text-xl font-semibold">Find Component</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
          {/* Item */}
          <div className="grid gap-4 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <p className="text-sm font-bold sm:text-xl">2</p>
            </div>
            <p className="text-xl font-semibold">Copy and Paste</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
          {/* Item */}
          <div className="grid gap-4 rounded-md border border-solid border-gray-300 p-8 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
              <p className="text-sm font-bold sm:text-xl">3</p>
            </div>
            <p className="text-xl font-semibold">Done</p>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
