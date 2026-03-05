import { useState } from "react"
import poses from "./data/poses"
import Ballerina from "./components/Ballerina"
import MusicPlayer from "./components/MusicPlayer"

export default function App() {
  const [selectedPose, setSelectedPose] = useState("Ready to dance!")
  const [selectedDescription, setSelectedDescription] = useState("Click a pose to get started!")
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
        <Ballerina pose={selectedPose} />
        <p className="mt-4 text-gray-500 text-center max-w-xs">{selectedDescription}</p>     
      </div>

    </div>
  )
}