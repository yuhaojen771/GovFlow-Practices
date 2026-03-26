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
  Play,
  Heart,
  Image as ImageIcon
} from 'lucide-react';
import { motion } from 'motion/react';

// === 自訂圖片引入區 ===
// 請確保截圖存於 src/assets 資料夾內，並與下方檔名一致，若不一樣請修改檔名：
import settingImg from './assets/005.jpg';
import errorImg from './assets/006.jpg';

export default function App() {
  const sections = [
    { id: 'intro', component: <IntroSlide /> },
    { id: 'scenario1', component: <Scenario1 /> },
    { id: 'scenario2', component: <Scenario2 /> },
    { id: 'scenario3', component: <Scenario3 /> },
    { id: 'scenario4', component: <Scenario4 /> },
    { id: 'thanks', component: <ThanksSlide /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-blue-500/30">

      {/* Main Content Area - Continuous Scroll */}
      <main className="flex-grow relative px-4 py-12 md:py-24 max-w-5xl mx-auto space-y-24 md:space-y-40">
        {/* Background Decorative Elements */}
        <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
        <div className="fixed bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        {sections.map((section) => (
          <motion.section
            key={section.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative z-10 border border-slate-800/50"
          >
            {section.component}
          </motion.section>
        ))}
      </main>
    </div>
  );
}

function ImagePlaceholder({ label, src }: { label?: string, src?: string }) {
  if (src) {
    return (
      <div className="w-full my-6 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group bg-slate-900/50 p-2">
        <img src={src} alt={label || '插入的圖片'} className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.02]" />
        {label && <p className="text-center text-sm font-bold text-slate-400 mt-4 mb-2">{label}</p>}
      </div>
    );
  }

  return (
    <div className="w-full my-6 bg-slate-800/10 rounded-2xl border-2 border-dashed border-slate-700/50 flex flex-col items-center justify-center space-y-4 py-16 group hover:border-blue-500/50 transition-colors cursor-pointer relative">
      <div className="bg-slate-800 p-4 rounded-full group-hover:bg-blue-500/20 transition-colors group-hover:scale-110 duration-300">
        <ImageIcon className="w-8 h-8 text-slate-500 group-hover:text-blue-400" />
      </div>
      <div className="text-center px-4 space-y-2">
        <p className="text-slate-300 font-bold text-lg">{label || '圖片區塊'}</p>
        <p className="text-xs text-slate-500 font-mono bg-slate-900 px-4 py-2 rounded-lg inline-block text-left break-all">
          {'<ImagePlaceholder src="圖片網址" label="圖片說明" />'}
        </p>
      </div>
    </div>
  );
}

