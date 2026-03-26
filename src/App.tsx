import { useState } from 'react';
import { 
  FileText, 
  AlertTriangle, 
  Users, 
  Layers, 
  ArrowDown, 
  ListChecks, 
  Zap, 
  CheckCircle, 
  AlertCircle, 
  XCircle,
  ChevronRight,
  ChevronLeft,
  Play,
  Heart
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type SlideId = 'intro' | 'scenario1' | 'scenario2' | 'scenario3' | 'scenario4' | 'thanks';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    { id: 'intro', component: <IntroSlide onStart={() => setCurrentSlide(1)} /> },
    { id: 'scenario1', component: <Scenario1 /> },
    { id: 'scenario2', component: <Scenario2 /> },
    { id: 'scenario3', component: <Scenario3 /> },
    { id: 'scenario4', component: <Scenario4 /> },
    { id: 'thanks', component: <ThanksSlide /> },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden selection:bg-blue-500/30">
      {/* Header - Persistent Warning */}
      <header className="bg-slate-900/50 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 p-1.5 rounded-md shadow-lg shadow-blue-900/20">
              <FileText className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-slate-200 hidden sm:inline tracking-tight">公文會辦流程實務教學</span>
          </div>
          
          <div className="flex items-center space-x-2 bg-red-950/30 border border-red-900/50 px-3 py-1.5 rounded-full warning-pulse">
            <AlertTriangle className="text-red-500 w-3.5 h-3.5" />
            <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider">嚴格禁止：內會並會 + 內會並會</span>
          </div>
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8 relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="w-full max-w-5xl h-[75vh] md:h-[650px] relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 40, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -40, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 glass-panel rounded-[2.5rem] p-6 md:p-10 overflow-y-auto no-scrollbar shadow-2xl"
            >
              {slides[currentSlide].component}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="fixed bottom-10 left-0 right-0 flex justify-center items-center space-x-10 z-50">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-4 rounded-2xl shadow-xl transition-all duration-300 ${
              currentSlide === 0 
                ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-700/50' 
                : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 active:scale-90'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex space-x-3 items-center">
            {slides.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentSlide === idx ? 'w-10 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'w-2 bg-slate-700'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-4 rounded-2xl shadow-xl transition-all duration-300 ${
              currentSlide === slides.length - 1 
                ? 'bg-slate-800/50 text-slate-600 cursor-not-allowed border border-slate-700/50' 
                : 'bg-blue-600 text-white hover:bg-blue-500 border border-blue-500/50 active:scale-90 shadow-lg shadow-blue-900/20'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </main>

      {/* Progress Indicator */}
      <div className="fixed bottom-0 left-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-700 ease-out z-[60]" style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}></div>
    </div>
  );
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-full bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center space-y-3 group hover:border-blue-500/50 transition-colors cursor-pointer overflow-hidden relative min-h-[200px]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="bg-slate-700 p-4 rounded-full group-hover:bg-blue-500/20 transition-colors">
        <Play className="w-8 h-8 text-slate-500 group-hover:text-blue-400" />
      </div>
      <div className="text-center px-4">
        <p className="text-slate-400 font-medium group-hover:text-slate-200 transition-colors">{label}</p>
        <p className="text-[10px] text-slate-600 uppercase tracking-widest mt-1">點擊此處更換圖片 URL</p>
      </div>
      {/* 
        提示：若要加入真實圖片，請將此 <div> 替換為：
        <img src="您的圖片網址" alt={label} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
      */}
    </div>
  );
}

function IntroSlide({ onStart }: { onStart: () => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center space-y-10">
      <motion.div
        initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="bg-blue-600/20 p-8 rounded-[2.5rem] border border-blue-500/30 shadow-2xl shadow-blue-900/20"
      >
        <FileText className="w-20 h-20 text-blue-400" />
      </motion.div>
      
      <div className="space-y-6">
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight"
        >
          公文會辦流程<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">實務教學指南</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
        >
          本簡報將帶領您深入了解公文系統中的四種核心會辦情境，<br className="hidden md:block" />
          協助您精準掌握流轉邏輯，提升行政效率。
        </motion.p>
      </div>

      <motion.button
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={onStart}
        className="group flex items-center space-x-3 bg-blue-600 text-white px-10 py-5 rounded-[2rem] font-bold text-xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-900/40 active:scale-95 border border-blue-400/30"
      >
        <Play className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
        <span>開始進入課程</span>
      </motion.button>
    </div>
  );
}

