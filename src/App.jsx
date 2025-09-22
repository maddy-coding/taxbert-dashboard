import { useState } from "react";
import "./App.css";
import { Icon } from "@iconify/react";

function App() {
  return (
    <>
      <div class="bg-gray-400 h-max">
        <div class="m-6">
          <div class="bg-cyan-700 w-max p-3 flex">
            <h2>minecloud</h2>
            <div>
              <ul className="flex  justify-between gap-2.5">
                <li class="flex  align-middle">
                  <Icon icon="mdi:file" className="text-2xl"></Icon>
                  <a href="#">Files</a>
                </li>

                <li class="flex align-middle">
                  <Icon icon="mdi:account" className="text-2xl"></Icon>
                  <a href="#">Activity</a>
                  
                </li>
                <li class="flex align-middle">
                  <Icon icon="mdi:home" className="text-2xl"></Icon>
                  <a href="#">Calendar</a>
                </li>
                <li class="flex align-middle">
                  <Icon icon="mdi:home" className="text-2xl"></Icon>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
