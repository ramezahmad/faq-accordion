import FAQ from "./components/FAQ";

import star from "./assets/images/icon-star.svg";
function App() {
  return (
    <div
      className="bg-desktop mobile:bg-mobile bg-no-repeat bg-contain max-w-screen flex justify-center font-sans"
    >
      <main className="bg-white rounded-xl px-10 mobile:px-7 py-6 mt-[18rem] mb-[5rem] w-[38rem] mobile:mt-[9rem] mobile:w-[23rem]">
        <header className="flex items-center gap-5 mb-2">
          <img src={star} alt="" />
          <h1 className="font-bold text-purple text-[4rem] mobile:text-[2.5rem]">FAQs</h1>
        </header>
        <ul>
          <FAQ />
        </ul>
      </main>
    </div>
  );
}

export default App;
