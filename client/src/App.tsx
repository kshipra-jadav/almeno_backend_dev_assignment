// import './index.css'
import FileUpload from "./components/FileUpload.tsx";
import ColourPreview from "./components/ColourPreview.tsx";
import { useState } from "react";
import { UrineStripColours } from "./utils/types.ts";

function App() {
  const [urineStripColours, setUrineStripColours] =
    useState<UrineStripColours>();

  return (
    <>
      <div className="text-6xl text-center">Urine Strip Analyzer</div>
      <div className="flex flex-row mt-5 w-full h-screen position: absolute">
        <FileUpload setUrineStripColours={setUrineStripColours} />
        {urineStripColours && (
          <ColourPreview UrineStripColours={urineStripColours} />
        )}
      </div>
    </>
  );
}

export default App;
