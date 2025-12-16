export function HeroSection() {
  return (
    <section>
      <div className="bg-contain bg-center bg-no-repeat bg-[url('https://assets.website-files.com/6458c625291a94a195e6cf3a/64b6f0467e818a18c75b6fa0_Group%2048105.svg')]">
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
          {/* Component */}
          <div className="flex min-h-screen flex-col justify-center mx-auto w-full max-w-3xl py-12 md:py-16 lg:py-20 gap-10">
            {/* Title */}
            <div className="flex flex-col items-center gap-y-5">
              <h1 className="text-center text-4xl font-bold md:text-6xl">
                Savor the Flavors of Culinary Excellence
              </h1>
              <p className="text-center text-gray-500 max-w-lg text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquampurus sit amet luctus venenatis, lectus
              </p>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="inline-block rounded-md bg-black px-6 py-3 text-center font-semibold text-white"
              >
                Get more customer
              </a>
              <a
                href="#"
                className="flex rounded-md items-center border border-solid border-black px-6 py-3 font-bold text-black"
              >
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a944888e6cf97_PlayCircle%20(1).svg"
                  alt=""
                  className="mr-2 inline-block max-h-4 w-5"
                />
                <p className="text-sm sm:text-base">Watch free demo</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
