import { useState } from "react"
import { Howl } from "howler"

const tracks = [
  { name: "Swan Lake", file: "/music/swan-lake.mp3" },
  { name: "Sylvia", file: "/music/sylvia.mp3" },
  { name: "The Nutcracker", file: "/music/nutcracker.mp3" },
]

let currentSound = null

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(null)

  function playTrack(track) {
    if (currentSound) {
      currentSound.stop()
    }
    if (playing === track.name) {
      setPlaying(null)
      return
    }
    currentSound = new Howl({ src: [track.file] })
    currentSound.play()
    setPlaying(track.name)
  }

  return (
    <div className="bg-white shadow-md p-4 mt-4">
      <h2 className="text-xl font-bold text-pink-500 mb-4">🎵 Music</h2>
      {tracks.map(track => (
        <button
          key={track.name}
          onClick={() => playTrack(track)}
          className={`w-full text-left px-3 py-2 rounded-lg mb-2 ${
            playing === track.name
              ? "bg-pink-400 text-white"
              : "hover:bg-pink-100 text-gray-700"
          }`}>
          {playing === track.name ? "⏸ " : "▶️ "}{track.name}
        </button>
      ))}
    </div>
  )
}