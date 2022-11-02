import { NextPage } from "next";
import { useGeolocation } from "../src/hooks/useGeolocation";

const Home: NextPage = () => {
  const { position, getCurrentPosition } = useGeolocation();

  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <header className="border-b mb-8">
        <div className="max-w-screen-2xl flex justify-between items-center px-4 md:px-8 mx-auto my-4">
          <a
            href="/"
            className="text-gray-500 inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
          >
            E-SInt
          </a>
        </div>
      </header>

      <section className="max-w-screen-2xl px-4 md:px-8 mx-auto mt-12 sm:mt-0">
        <div className="flex flex-wrap justify-between mb-20 md:mb-16">
          <div className="w-full lg:w-1/3 flex flex-col justify-center lg:pt-48 lg:pb-24 mb-12 lg:mb-0">
            <h1 className="text-black-800 text-6xl font-bold mb-8 hidden md:block">
              Exchange-
              <br />
              Self Introduction
            </h1>
            <h1 className="text-black-800 text-6xl font-bold mb-8 block md:hidden">
              E-SInt
            </h1>

            <p className="max-w-md text-gray-500 xl:text-lg leading-relaxed">
              自分の自己紹介カードを作成し、同じ空間にいる人の自己紹介カードを一括で入手できるアプリケーション
            </p>
            <div className="pt-8">
              <div
                className="inline-flex items-center px-8 py-3 text-white transition bg-gray-900 rounded-full shadow-lg focus:outline-none focus:ring focus:bg-teal-600 hover:bg-gray-800"
                onClick={() => getCurrentPosition()}
              >
                <span className="text-sm font-medium"> 位置情報取得　↓ </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex mb-12">
            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden relative z-10 top-12 md:top-16 left-12 md:left-16 -ml-12 lg:ml-0">
              <img
                src="https://images.unsplash.com/photo-1542340916-951bb72c8f74?auto=format&q=75&fit=crop&w=550&h=550"
                loading="lazy"
                alt="Photo by Kaung Htet"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586295166487-b265f7e83a7f?auto=format&q=75&fit=crop&w=550&h=550"
                loading="lazy"
                alt="Photo by Manny Moreno"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex justify-center lg:justify-start items-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://github.com/Hasegawa-Akito/self-introduction-app"
                target="_blank"
                className="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 45 16"
                  width="45"
                  height="16"
                >
                  <path d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 00-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
