import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans min-h-screen bg-bg-base text-secondary flex flex-col">
      <section id="center" className="flex flex-col gap-6 justify-center items-center flex-grow py-8 px-5 lg:py-8 lg:px-5 lg:gap-4.5">
        <div className="relative">
          <img src={heroImg} className="relative z-0 mx-auto w-[170px]" width="170" height="179" alt="" />
          <img 
            src={reactLogo} 
            className="absolute z-1 top-[34px] inset-x-0 mx-auto h-7 transform perspective-[2000px] rotate-z-[300deg] rotate-x-[44deg] rotate-y-[39deg] scale-[1.4]" 
            alt="React logo" 
          />
          <img 
            src={viteLogo} 
            className="absolute z-0 top-[107px] inset-x-0 mx-auto h-[26px] w-auto transform perspective-[2000px] rotate-z-[300deg] rotate-x-[40deg] rotate-y-[39deg] scale-[0.8]" 
            alt="Vite logo" 
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Get started</h1>
          <p className="text-slate-600">
            Edit <code className="bg-slate-100 p-1 rounded">src/App.jsx</code> and save to test <code className="bg-slate-100 p-1 rounded">HMR</code>
          </p>
        </div>
        <button
          className="text-base px-3 py-1.5 rounded-md text-primary bg-accent-bg border-2 border-transparent transition-colors duration-300 hover:border-accent-border focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 mb-6 cursor-pointer"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="relative w-full h-[1px] bg-slate-200 after:content-[''] after:absolute after:top-[-4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-slate-200 before:content-[''] before:absolute before:top-[-4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-slate-200"></div>

      <section id="next-steps" className="flex border-t border-slate-200 text-left lg:flex-col lg:text-center bg-white">
        <div id="docs" className="flex-1 p-8 border-r border-slate-200 lg:border-r-0 lg:border-b lg:px-5 lg:py-6">
          <svg className="mb-4 w-5.5 h-5.5 text-primary" role="presentation" aria-hidden="true text-secondary">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="text-xl font-bold mb-1">Documentation</h2>
          <p className="text-slate-500">Your questions, answered</p>
          <ul className="list-none p-0 flex gap-2 mt-8 lg:mt-5 lg:flex-wrap lg:justify-center">
            <li className="lg:flex-grow lg:basis-[calc(50%-8px)]">
              <a href="https://vite.dev/" target="_blank" className="text-secondary text-base rounded-md bg-slate-50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] lg:w-full lg:justify-center lg:box-border">
                <img className="h-[18px]" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li className="lg:flex-grow lg:basis-[calc(50%-8px)]">
              <a href="https://react.dev/" target="_blank" className="text-secondary text-base rounded-md bg-slate-50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] lg:w-full lg:justify-center lg:box-border">
                <img className="h-[18px] w-[18px]" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social" className="flex-1 p-8 lg:px-5 lg:py-6">
          <svg className="mb-4 w-5.5 h-5.5 text-primary" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="text-xl font-bold mb-1">Connect with us</h2>
          <p className="text-slate-500">Join the Vite community</p>
          <ul className="list-none p-0 flex gap-2 mt-8 lg:mt-5 lg:flex-wrap lg:justify-center">
            <li className="lg:flex-grow lg:basis-[calc(50%-8px)]">
              <a href="https://github.com/vitejs/vite" target="_blank" className="text-secondary text-base rounded-md bg-slate-50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] lg:w-full lg:justify-center lg:box-border">
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li className="lg:flex-grow lg:basis-[calc(50%-8px)]">
              <a href="https://chat.vite.dev/" target="_blank" className="text-secondary text-base rounded-md bg-slate-50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] lg:w-full lg:justify-center lg:box-border">
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li className="lg:flex-grow lg:basis-[calc(50%-8px)]">
              <a href="https://x.com/vite_js" target="_blank" className="text-secondary text-base rounded-md bg-slate-50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] lg:w-full lg:justify-center lg:box-border">
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li className="lg:flex-grow lg:basis-[calc(50%-8px)]">
              <a href="https://bsky.app/profile/vite.dev" target="_blank" className="text-secondary text-base rounded-md bg-slate-50 flex px-3 py-1.5 items-center gap-2 no-underline transition-shadow hover:shadow-[0_4px_10px_rgba(0,0,0,0.1)] lg:w-full lg:justify-center lg:box-border">
                <svg
                  className="h-[18px] w-[18px]"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="relative w-full h-[1px] bg-slate-200 after:content-[''] after:absolute after:top-[-4.5px] after:right-0 after:border-[5px] after:border-transparent after:border-r-slate-200 before:content-[''] before:absolute before:top-[-4.5px] before:left-0 before:border-[5px] before:border-transparent before:border-l-slate-200"></div>
      <section id="spacer" className="h-[88px] border-t border-slate-200 lg:h-12 bg-white"></section>
    </div>
  )
}

export default App