function IntroSlide() {
  return (
    <div className="py-20 flex flex-col items-center justify-center text-center space-y-10 min-h-[70vh] relative">
      {/* Decorative animations */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 15, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 left-[10%] w-24 h-24 bg-blue-500/10 rounded-[2rem] border border-blue-500/20 blur-[2px] -z-10 hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 40, 0], scale: [1, 1.2, 1], rotate: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute bottom-20 right-[10%] w-32 h-32 bg-indigo-500/10 rounded-full border border-indigo-500/20 blur-[2px] -z-10 hidden md:block"
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
        className="bg-blue-600/20 p-8 rounded-[2.5rem] border border-blue-500/30 shadow-2xl shadow-blue-900/20 relative"
      >
        {/* Spinning dashed ring behind icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 border-2 border-dashed border-blue-500/40 rounded-[3rem] -z-10"
        ></motion.div>

        <FileText className="w-20 h-20 text-blue-400" />
      </motion.div>

      <div className="space-y-8 relative z-10">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-300 to-blue-400 tracking-tighter leading-tight pb-2 max-w-5xl mx-auto"
        >
          公文(內會)並會流程實務分享
        </motion.h1>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center space-x-4 bg-slate-900/60 px-8 py-3 rounded-full border border-slate-700/60 shadow-2xl backdrop-blur-sm"
        >
          <span className="text-base font-bold text-slate-400 tracking-widest uppercase">主講人</span>
          <span className="text-3xl font-black text-blue-400 tracking-wider">Tommy</span>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed pt-2"
        >
          本次分享將以<span className="text-blue-300 font-bold px-1">經濟部水利署</span>的真實案例來呈現各種會辦情境，<br className="hidden md:block" />
          往下捲動以開始閱讀。<br />
        </motion.p>
      </div>

      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 10, opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="pt-12"
      >
        <div className="w-10 h-16 rounded-full border-2 border-slate-600 flex justify-center pt-2 mx-auto relative overflow-hidden group">
          <div className="w-1.5 h-3 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></div>
        </div>
      </motion.div>
    </div>
  );
}

function Scenario1() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <p className="text-blue-400 text-base font-bold uppercase tracking-widest">情境一</p>
          <h3 className="text-4xl font-bold text-white">內會並會 + 內會</h3>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 shadow-inner">
          <div className="flex flex-col space-y-8">
            <div className="flex justify-center">
              <div className="bg-slate-800 border-2 border-blue-500 p-4 rounded-2xl shadow-lg w-72 text-center">
                <p className="text-sm font-bold text-slate-500 uppercase mb-1 tracking-widest">發起：內會並會</p>
                <p className="font-bold text-xl text-white">工務一科 承辦人</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-blue-950/20 rounded-2xl border border-blue-900/30">
                <h4 className="text-base font-bold mb-4 text-blue-400 flex items-center uppercase tracking-wider">
                  <Users className="w-5 h-5 mr-2" /> 同科會辦 (A&B)
                </h4>
                <div className="space-y-4 text-center">
                  <div className="bg-slate-800 p-3 rounded-xl text-base border border-slate-700 text-slate-300">同科承辦人 A & B 寫完意見</div>
                  <ArrowDown className="text-blue-500/50 w-6 h-6 mx-auto" />
                  <div className="bg-blue-600/20 p-3 rounded-xl text-base font-bold text-blue-400 border border-blue-500/30">會辦完畢，直接送回給承辦人</div>
                </div>
              </div>

              <div className="p-5 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                <h4 className="text-base font-bold mb-4 text-slate-400 flex items-center uppercase tracking-wider">
                  <Layers className="w-5 h-5 mr-2" /> 跨科研議 (二、三、四科)
                </h4>
                <div className="space-y-4 text-center">
                  <div className="bg-slate-800 p-3 rounded-xl text-base border border-slate-700 text-slate-300">科長進行會辦分文</div>

                  <div className="flex flex-col space-y-3 text-left">
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 text-base leading-relaxed">
                      <span className="text-blue-400 font-bold mb-1 block">方式 1：</span>
                      會辦人寫完意見 → <span className="text-blue-300 font-bold">內會陳核</span>給科長
                    </div>
                    <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 text-base leading-relaxed">
                      <span className="text-indigo-400 font-bold mb-1 block">方式 2：</span>
                      會辦人寫完意見 → <span className="text-indigo-300 font-bold">內會</span>給其他同仁 → 同仁再<span className="text-blue-300 font-bold">內會陳核</span>給科長
                    </div>
                  </div>

                  <ArrowDown className="text-slate-600 w-6 h-6 mx-auto" />
                  <div className="bg-slate-700 p-3 rounded-xl text-base font-bold text-white border border-slate-600 shadow-lg relative overflow-hidden">
                    再由科長送回給承辦人
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full my-8">
          <ImagePlaceholder label="情境 1 流程示意圖" />
        </div>

        <div className="bg-slate-900/40 p-8 rounded-3xl border border-slate-700/50 shadow-lg mb-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
          <h4 className="text-2xl font-bold text-white mb-4 flex items-center">
            <AlertTriangle className="w-7 h-7 mr-3 text-amber-500" /> 關鍵操作：設定「內會後送回」
          </h4>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            在系統中發起「內會並會」送出公文前，務必於送出畫面的下方設定 <span className="text-amber-400 font-bold px-1 bg-amber-950/30 rounded">內會後送回</span> 的對象。<br />
            若此欄位保留空白，系統將會跳出錯誤提示並阻擋流程送出，以防公文流轉結束後成為無主公文無法歸線。
          </p>

          <div className="space-y-6">
            <ImagePlaceholder src={settingImg} label="送出畫面設定「內會後送回」" />
            <ImagePlaceholder src={errorImg} label="錯誤提示：不能為空白" />
          </div>
        </div>

        <div className="bg-slate-900/30 p-6 rounded-2xl border border-slate-800">
          <h4 className="font-bold mb-5 flex items-center text-lg text-slate-300 uppercase tracking-widest">
            <ListChecks className="w-6 h-6 mr-2 text-blue-500" /> 實務重點
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 text-slate-400">
            <li className="flex flex-col bg-slate-800/40 p-6 rounded-2xl border border-slate-700/30 shadow-sm hover:border-slate-600 transition-colors">
              <div className="flex items-center mb-4">
                <span className="bg-blue-500/20 border border-blue-500/30 text-blue-400 font-bold px-3 py-1 rounded-lg text-sm mr-3 shadow-inner">觀念 01</span>
                <span className="text-white font-bold text-xl">同科與跨科的分流差異</span>
              </div>
              <p className="leading-relaxed text-lg">
                同科流轉較為扁平，研議完畢可直接送回原發起人；跨科則需嚴守組織層級，最終結論必須透過「<span className="text-blue-300 font-bold">內會陳核</span>」交由該科科長核准後，才能統一退回。
              </p>
            </li>
            <li className="flex flex-col bg-slate-800/40 p-6 rounded-2xl border border-slate-700/30 shadow-sm hover:border-slate-600 transition-colors">
              <div className="flex items-center mb-4">
                <span className="bg-blue-500/20 border border-blue-500/30 text-blue-400 font-bold px-3 py-1 rounded-lg text-sm mr-3 shadow-inner">觀念 02</span>
                <span className="text-white font-bold text-xl">科室內部的流轉彈性</span>
              </div>
              <p className="leading-relaxed text-lg">
                在跨科處理時，承辦人若需科內支援，可先利用「<span className="text-indigo-300 font-bold">內會</span>」功能與本科同仁串聯研擬意見，最後再交由最後一位同仁執行陳核，保持高度的作業彈性。
              </p>
            </li>
          </ul>
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
          <p className="text-emerald-400 text-base font-bold uppercase tracking-widest">情境二</p>
          <h3 className="text-4xl font-bold text-white">內會並會</h3>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-3">
          <span className="bg-emerald-950/30 text-emerald-400 px-4 py-2 rounded-xl font-bold border border-emerald-900/50 text-base shadow-inner">簡化流程</span>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        <div className="bg-slate-900/50 rounded-[2.5rem] border border-slate-800 p-12 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          <Zap className="w-20 h-20 mx-auto text-emerald-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
          <h4 className="text-3xl font-bold text-white mb-6">流程核心差異</h4>
          <p className="text-slate-400 text-xl leading-relaxed font-light">
            此情境與「情境 1」邏輯一致，但為了提升效率，<br />
            <span className="text-emerald-400 font-bold text-3xl block mt-4">完全省略了「內會」的流轉環節。</span>
          </p>
          <div className="mt-10 p-5 bg-emerald-950/20 rounded-2xl border border-dashed border-emerald-900/50 text-lg text-emerald-300 font-medium">
            適用於：僅需平行單位知悉、不需主管核章之簡單公文。
          </div>
        </div>

        <div className="w-full my-8">
          <ImagePlaceholder label="情境 2 流程示意圖" />
        </div>
      </div>
    </div>
  );
}

function Scenario3() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <p className="text-blue-400 text-base font-bold uppercase tracking-widest">情境三</p>
          <h3 className="text-4xl font-bold text-white">並會 (跨單位)</h3>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 shadow-inner">
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-8 md:space-y-0">
            <div className="bg-slate-800 border-2 border-blue-500 p-5 rounded-2xl shadow-lg w-56 text-center">
              <p className="text-sm font-bold text-slate-500 uppercase mb-1 tracking-widest">主辦</p>
              <p className="font-bold text-xl text-white">工務組</p>
            </div>

            <ChevronRight className="w-10 h-10 text-slate-700 hidden md:block flex-shrink-0" />

            <div className="flex flex-col space-y-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-base w-48 text-center text-slate-300">主計室</div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-base w-48 text-center text-slate-300">綜企組</div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-base w-48 text-center text-slate-300">水文組</div>
            </div>

            <ChevronRight className="w-10 h-10 text-slate-700 hidden md:block flex-shrink-0" />

            <div className="bg-blue-600 text-white p-8 rounded-[2rem] shadow-2xl w-80 border border-blue-400/30">
              <h4 className="text-sm font-bold opacity-80 mb-5 uppercase tracking-widest">內部處理程序</h4>
              <ol className="text-base space-y-4">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-blue-200" /> 登記桌收文分派</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-blue-200" /> 科長派給會辦人</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-blue-200" /> 會辦人內會陳核</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-blue-200" /> 單位主管核章</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="w-full my-8">
          <ImagePlaceholder label="情境 3 流程示意圖" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 text-lg text-slate-400">
            <span className="font-bold block mb-2 text-blue-400 uppercase tracking-widest text-sm">分派機制</span>
            由各單位登記桌分派，可先分派給科長再由科長派給會辦人，或直接分派給會辦人。
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800 text-lg text-slate-400">
            <span className="font-bold block mb-2 text-blue-400 uppercase tracking-widest text-sm">層級核章</span>
            會辦人必須「內會陳核」至該單位的「單位主管」層級，方可送回主辦單位。
          </div>
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
          <p className="text-blue-400 text-base font-bold uppercase tracking-widest">情境四</p>
          <h3 className="text-4xl font-bold text-white">並會 + 內會並會</h3>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 shadow-inner">
          <div className="flex flex-col space-y-5 max-md mx-auto">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center space-x-5 group">
                <div className="bg-blue-600 text-white w-32 py-3 rounded-xl font-bold text-base text-center flex-shrink-0 shadow-lg shadow-blue-900/20 group-hover:bg-blue-500 transition-colors">
                  {step.title}
                </div>
                <div className="flex-grow h-px bg-slate-800"></div>
                <div className="text-lg font-medium text-slate-300">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full my-8">
          <ImagePlaceholder label="情境 4 複雜流程圖" />
        </div>

        <div className="bg-amber-950/20 border border-amber-900/30 p-6 rounded-2xl">
          <h5 className="text-amber-400 font-bold mb-3 flex items-center text-sm uppercase tracking-widest">
            <AlertCircle className="w-5 h-5 mr-2" /> 注意事項
          </h5>
          <p className="text-base text-amber-500/80 leading-relaxed">
            涉及多層級流轉。設定「內會並會」時，務必確認路徑，避免公文迷路。
          </p>
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
        <div className="flex flex-col items-center space-y-3 text-slate-500 text-sm font-medium">
          <span>這是一個自由滾動的頁面，你可以隨時上下閱讀。</span>
          <p>若要在任一段落加入圖片，只需加入 <code className="bg-slate-800 px-2 py-1 rounded">{'<ImagePlaceholder src="圖片網址" label="圖片說明" />'}</code> 即可。</p>
        </div>
      </motion.div>
    </div>
  );
}
