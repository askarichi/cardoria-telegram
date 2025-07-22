import React from "react";

const slides = [
  {
    title: "Welcome to Cardoria",
    text: "In a realm torn by magic and war, powerful beings are sealed within ancient cards...",
  },
  {
    title: "Summon Legends",
    text: "Collect cards, summon ancient heroes, and evolve them into unstoppable forces.",
  },
  {
    title: "Compete for Glory",
    text: "Battle rivals, grow your power, and become the Master of Cardoria.",
  },
];

function IntroSlider({ onStart, user }) {
  const [index, setIndex] = React.useState(0);

  const next = () => {
    if (index < slides.length - 1) setIndex(index + 1);
    else onStart();
  };

  return (
    <div className="p-6 flex flex-col justify-center items-center text-center h-screen">
      <h1 className="text-3xl font-bold mb-4">{slides[index].title}</h1>
      <p className="mb-8 text-lg text-gray-300 max-w-md">{slides[index].text}</p>
      <button
        onClick={next}
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-xl text-lg"
      >
        {index < slides.length - 1 ? "Next" : "Enter Cardoria"}
      </button>
    </div>
  );
}

export default IntroSlider;