export function ApproachSection() {
  return (
    <section>
      {/* Hero Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20">
        {/* Component */}
        <div className="grid items-center justify-items-start gap-8 sm:gap-16 md:grid-cols-2">
          {/* Hero Content */}
          <div className="flex flex-col">
            {/* Hero Divider */}
            <div className="mb-4 flex items-center">
              <div className="mr-4 w-10 border-t border-black"></div>
              <p className="text-sm font-medium sm:text-base">
                500+ Components
              </p>
            </div>
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl md:leading-tight">
              The Website You Want Without The Dev Time.
            </h1>
            <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            {/* Hero Info */}
            <div className="flex justify-between sm:justify-start sm:gap-8 lg:gap-12">
              <div className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9481ece6cf9c_Vector%20(9).svg"
                  alt=""
                  className="mr-1 inline-block sm:mr-2"
                />
                <p className="text-sm">Customers</p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9481ece6cf9c_Vector%20(9).svg"
                  alt=""
                  className="mr-1 inline-block sm:mr-2"
                />
                <p className="text-sm">24/7 Support</p>
              </div>
              <div className="flex items-center">
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9481ece6cf9c_Vector%20(9).svg"
                  alt=""
                  className="mr-1 inline-block sm:mr-2"
                />
                <p className="text-sm">Cloud-based</p>
              </div>
            </div>
          </div>
          {/* Hero Image */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
            alt=""
            className="inline-block h-full w-full max-w-2xl"
          />
        </div>
      </div>
    </section>
  )
}
