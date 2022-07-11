import React, { useEffect } from "react";
import DownloadBtn from "../components/DownloadBtn";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  });

  return (
    <section className="pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="font-bold text-2xl pb-4">About the App</h2>
        <p>
          <strong>IdentiPlant</strong> is a smartphone app that can identify herbal plants by scanning images of them.
          Content and description of plants are accurate, including their use, name, scientific name, and advantages. You may
          quickly identify the plants you want to buy using this app. It will also aid you to learn and expand your knowledge
          of herbal plants. Do you want to take herbal plants but aren't sure what to use or what benefits they provide?
          Then, this plant identifier is simple to use and efficient. The IdentiPlant team hopes to develop a user-friendly
          application that will assist herbalists in quickly identifying and comprehending the plants they require.
        </p>

        <h3 className="font-bold text-lg pt-5 pb-2">Key Features:</h3>
        <ul className="list-disc">
          <li className="ml-4">
            Obtain precise information on how to use the herbs and their benefits. Also gain a better understanding of herbal
            plants.
          </li>
          <li className="ml-4">Recognise herbal plants by scanning target images.</li>
          <li className="ml-4">User-friendly interface provides scanning hints and recommendations.</li>
          <li className="ml-4">Text-to-speech functionality.</li>
        </ul>

        <h3 className="font-bold text-lg pt-5 pb-2">How to Use:</h3>
        <ol className="list-decimal">
          <li className="ml-4">In the home screen press the scan now button. It will use your phone’s camera.</li>
          <li className="ml-4">Find and scan the target image of the herbal plant.</li>
          <li className="ml-4">It will show a 3D model of scanned herbal plant and it’s description.</li>
          <li className="ml-4">Press the benefits button to navigate see more details about the scanned herbal plant.</li>
        </ol>

        <h3 className="font-bold text-lg pt-5">Download the App</h3>
        <small className="text-gray-800">
          Note: Only for Android Devices. Augmented Reality will only work in Myranel's Plant Shop.
        </small>
        <div className="pt-4">
          <DownloadBtn />
        </div>
      </div>
    </section>
  );
};

export default About;
