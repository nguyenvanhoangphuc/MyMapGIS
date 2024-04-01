// Import file HTML
import mapHtml from './index.html';

function OnlyMap() {

  return (
    <div>
      {/* Render file HTML bằng dangerouslySetInnerHTML */}
      <div 
        dangerouslySetInnerHTML={{
          __html: mapHtml
        }} 
      />
    </div>
  )
}

export default OnlyMap;