// import './index.css'
import FileUpload from "./components/FileUpload.tsx"
import ColourPreview from "./components/ColourPreview.tsx"

function App() {

  return (
    <>
      <div className="text-6xl text-center">
        Urine Strip Analyzer
      </div>
      <div className="flex flex-row mt-5 w-full h-screen position: absolute">
        <FileUpload />
        <ColourPreview />
      </div>
    </
    >
  )
}

export default App
