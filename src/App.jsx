import Navbar from "./component/Navbar"
import images from "/images/illustration-devices.svg"

export default function App() {
  return (
    <main className="min-h-screen">
      <section className="px-10 py-4">
        {/* navbar */}
        <Navbar />
        {/* body */}
        <div className="flex flex-col-reverse sm:flex-row justify-between p-8 sm:ml-16 mt-4">
          <div className="flex flex-col gap-4 p-2 mt-8 sm:mt-0">
            <span className="inline-flex gap-1 text-GrayishBlue uppercase tracking-[.5rem]"><h1 className="px-2 text-white bg-VeryDarkBlue rounded-full tracking-normal">New</h1> Monograph Dashboard</span>
            <h1 className="sm:text-6xl text-4xl font-semibold text-VeryDarkBlue uppercase">Powerful insights into your team</h1>
            <p className="text-GrayishBlue text-xl sm:w-60">Project planning and time tracking for agile teams</p>
            <span className="flex flex-row gap-4 items-center">
              <button className="uppercase bg-Red px-4 py-2 text-white rounded-lg hover:bg-red-300 ">Schedule a demo</button>
              <p className="text-GrayishBlue uppercase tracking-[.25rem]">to see a live preview</p>
            </span>

          </div>
          <div className="bg-LightGrayishBlue rounded-lg">
            <img src={images} alt="" />
          </div>
        </div>

      </section>
    </main>
  )
}