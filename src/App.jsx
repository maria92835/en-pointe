import { useState } from "react"
import poses from "./data/poses"
import Ballerina from "./components/Ballerina"
import MusicPlayer from "./components/MusicPlayer"

export default function App() {
  const [selectedPose, setSelectedPose] = useState("Ready to dance!")
  const [selectedDescription, setSelectedDescription] = useState("Click a pose to get started!")
  const [costumeColor, setCostumeColor] = useState("#f472b6") 
  const [skinColor, setSkinColor] = useState("#fce4d6")   
  return (
    <div className="flex h-screen bg-pink-50">
      
      {/* Left panel - pose selector */}
      <div className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold text-pink-500 mb-4">Poses</h2>
        <ul>
          {poses.map(pose => (
            <li key={pose.id} className="mb-2">
              <button
                onClick={() => {
                  setSelectedPose(pose.name)
                  setSelectedDescription(pose.description)
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-gray-700 ${
                  selectedPose === pose.name
                    ? "bg-pink-400 text-white"
                    : "hover:bg-pink-100"
                }`}>
                {pose.name}
              </button>
            </li>
          ))}
        </ul>
        <MusicPlayer />
      </div>

      {/* Main stage area */}
      <div className="flex-1 flex flex-col items-center justify-center relative overflow-hidden"
        style={{background: "linear-gradient(180deg, #fce7f3 0%, #fdf2f8 88%, #d4a574 88%, #c4956a 100%)"}}>
        
        {/* Studio wall mirror line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-pink-200 opacity-50" />
        
        {/* Barre */}
        <div className="absolute w-full flex items-center" style={{bottom: "22%"}}>
          <div className="w-full h-3 bg-amber-700 rounded-full shadow-md" />
        </div>
        {/* Barre left post */}
        <div className="absolute w-4 bg-amber-800 rounded" style={{bottom: "0%", height: "22%", left: "15%"}} />
        {/* Barre right post */}
        <div className="absolute w-4 bg-amber-800 rounded" style={{bottom: "0%", height: "22%", right: "15%"}} />
        {/* Floor line */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-amber-900 opacity-30" />

        {/* Top content */}
        <div className="absolute top-8 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-pink-400 mb-2">En Pointe 🩰</h1>
          <p className="mt-2 text-gray-500 text-center max-w-xs">{selectedDescription}</p>
        </div>

        {/* Ballerina positioned at barre */}
        <div className="absolute" style={{bottom: "25%"}}>
          <Ballerina pose={selectedPose} costumeColor={costumeColor} skinColor={skinColor} />
        </div>

      </div>

      {/* Right panel - costume */}
      <div className="w-64 bg-white shadow-md p-4 flex flex-col gap-6">
        <div>
          <h2 className="text-xl font-bold text-pink-500 mb-4">🎨 Costume</h2>
          <p className="text-gray-500 text-sm mb-2">Tutu color</p>
          <div className="flex flex-wrap gap-2">
            {["#f472b6", "#a78bfa", "#60a5fa", "#34d399", "#f87171", "#fbbf24", "#ffffff", "#000000"].map(color => (
              <button
                key={color}
                onClick={() => setCostumeColor(color)}
                style={{ backgroundColor: color }}
                className={`w-8 h-8 rounded-full border-4 ${costumeColor === color ? "border-pink-500" : "border-gray-200"}`}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-gray-500 text-sm mb-2">Skin tone</p>
          <div className="flex flex-wrap gap-2">
            {["#fce4d6", "#f9c5a0", "#e8a87c", "#c68642", "#8d5524", "#4a2912"].map(color => (
              <button
                key={color}
                onClick={() => setSkinColor(color)}
                style={{ backgroundColor: color }}
                className={`w-8 h-8 rounded-full border-4 ${skinColor === color ? "border-pink-500" : "border-gray-200"}`}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}