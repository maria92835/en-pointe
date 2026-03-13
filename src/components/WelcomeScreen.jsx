export default function WelcomeScreen({ onEnter }) {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center"
      style={{background: "linear-gradient(180deg, #fce7f3 0%, #fdf2f8 70%, #f9a8d4 100%)"}}>
      
      {/* Title */}
      <h1 className="text-8xl font-light text-pink-400 mb-2 tracking-widest"
        style={{fontFamily: "Cormorant Garamond, serif"}}>
        En Pointe
      </h1>
      
      {/* Subtitle */}
      <p className="text-lg text-pink-300 tracking-widest uppercase mb-2"
        style={{fontFamily: "Montserrat, sans-serif", fontWeight: 300}}>
        Your beginner's guide to ballet
      </p>

      {/* Ballerina emoji */}
      <div className="text-8xl my-8">🩰</div>

      {/* Enter button */}
      <button
        onClick={onEnter}
        className="mt-4 px-12 py-3 border border-pink-300 text-pink-400 tracking-widest uppercase text-sm hover:bg-pink-100 transition-all"
        style={{fontFamily: "Montserrat, sans-serif", fontWeight: 300}}>
        Begin
      </button>

    </div>
  )
}