function Scenario1() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">情境一</p>
          <h3 className="text-3xl font-bold text-white">內會並會 + 內會</h3>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <span className="text-sm text-slate-500">範例文號：</span>
          <span className="bg-slate-800 text-blue-400 px-4 py-2 rounded-xl font-mono font-bold border border-slate-700 shadow-inner">1150502684</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 shadow-inner">
            <div className="flex flex-col space-y-8">
              <div className="flex justify-center">
                <div className="bg-slate-800 border-2 border-blue-500 p-4 rounded-2xl shadow-lg w-64 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">主辦單位</p>
                  <p className="font-bold text-base text-white">工務一科 承辦人</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-blue-950/20 rounded-2xl border border-blue-900/30">
                  <h4 className="text-xs font-bold mb-4 text-blue-400 flex items-center uppercase tracking-wider">
                    <Users className="w-4 h-4 mr-2" /> 同科會辦 (內會並會)
                  </h4>
                  <div className="space-y-3 text-center">
                    <div className="bg-slate-800 p-3 rounded-xl text-xs border border-slate-700 text-slate-300">同科承辦人 A & B</div>
                    <ArrowDown className="text-blue-500/50 w-5 h-5 mx-auto" />
                    <div className="bg-blue-600/20 p-3 rounded-xl text-xs font-bold text-blue-400 border border-blue-500/30">直接送回主辦人</div>
                  </div>
                </div>

                <div className="p-5 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                  <h4 className="text-xs font-bold mb-4 text-slate-400 flex items-center uppercase tracking-wider">
                    <Layers className="w-4 h-4 mr-2" /> 跨科會辦 (二、三、四科)
                  </h4>
                  <div className="space-y-3 text-center">
                    <div className="bg-slate-800 p-3 rounded-xl text-xs border border-slate-700 text-slate-300">科長分文 → 會辦人撰擬</div>
                    <ArrowDown className="text-slate-600 w-5 h-5 mx-auto" />
                    <div className="bg-blue-600 p-3 rounded-xl text-xs font-bold text-white border border-blue-500 shadow-lg shadow-blue-900/20">科長核章後送回</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800">
            <h4 className="font-bold mb-4 flex items-center text-sm text-slate-300 uppercase tracking-widest">
              <ListChecks className="w-5 h-5 mr-2 text-blue-500" /> 實務重點
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
              <li className="flex items-start bg-slate-800/40 p-3 rounded-xl border border-slate-700/30">
                <span className="text-blue-500 font-bold mr-3 mt-0.5">01</span>
                同科流轉不需經過科長，可直接退回。
              </li>
              <li className="flex items-start bg-slate-800/40 p-3 rounded-xl border border-slate-700/30">
                <span className="text-blue-500 font-bold mr-3 mt-0.5">02</span>
                跨科會辦必須「內會」科長核章。
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ImagePlaceholder label="情境 1 流程示意圖" />
        </div>
      </div>
    </div>
  );
}

function Scenario2() {
  return (
    <div className="h-full flex flex-col justify-center space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">情境二</p>
          <h3 className="text-3xl font-bold text-white">內會並會</h3>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <span className="bg-emerald-950/30 text-emerald-400 px-4 py-2 rounded-xl font-bold border border-emerald-900/50 text-sm shadow-inner">簡化流程</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="bg-slate-900/50 rounded-[2.5rem] border border-slate-800 p-12 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          <Zap className="w-20 h-20 mx-auto text-emerald-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
          <h4 className="text-2xl font-bold text-white mb-6">流程核心差異</h4>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            此情境與「情境 1」邏輯一致，但為了提升效率，<br />
            <span className="text-emerald-400 font-bold text-2xl block mt-4">完全省略了「內會」的流轉環節。</span>
          </p>
          <div className="mt-10 p-5 bg-emerald-950/20 rounded-2xl border border-dashed border-emerald-900/50 text-sm text-emerald-300 font-medium">
            適用於：僅需平行單位知悉、不需主管核章之簡單公文。
          </div>
        </div>

        <ImagePlaceholder label="情境 2 流程示意圖" />
      </div>
    </div>
  );
}

