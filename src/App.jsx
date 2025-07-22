import React, { useEffect, useState } from "react";
import IntroSlider from "./components/IntroSlider";
import Lobby from "./components/Lobby";

function App() {
  const [started, setStarted] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.ready();
      const initData = tg.initDataUnsafe;
      if (initData?.user) {
        setUser(initData.user);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      {!started ? (
        <IntroSlider onStart={() => setStarted(true)} user={user} />
      ) : (
        <Lobby user={user} />
      )}
    </div>
  );
}

export default App;