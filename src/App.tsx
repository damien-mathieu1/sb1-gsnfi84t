import React from 'react';

function App() {
  // Array of real flame GIFs
  const flameGifs = [
    "https://media.giphy.com/media/26BRx71hqRexBe7Wo/giphy.gif", // Large flame
    "https://media.giphy.com/media/xT0xeMA62E1XIlup68/giphy.gif", // Realistic fire
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXloaXpzZXd6b3RscmRpNmxtYjMxM2s0N3VsaWsxbTFmM3Fjbmh4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XqPHWAIkmWV0c/giphy.gif", // Burning flames
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXloaXpzZXd6b3RscmRpNmxtYjMxM2s0N3VsaWsxbTFmM3Fjbmh4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XqPHWAIkmWV0c/giphy.gif", // Fire wall
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHBkNHp6Z2dkcm40dWh6Y3dmbGkyMHNsMnl2OG45cmdxMHQ1d2t1OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBjhC0OdVK9FTws/giphy.gif", // Flame burst
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGVlajZvMDlndGk3N3NpeHFteHZ1NWlseDE1dG1jYWh1Y2prZmQ1dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4TMqcN59kg3Yc/giphy.gif", // Fire explosion
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGFhaGJneGNqOWVudnFlY2F6aXhsa2k4M3FkNWl3MjhtZmR4cmh4ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11yhfG1i0SPQyI/giphy.gif", // Flame background
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWlqejZ5aGw0dngyOGp1Z2xyN3BkNGs0Y2RyZnNrOWpvdW1scGhzaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lopx9eUi34rbq/giphy.gif", // Intense flames
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXloaXpzZXd6b3RscmRpNmxtYjMxM2s0N3VsaWsxbTFmM3Fjbmh4cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XqPHWAIkmWV0c/giphy.gif", // Repeat for more coverage
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzh3MTZzdTFuM2d5eXBucDZhNXB1aXV4bWZqemhtNW5raWk4a3hocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RIjXJ2cQHeHwTboXKf/giphy.gif", // Repeat for more coverage
    "https://media.giphy.com/media/xT0xeMA62E1XIlup68/giphy.gif", // Repeat for more coverage
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzh3MTZzdTFuM2d5eXBucDZhNXB1aXV4bWZqemhtNW5raWk4a3hocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RIjXJ2cQHeHwTboXKf/giphy.gif"  // Repeat for more coverage
  ];
  
  return (
    <div className="min-h-screen overflow-hidden relative flex flex-col items-center justify-center bg-black">
      {/* Flame GIFs positioned around the screen */}
      <div className="absolute inset-0 overflow-hidden">
        {flameGifs.map((gif, index) => {
          // Calculate position based on index
          // This creates a circular pattern around the center
          const angle = (index / flameGifs.length) * 2 * Math.PI;
          const radius = 40; // % from center
          const top = 50 + radius * Math.sin(angle);
          const left = 50 + radius * Math.cos(angle);
          
          // Randomize size for variety
          const size = 25 + (index % 3) * 10; // 25%, 35%, or 45% of viewport
          
          return (
            <div 
              key={index}
              className="absolute z-0 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                width: `${size}vw`,
                height: `${size}vw`,
                opacity: 0.85,
                mixBlendMode: 'screen',
                pointerEvents: 'none'
              }}
            >
              <img 
                src={gif} 
                alt="Flame" 
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(1.2) contrast(1.1)',
                  transform: `rotate(${index * 30}deg)` // Rotate each flame differently
                }}
              />
            </div>
          );
        })}
        
        {/* Additional flames at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 flex justify-between overflow-hidden">
          {[...Array(5)].map((_, index) => (
            <div 
              key={`bottom-${index}`}
              className="h-full"
              style={{ 
                width: '25%',
                transform: `translateY(${10 + index * 5}%)`,
                opacity: 0.9,
                mixBlendMode: 'screen',
                pointerEvents: 'none'
              }}
            >
              <img 
                src={flameGifs[index % flameGifs.length]} 
                alt="Bottom Flame" 
                className="w-full h-full object-cover"
                style={{
                  filter: 'brightness(1.3) contrast(1.2)',
                  transform: `scaleY(1.2) scaleX(${1 + index * 0.1})`
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Overlay to blend flames together */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-70"></div>
      </div>
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-black/50 z-0"></div>
      
      {/* Content */}
      <div className="z-10 flex flex-col items-center justify-center h-screen">
        {/* Logo Image */}
        <div className="w-4/5 max-w-md relative">
          <img 
            src="/eternitech.gif" 
            alt="Eternitech Logo" 
            className="w-full rounded-full shadow-2xl shadow-orange-500/50 border-4 border-orange-600/50"
          />
          
          {/* Stronger glow effect */}
          <div className="absolute -inset-4 rounded-full bg-orange-500/30 blur-xl -z-10 animate-pulse"></div>
          <div className="absolute -inset-8 rounded-full bg-orange-600/20 blur-2xl -z-20 animate-pulse" 
               style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Flame overlay on top of logo for extra effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full max-h-lg opacity-40 mix-blend-screen pointer-events-none">
          <img 
            src="https://media.giphy.com/media/26BRx71hqRexBe7Wo/giphy.gif" 
            alt="Flame Overlay" 
            className="w-full h-full object-cover rounded-full"
            style={{filter: 'hue-rotate(-10deg) brightness(1.3)'}}
          />
        </div>
      </div>
    </div>
  );
}

export default App;