import React, { useState, useRef } from 'react';

const ADMIN_FRAMES = [
  {
    id: 'ai-summit-janakpur-2026-01',
    name: 'AI Summit Janakpur',
    url: '../../frame/frame.png',
    innerCutoutPercent: 76,
  },
  {
    id: 'ai-summit-janakpur-2026-svg',
    name: 'AI Summit Janakpur SVG',
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 100 100"><defs><path id="textTop" d="M 12,50 A 38,38 0 1,1 88,50" fill="none"/></defs><circle cx="50" cy="50" r="42" stroke="%2315803d" stroke-width="8" fill="none"/><circle cx="50" cy="50" r="46" stroke="%23166534" stroke-width="1.5" fill="none"/><path d="M 15 68 C 30 55, 70 55, 85 68 C 70 92, 30 92, 15 68 Z" fill="%23ffffff" stroke="%2315803d" stroke-width="2"/><text font-family="sans-serif" font-weight="900" font-size="5" fill="%2314532d" x="50" y="74" text-anchor="middle">AI SUMMIT</text><text font-family="sans-serif" font-weight="700" font-size="3" fill="%2315803d" x="50" y="78" text-anchor="middle">— JANAKPUR 2026 —</text><text font-family="sans-serif" font-size="1.8" fill="%23166534" x="50" y="81" text-anchor="middle">Explore • Learn • Innovate</text></svg>`,
    innerCutoutPercent: 76,
  },
  {
    id: 'ai-summit-janakpur-2026-02',
    name: 'AI Summit Frame 2',
    url: '../../frame/AI.png',
    innerCutoutPercent: 76,
  },
  {
    id: 'ai-summit-janakpur-2026-03',
    name: 'AI Summit Frame 3',
    url: '../../frame/AI2.png',
    innerCutoutPercent: 76,
  },
  {
    id: 'ai-summit-janakpur-2026-04',
    name: 'AI Summit Frame 4',
    url: '../../frame/AI3.png',
    innerCutoutPercent: 76,
  },
  {
    id: 'ai-summit-janakpur-2026-circuit',
    name: 'AI Summit Circuit',
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 100 100"><circle cx="50" cy="50" r="42" fill="none" stroke="%2315803d" stroke-width="6"/><circle cx="50" cy="50" r="37" fill="none" stroke="%2316a34a" stroke-width="1"/><line x1="50" y1="8" x2="50" y2="20" stroke="%2315803d" stroke-width="2"/><line x1="92" y1="50" x2="80" y2="50" stroke="%2315803d" stroke-width="2"/><line x1="50" y1="92" x2="50" y2="80" stroke="%2315803d" stroke-width="2"/><line x1="8" y1="50" x2="20" y2="50" stroke="%2315803d" stroke-width="2"/><text x="50" y="78" text-anchor="middle" font-size="4.5" font-family="sans-serif" font-weight="900" fill="%2314532d">AI SUMMIT</text><text x="50" y="83" text-anchor="middle" font-size="2.5" fill="%2315803d">JANAKPUR • 2026</text></svg>`,
    innerCutoutPercent: 72,
  },
  {
    id: 'ai-summit-janakpur-2026-gold',
    name: 'AI Summit Gold',
    url: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 100 100"><circle cx="50" cy="50" r="44" fill="none" stroke="%23d4af37" stroke-width="5"/><circle cx="50" cy="50" r="40" fill="none" stroke="%23facc15" stroke-width="2"/><text x="50" y="76" text-anchor="middle" font-family="sans-serif" font-size="5" font-weight="900" fill="%23b45309">AI SUMMIT</text><text x="50" y="81" text-anchor="middle" font-size="2.8" fill="%2392400e">JANAKPUR • 2026</text></svg>`,
    innerCutoutPercent: 75,
  },
];

