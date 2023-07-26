import Button from "@/component/button/Button";
import React from "react";

const Assesment = () => {
  return (
    <div className="setup-card relative top-1/2 -translate-y-1/2">
      <h1 className="text-center text-white text-2xl font-semibold">
        Quiz Assessment
      </h1>
      <div className="mt-6">
        <h1 className="text-gray-300 font-medium text-xl">Question 1</h1>
        <h3 className="text-md text-gray-100 pt-4 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, impedit.
        </h3>
        <div className="mt-10 flex flex-col">
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
        </div>
      </div>

      <Button>Next</Button>
    </div>
  );
};

export default Assesment;
