import { useState } from "react"
import poses from "./data/poses"
import Ballerina from "./components/Ballerina"
import MusicPlayer from "./components/MusicPlayer"

export default function App() {
  const [selectedPose, setSelectedPose] = useState("Ready to dance!")
  const [selectedDescription, setSelectedDescription] = useState("Click a pose to get started!")
  const [costumeColor, setCostumeColor] = useState("#f472b6")    
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
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-pink-400 mb-8">En Pointe 🩰</h1>
        <Ballerina pose={selectedPose} costumeColor={costumeColor} />
        <p className="mt-4 text-gray-500 text-center max-w-xs">{selectedDescription}</p> 
        <div className="mt-6 flex flex-col items-center">
        <p className="text-pink-400 font-semibold mb-2">🎨 Costume Color</p>
        <div className="flex gap-2">
          {["#f472b6", "#a78bfa", "#60a5fa", "#34d399", "#f87171", "#fbbf24"].map(color => (
          <button
          key={color}
          onClick={() => setCostumeColor(color)}
          style={{ backgroundColor: color }}
          className={`w-8 h-8 rounded-full border-4 ${costumeColor === color ? "border-gray-800" : "border-transparent"}`}
          />
          ))}
        </div>
      </div> 
      </div>

    </div>
  )
}