export default function Frame() {
  const [profilePic, setProfilePic] = useState(null);
  const [selectedFrame, setSelectedFrame] = useState(ADMIN_FRAMES[0]);
  const [customFrames, setCustomFrames] = useState([]);
  const [profileZoom, setProfileZoom] = useState(100);
  const [frameSize, setFrameSize] = useState(92);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const fileInputRef = useRef(null);
  const frameInputRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const handleProfilePicChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === 'string') {
          setProfilePic(event.target.result);
          setPosition({ x: 0, y: 0 });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCustomFrameChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (typeof event.target?.result === 'string') {
          const newFrame = {
            id: `custom-${Date.now()}`,
            name: 'Uploaded PNG Frame',
            url: event.target.result,
            innerCutoutPercent: 78,
          };
          setCustomFrames((prev) => [...prev, newFrame]);
          setSelectedFrame(newFrame);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDown = (e) => {
    if (!profilePic) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    if (!profilePic || e.touches.length !== 1) return;
    setIsDragging(true);
    const touch = e.touches[0];
    dragStartRef.current = { x: touch.clientX - position.x, y: touch.clientY - position.y };
  };

  const handleTouchMove = (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStartRef.current.x,
      y: touch.clientY - dragStartRef.current.y,
    });
  };

  const handleDownload = () => {
    if (!profilePic || !selectedFrame) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasSize = 2000;
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    const containerWidth = container.clientWidth;
    const scaleRatio = canvasSize / containerWidth;
    const baseImg = new Image();
    const frameImg = new Image();

    baseImg.onload = () => {
      ctx.clearRect(0, 0, canvasSize, canvasSize);
      ctx.save();
      const fScale = frameSize / 100;
      const fWidth = canvasSize * fScale;
      const innerRatio = (selectedFrame.innerCutoutPercent ?? 78) / 100;
      const maskRadius = (fWidth * innerRatio) / 2;
      ctx.beginPath();
      ctx.arc(canvasSize / 2, canvasSize / 2, maskRadius, 0, Math.PI * 2);
      ctx.clip();
      const pScale = (profileZoom / 100) * fScale;
      const pW = canvasSize * pScale;
      const pH = canvasSize * pScale;
      const offsetX = position.x * scaleRatio;
      const offsetY = position.y * scaleRatio;
      const pX = (canvasSize - pW) / 2 + offsetX;
      const pY = (canvasSize - pH) / 2 + offsetY;
      ctx.drawImage(baseImg, pX, pY, pW, pH);
      ctx.restore();

      frameImg.onload = () => {
        const fX = (canvasSize - fWidth) / 2;
        const fY = (canvasSize - fWidth) / 2;
        ctx.drawImage(frameImg, fX, fY, fWidth, fWidth);
        const link = document.createElement('a');
        link.download = 'ai-summit-framed-profile.png';
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
      };
      frameImg.src = selectedFrame.url;
    };
    baseImg.src = profilePic;
  };

  const allFrames = [...ADMIN_FRAMES, ...customFrames];
  const activeCutout = selectedFrame?.innerCutoutPercent ?? 78;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-8 flex items-center justify-center font-sans antialiased select-none pt-2 md:pt-4">
      <canvas ref={canvasRef} className="hidden" />

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 space-y-6">
          <h2 className="text-xl font-bold text-slate-900">Frame Controls</h2>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600 block">1. Profile Photo</label>
            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleProfilePicChange} className="hidden" />
            {!profilePic ? (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-200 hover:border-emerald-500 bg-slate-50/50 rounded-xl p-6 text-center cursor-pointer transition flex flex-col items-center justify-center min-h-[100px]"
              >
                <span className="text-sm font-medium text-emerald-600">Click to upload photo</span>
                <span className="text-xs text-slate-400 mt-1">PNG, JPG up to 10MB</span>
              </div>
            ) : (
              <div className="border border-slate-200 bg-slate-50/50 rounded-xl p-3 flex items-center justify-between">
                <span className="text-xs text-slate-600 font-medium">Image loaded</span>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-xs font-semibold text-emerald-600 hover:text-emerald-700"
                >
                  Change Image
                </button>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-600">Profile Zoom ({profileZoom}%)</label>
              </div>
              <input
                type="range"
                min="50"
                max="250"
                value={profileZoom}
                onChange={(e) => setProfileZoom(Number(e.target.value))}
                className="w-full accent-emerald-600 h-1 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-slate-600">Frame Scale ({frameSize}%)</label>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={frameSize}
                onChange={(e) => setFrameSize(Number(e.target.value))}
                className="w-full accent-emerald-600 h-1 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-600">2. Frame Design</label>
              <input type="file" accept="image/png" ref={frameInputRef} onChange={handleCustomFrameChange} className="hidden" />
              <button
                onClick={() => frameInputRef.current?.click()}
                className="text-xs text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                + Upload Custom Frame (.png)
              </button>
            </div>

            <div className="grid grid-cols-3 gap-3 max-h-[180px] overflow-y-auto pr-1">
              {allFrames.map((frame) => {
                const isSelected = selectedFrame?.id === frame.id;
                return (
                  <button
                    key={frame.id}
                    onClick={() => setSelectedFrame(frame)}
                    className={`p-2 rounded-xl border flex flex-col items-center space-y-1 transition bg-slate-50 ${
                      isSelected ? 'border-emerald-600 ring-2 ring-emerald-600/10' : 'border-slate-200'
                    }`}
                  >
                    <div className="w-12 h-12 relative flex items-center justify-center">
                      <img src={frame.url} alt={frame.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <span className="text-[10px] font-medium text-slate-700 truncate w-full text-center">{frame.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-slate-900">Preview</h2>
            <span className="text-[11px] bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md font-medium">
              Output: 2000×2000 PNG
            </span>
          </div>

          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            className={`bg-white rounded-xl border border-slate-200 aspect-square flex items-center justify-center relative overflow-hidden shadow-sm ${
              profilePic ? 'cursor-grab active:cursor-grabbing' : ''
            }`}
          >
            {!profilePic ? (
              <p className="text-sm text-slate-400 text-center max-w-[200px]">
                Upload a photo to align with the frame
              </p>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <div
                  style={{
                    width: `${frameSize * (activeCutout / 100)}%`,
                    height: `${frameSize * (activeCutout / 100)}%`,
                  }}
                  className="absolute rounded-full overflow-hidden flex items-center justify-center transition-all duration-75"
                >
                  <div
                    style={{
                      transform: `translate(${position.x}px, ${position.y}px) scale(${profileZoom / 100})`,
                      transformOrigin: 'center center',
                    }}
                    className="w-full h-full transition-transform duration-75 origin-center"
                  >
                    <img
                      src={profilePic}
                      alt="User uploaded profile"
                      draggable={false}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  </div>
                </div>

                {selectedFrame && (
                  <div
                    style={{ transform: `scale(${frameSize / 100})` }}
                    className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center transition-transform duration-75"
                  >
                    <img
                      src={selectedFrame.url}
                      alt="Active frame"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="bg-zinc-900/70 text-white text-[10px] font-medium px-2.5 py-1 rounded-md backdrop-blur-sm">
                    Drag to adjust position
                  </span>
                </div>
              </div>
            )}
          </div>

          <button
            disabled={!profilePic || !selectedFrame}
            onClick={handleDownload}
            className={`w-full py-3 px-4 font-semibold text-sm rounded-xl transition text-center ${
              profilePic && selectedFrame
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md cursor-pointer'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            Download HD Frame (2000×2000)
          </button>
        </section>
      </div>
    </div>
  );
}
