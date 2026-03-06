export default function Ballerina({ pose, costumeColor }) {
  return (
    <div className="flex flex-col items-center">
      <svg width="150" height="300" viewBox="0 0 150 300">
        {/* Head */}
        <circle cx="75" cy="40" r="20" fill="#f9c5d1" />
        {/* Body */}
        <rect x="60" y="60" width="30" height="80" rx="10" fill={costumeColor} />
        {/* Tutu */}
        <ellipse cx="75" cy="145" rx="50" ry="20" fill={costumeColor} />
        {/* Left leg */}
        <line x1="70" y1="140" x2="60" y2="220" stroke="#f9c5d1" strokeWidth="8" strokeLinecap="round"/>
        {/* Right leg */}
        <line x1="80" y1="140" x2="90" y2="220" stroke="#f9c5d1" strokeWidth="8" strokeLinecap="round"/>
        {/* Left arm */}
        <line x1="60" y1="75" x2="20" y2="110" stroke="#f9c5d1" strokeWidth="6" strokeLinecap="round"/>
        {/* Right arm */}
        <line x1="90" y1="75" x2="130" y2="110" stroke="#f9c5d1" strokeWidth="6" strokeLinecap="round"/>
      </svg>
      <p className="text-pink-400 mt-2 font-semibold">{pose}</p>
    </div>
  )
}