function Scenario3() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">情境三</p>
          <h3 className="text-3xl font-bold text-white">並會 (跨單位)</h3>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <span className="text-sm text-slate-500">範例文號：</span>
          <span className="bg-slate-800 text-blue-400 px-4 py-2 rounded-xl font-mono font-bold border border-slate-700 shadow-inner">1150500684</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 shadow-inner">
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0">
              <div className="bg-slate-800 border-2 border-blue-500 p-4 rounded-2xl shadow-lg w-44 text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1 tracking-widest">主辦</p>
                <p className="font-bold text-base text-white">工務組</p>
              </div>
              
              <ChevronRight className="w-8 h-8 text-slate-700 hidden md:block" />
              
              <div className="flex flex-col space-y-3">
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-xs w-36 text-center text-slate-300">主計室</div>
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-xs w-36 text-center text-slate-300">綜企組</div>
                <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-xs w-36 text-center text-slate-300">水文組</div>
              </div>

              <ChevronRight className="w-8 h-8 text-slate-700 hidden md:block" />

              <div className="bg-blue-600 text-white p-6 rounded-[2rem] shadow-2xl w-64 border border-blue-400/30">
                <h4 className="text-[10px] font-bold opacity-70 mb-4 uppercase tracking-widest">內部處理程序</h4>
                <ol className="text-xs space-y-3">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-blue-200" /> 登記桌收文分派</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-blue-200" /> 科長派給會辦人</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-blue-200" /> 會辦人內會陳核</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-blue-200" /> 單位主管核章</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800 text-sm text-slate-400">
              <span className="font-bold block mb-2 text-blue-400 uppercase tracking-widest text-xs">分派機制</span>
              由各單位登記桌分派，可先分派給科長再由科長派給會辦人，或直接分派給會辦人。
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800 text-sm text-slate-400">
              <span className="font-bold block mb-2 text-blue-400 uppercase tracking-widest text-xs">層級核章</span>
              會辦人必須「內會陳核」至該單位的「單位主管」層級，方可送回主辦單位。
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ImagePlaceholder label="情境 3 流程示意圖" />
        </div>
      </div>
    </div>
  );
}

function Scenario4() {
  const steps = [
    { title: '1. 發起', desc: '綜企組 並會至 水源組、保育組' },
    { title: '2. 擴散', desc: '會辦人設定「內會並會」其他科' },
    { title: '3. 執行', desc: '各科會辦人內會陳核科長後送回' },
    { title: '4. 彙整', desc: '設定人內會陳核單位主管後送回' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest">情境四</p>
          <h3 className="text-3xl font-bold text-white">並會 + 內會並會</h3>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <span className="text-sm text-slate-500">範例文號：</span>
          <span className="bg-slate-800 text-blue-400 px-4 py-2 rounded-xl font-mono font-bold border border-slate-700 shadow-inner">1155303761</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 shadow-inner">
            <div className="flex flex-col space-y-5 max-md mx-auto">
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center space-x-4 group">
                  <div className="bg-blue-600 text-white w-24 py-2 rounded-xl font-bold text-xs text-center flex-shrink-0 shadow-lg shadow-blue-900/20 group-hover:bg-blue-500 transition-colors">
                    {step.title}
                  </div>
                  <div className="flex-grow h-px bg-slate-800"></div>
                  <div className="text-sm font-medium text-slate-300">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-950/20 border border-amber-900/30 p-5 rounded-2xl">
              <h5 className="text-amber-400 font-bold mb-2 flex items-center text-xs uppercase tracking-widest">
                <AlertCircle className="w-4 h-4 mr-2" /> 注意事項
              </h5>
              <p className="text-xs text-amber-500/80 leading-relaxed">
                涉及多層級流轉。設定「內會並會」時，務必確認路徑，避免公文迷路。
              </p>
            </div>
            <div className="bg-red-950/20 border border-red-900/30 p-5 rounded-2xl">
              <h5 className="text-red-400 font-bold mb-2 flex items-center text-xs uppercase tracking-widest">
                <XCircle className="w-4 h-4 mr-2" /> 系統限制
              </h5>
              <p className="text-xs text-red-400 font-bold leading-relaxed">
                嚴格禁止：內會並會 + 內會並會。<br />
                <span className="font-normal opacity-70">不支援在內會並會的子流程中再次發起內會並會。</span>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ImagePlaceholder label="情境 4 複雜流程圖" />
        </div>
      </div>
    </div>
  );
}

function ThanksSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center space-y-10">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="bg-red-500/20 p-8 rounded-[2.5rem] border border-red-500/30 shadow-2xl shadow-red-900/20"
      >
        <Heart className="w-20 h-20 text-red-500 fill-current" />
      </motion.div>
      
      <div className="space-y-6">
        <motion.h2 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter"
        >
          課程結束，謝謝大家！
        </motion.h2>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
        >
          希望這份教學能幫助您更順暢地處理公文會辦流程。<br className="hidden md:block" />
          若有任何疑問，請洽詢單位公文管理人員。
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="pt-10"
      >
        <div className="flex items-center space-x-3 text-slate-500 text-sm font-medium">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
            <Play className="w-4 h-4 rotate-180 fill-current" />
          </div>
          <span>點擊左下方按鈕可重新回顧</span>
        </div>
      </motion.div>
    </div>
  );
}
