import FAQ from "./components/FAQ";

import star from "./assets/images/icon-star.svg";
function App() {
  return (
    <div
      className={`bg-desktop bg-no-repeat bg-contain max-w-screen flex justify-center font-sans`}
    >
      <main className="bg-white rounded-xl px-10 py-6 mt-[18rem] mb-[5rem] max-w-[38rem]">
        <header className="flex items-center gap-5 mb-2">
          <img src={star} alt="" />
          <h1 className="font-bold text-purple text-[4rem]">FAQs</h1>
        </header>
        <ul>
          <FAQ />
        </ul>
      </main>
    </div>
  );
}

export default App;
