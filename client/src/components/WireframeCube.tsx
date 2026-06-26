export default function WireframeCube() {
  return (
    <div className="cube-scene mx-auto">
      <div className="cube">
        <div className="cube-face cube-face--front">FRONT</div>
        <div className="cube-face cube-face--back">BACK</div>
        <div className="cube-face cube-face--right">RIGHT</div>
        <div className="cube-face cube-face--left">LEFT</div>
        <div className="cube-face cube-face--top">TOP</div>
        <div className="cube-face cube-face--bottom">BOTTOM</div>
      </div>
    </div>
  )
}
