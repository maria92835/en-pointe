export default function Ballerina({ pose, costumeColor, skinColor, hairColor }) {
  return (
    <div className="flex flex-col items-center">
      <img 
        src="/ballerina-first.png" 
        alt="Ballerina"
        style={{ height: "450px", objectFit: "contain" }}
      />
    </div>
  )
}