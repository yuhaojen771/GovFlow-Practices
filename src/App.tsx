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
export default function App() {
  const sections = [
    { id: 'intro', component: <IntroSlide /> },
    { id: 'scenario1', component: <Scenario1 /> },
    { id: 'scenario2', component: <Scenario2 /> },
    { id: 'scenario3', component: <Scenario3 /> },
    { id: 'scenario4', component: <Scenario4 /> },
    { id: 'scenario5', component: <Scenario5 /> },
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
    // 處理 Vite base path 問題：若為絕對路徑，加上 import.meta.env.BASE_URL
    // @ts-ignore
    const finalSrc = src.startsWith('/') ? `${(import.meta as any).env.BASE_URL}${src.slice(1)}` : src;
    return (
      <div className="w-full my-6 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group bg-slate-900/50 p-3 md:p-4">
        {label && <div className="mb-3 px-1"><span className="text-xl font-bold text-slate-300 flex items-center before:content-[''] before:w-1.5 before:h-6 before:bg-blue-500 before:mr-3 before:rounded-full">{label}</span></div>}
        <img src={finalSrc} alt={label || '插入的圖片'} className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-[1.02]" />
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
          {'<ImagePlaceholder src="/images/檔名.jpg" label="圖片說明" />'}
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
          本次分享將以<span className="text-blue-300 font-bold px-1">經濟部水利署</span>的真實案例來呈現各種會辦情境
          <span className="block mt-12 mb-8">
            特別感謝<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-black px-1">Google Gemini</span>、<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-black px-1">Google Antigravity</span>
          </span>
          往下捲動以開始閱讀
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

function Scenario2() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <p className="text-blue-400 text-base font-bold uppercase tracking-widest">情境二</p>
          <h3 className="text-4xl font-bold text-white">內會並會 + 內會</h3>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        <ImagePlaceholder src="/images/015.jpg" label="本文簽辦內容" />
        <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800 shadow-inner my-8">
          <h4 className="text-2xl font-bold text-white mb-4">內容懶人包</h4>
          <p className="text-lg text-slate-300 font-bold mb-3">【115年度工務行政督導作業籌備】</p>
          <ul className="space-y-3 text-lg text-slate-400 list-disc list-inside ml-2 marker:text-blue-500">
            <li>辦理項目： 年度行政督導及宣導作業。</li>
            <li className="flex flex-col">
              <span>需更新資料：</span>
              <ul className="list-[circle] list-inside ml-6 mt-2 space-y-2">
                <li>115年度工務行政督導重點項目表。</li>
                <li>115年工務組工務行政宣導簡報。</li>
              </ul>
            </li>
            <li>繳交期限： 115年3月3日 (二) 下班前。</li>
            <li>彙整單位： 第一科。</li>
          </ul>
        </div>

        <FlowchartAccordion>
          <div className="flex flex-col space-y-8">
            <div className="flex justify-center">
              <div className="bg-slate-800 border-2 border-blue-500 p-4 rounded-2xl shadow-lg w-72 text-center">
                <p className="text-sm font-bold text-slate-500 uppercase mb-1 tracking-widest">發起：內會並會</p>
                <p className="font-bold text-xl text-white">工程事務一科 承辦人</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                <h4 className="text-base font-bold mb-4 text-slate-400 flex items-center uppercase tracking-wider">
                  <Users className="w-5 h-5 mr-2" /> 內會並會 (同科)
                </h4>
                <div className="space-y-4 text-center">
                  <div className="bg-slate-800 p-3 rounded-xl text-base border border-slate-700 text-slate-300">同科承辦人 A & B 寫完意見</div>
                  <ArrowDown className="text-slate-600 w-6 h-6 mx-auto" />
                  <div className="bg-slate-700 p-3 rounded-xl text-base font-bold text-white border border-slate-600 shadow-lg relative overflow-hidden">會辦完畢，直接送回給承辦人</div>
                </div>
              </div>

              <div className="p-5 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                <h4 className="text-base font-bold mb-4 text-slate-400 flex items-center uppercase tracking-wider">
                  <Layers className="w-5 h-5 mr-2" /> 內會並會 (二、三、四科)
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
        </FlowchartAccordion>

        <div className="w-full my-8">
          <ImagePlaceholder src="/images/016.jpg" label="流程" />
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
            <ImagePlaceholder src="/images/22.jpg" label="送出畫面設定「內會後送回」" />
            <ImagePlaceholder src="/images/2223.jpg" label="錯誤提示：不能為空白" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowchartAccordion({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  return (
    <div className="bg-slate-900/50 rounded-3xl border border-slate-800 shadow-inner overflow-hidden mt-8 transition-all duration-500">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-col md:flex-row items-center md:items-center justify-between p-6 md:p-8 hover:bg-slate-800/80 transition-colors cursor-pointer group"
      >
        <h4 className="text-2xl font-bold text-white flex items-center mb-4 md:mb-0">
          <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span> 公文怎麼跑？ (流程示意圖)
        </h4>
        <div className="flex items-center space-x-3 self-center md:self-auto">
          <span className={`text-sm font-medium px-3 py-1 rounded-full transition-colors ${isOpen ? 'bg-slate-800 text-slate-400' : 'bg-blue-600/30 text-blue-400 group-hover:bg-blue-600/50'}`}>
            {isOpen ? '點擊收合' : '點擊展開流程'}
          </span>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 text-slate-400 transform transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}>
            ▼
          </div>
        </div>
      </button>

      <motion.div
        initial={false}
        whileInView={hasAutoOpened ? undefined : { opacity: 1 }}
        onViewportEnter={() => {
          if (!hasAutoOpened) {
            setIsOpen(true);
            setHasAutoOpened(true);
          }
        }}
        viewport={{ margin: "-100px", once: true }}
      >
        <div className={`grid transition-all duration-700 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}`}>
          <div className="overflow-hidden">
            <div className="p-6 md:p-8 pt-0 border-t border-slate-800/50 mt-2">
              {children}
            </div>
          </div>
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
          <h3 className="text-4xl font-bold text-white">內會並會</h3>
        </div>
      </div>
      <div className="space-y-6 mt-6">
        <ImagePlaceholder src="/images/002.jpg" label="來文&本文簽辦內容" />
        <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800 shadow-inner my-8">
          <h4 className="text-2xl font-bold text-white mb-4">內容懶人包</h4>
          <p className="text-lg text-slate-300 font-bold mb-3">114年12月部文辦理情形</p>
          <ul className="space-y-3 text-lg text-slate-400 list-disc list-inside ml-2 marker:text-blue-500">
            <li>平均處理時效： 1.97 日</li>
            <li>辦結率： 88.93%（低於第3季均值 92.72%）</li>
            <li>本室統計： 辦理件數 0 件</li>
            <li>後續作為： 持續強化流程管控，落實時效管理。</li>
          </ul>

          <FlowchartAccordion>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="bg-slate-800/80 border border-slate-700/50 p-4 rounded-xl text-center shadow-md w-full md:w-auto flex-1 h-full flex items-center justify-center">
                <span className="text-slate-300 font-medium">內會並會<br className="hidden md:block" />單位內各同仁</span>
              </div>

              <ChevronRight className="w-8 h-8 text-blue-500/50 hidden md:block flex-shrink-0" />
              <ArrowDown className="w-6 h-6 text-blue-500/50 md:hidden flex-shrink-0" />

              <div className="bg-blue-600/20 border border-blue-500/30 p-4 rounded-xl text-center shadow-md w-full md:w-auto flex-1 h-full flex items-center justify-center">
                <span className="text-blue-300 font-bold">直接送回<br className="hidden md:block" />科長</span>
              </div>

              <ChevronRight className="w-8 h-8 text-blue-500/50 hidden md:block flex-shrink-0" />
              <ArrowDown className="w-6 h-6 text-blue-500/50 md:hidden flex-shrink-0" />

              <div className="bg-slate-800/80 border border-slate-700/50 p-4 rounded-xl text-center shadow-md w-full md:w-auto flex-1 h-full flex items-center justify-center">
                <span className="text-slate-300 font-medium">科長<br className="hidden md:block" />再陳核</span>
              </div>

              <ChevronRight className="w-8 h-8 text-blue-500/50 hidden md:block flex-shrink-0" />
              <ArrowDown className="w-6 h-6 text-blue-500/50 md:hidden flex-shrink-0" />

              <div className="bg-slate-800/80 border border-slate-700/50 p-4 rounded-xl text-center shadow-md w-full md:w-auto flex-1 h-full flex items-center justify-center">
                <span className="text-slate-300 font-medium">最後<br className="hidden md:block" />主任決行</span>
              </div>
            </div>
          </FlowchartAccordion>
        </div>
        <ImagePlaceholder src="/images/003.jpg" label="公文流程" />
        <ImagePlaceholder src="/images/004.jpg" label="簽核意見" />
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
          <h3 className="text-4xl font-bold text-white">內會並會+內會並會</h3>
        </div>
      </div>
      <div className="space-y-6 mt-6">
        <ImagePlaceholder src="/images/005.jpg" label="來文&本文簽辦內容" />
        <div className="bg-slate-900/40 p-6 rounded-3xl border border-slate-800 shadow-inner my-8">
          <h4 className="text-2xl font-bold text-white mb-4">內容懶人包</h4>
          <p className="text-lg text-slate-300 font-bold mb-3">【115年2月同仁工作負荷管理】</p>
          <ul className="space-y-3 text-lg text-slate-400 list-disc list-inside ml-2 marker:text-blue-500">
            <li>異常指標： 公文件數、電腦開機時間高於平均值。</li>
            <li>管理目標： 營造友善職場、落實工作生活平衡。</li>
            <li>具體作為： 單位主管主動了解同仁狀況，並給予必要協助。</li>
          </ul>

          <FlowchartAccordion>
            <div className="flex flex-col items-center justify-center space-y-5">
              {/* Node 1 */}
              <div className="bg-slate-800/80 border border-slate-700/50 p-5 rounded-2xl text-center shadow-md w-full max-w-xs md:max-w-sm">
                <span className="text-slate-300 font-medium leading-relaxed">二科承辦人內會並會<br />一科跟三科以及<br />同科兩位承辦人</span>
              </div>

              <div className="flex items-center justify-center">
                <ArrowDown className="w-6 h-6 text-blue-500/50 flex-shrink-0" />
              </div>

              {/* Branch Container (Side-by-side columns on md, stacked on small) */}
              <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 w-full max-w-2xl px-2 md:px-0">

                {/* Top Branch (Left Column) */}
                <div className="flex flex-col items-center justify-start flex-1 w-full">
                  <div className="bg-slate-800/80 border border-slate-700/50 p-5 rounded-2xl text-center shadow-md w-full h-full flex flex-col items-center justify-center min-h-[4rem]">
                    <span className="text-slate-300 font-medium leading-relaxed">同科會辦人送回給<br />原承辦人</span>
                  </div>
                  {/* Invisible spacer to match height of the right column on desktop if desired, but flex-1 h-full does it anyway */}
                </div>

                {/* Bottom Branch (Right Column) */}
                <div className="flex flex-col items-center space-y-4 flex-1 w-full">
                  <div className="bg-slate-800/80 border border-slate-700/50 p-5 rounded-2xl text-center shadow-md w-full flex items-center justify-center min-h-[4rem]">
                    <span className="text-slate-300 font-medium leading-relaxed">一科跟三科會辦人<br />再內會並會給同科同仁</span>
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowDown className="w-6 h-6 text-blue-500/50 flex-shrink-0" />
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/50 p-5 rounded-2xl text-center shadow-md w-full flex items-center justify-center min-h-[4rem]">
                    <span className="text-slate-300 font-medium leading-relaxed">同仁再各自<br />內會陳核給科長</span>
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowDown className="w-6 h-6 text-blue-500/50 flex-shrink-0" />
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/50 p-5 rounded-2xl text-center shadow-md w-full flex items-center justify-center min-h-[4rem]">
                    <span className="text-slate-300 font-medium leading-relaxed">科長將文送回給<br />原承辦人</span>
                  </div>
                </div>

              </div>

              <div className="flex items-center justify-center mt-2">
                <ArrowDown className="w-6 h-6 text-blue-500/50 flex-shrink-0" />
              </div>

              {/* Final */}
              <div className="bg-blue-600/20 border border-blue-500/30 p-5 rounded-2xl text-center shadow-md w-full max-w-xs md:max-w-sm">
                <span className="text-blue-300 font-bold leading-relaxed">最後送陳核流程</span>
              </div>
            </div>
          </FlowchartAccordion>
        </div>
        <ImagePlaceholder src="/images/008.jpg" label="設定歷程" />
        <ImagePlaceholder src="/images/009.jpg" label="簽核意見" />
      </div>
    </div>
  );
}

function Scenario4() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <p className="text-blue-400 text-base font-bold uppercase tracking-widest">情境四</p>
          <h3 className="text-4xl font-bold text-white">並會</h3>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        <div className="bg-slate-900/30 p-6 md:p-8 rounded-3xl border border-slate-800">
          <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span> 內容懶人包
          </h4>

          <div className="space-y-6">
            <div>
              <h5 className="text-xl font-bold text-blue-300 mb-3 border-b border-slate-700/50 pb-2">去年（114年）我們做到了什麼？</h5>
              <ul className="space-y-3 text-slate-300 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">世界第一：</strong> 幫防洪水利工程訂出了全世界第一套「碳足跡計算規則」(PCR) 。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">手機就是掃描器：</strong> 開發出用手機拍照片就能自動辨識「鋼筋間距」的 AI 系統 。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">機具監控：</strong> 用手機就能記錄工地怪手等機具跑了多久，算出排多少碳 。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">優化系統：</strong> 幫水利署把數位轉型的系統維護好 。</div>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-bold text-indigo-300 mb-3 border-b border-slate-700/50 pb-2 mt-4">今年（115年）要做什麼？</h5>
              <ul className="space-y-3 text-slate-300 text-lg">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">計畫主旨：</strong> 繼續補助工研院 XXX 萬元，把 AI 和減碳技術做得更完整 。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">目標：</strong> 建立「數位碳盤查系統」，以後用 AI 幫忙分析，可以省人力、提高效率 。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">預算小變動：</strong> 因為行政院砍了部分預算，所以我們決定把「海水綠科技」項目刪掉，集中火力做「水利綠工程淨零」。</div>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-bold text-emerald-300 mb-3 border-b border-slate-700/50 pb-2 mt-4">各組室的「會辦意見」</h5>
              <ul className="space-y-3 text-slate-300 text-lg">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">主計室：</strong> 這筆經費我先記下來了，但之後工研院交出「細部計畫」時，要再送過來讓我審核一次 。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white border-b border-amber-500/50 pb-0.5">特別注意：</strong> 立法院還沒審完 115 年的預算，如果最後預算被砍，要提早跟工研院說，免得沒錢付 。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">綜合企劃組：</strong> 確認這筆錢是從「淨零科技」相關預算裡出的，沒問題，存檔 。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">水文技術組：</strong> 關於「AI 創新應用」那筆 XXX 萬元的經費，我們會記在帳上盯著（錄案控管） 。</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <FlowchartAccordion>
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="bg-slate-800 border-2 border-blue-500 p-5 rounded-2xl shadow-lg w-56 text-center">
              <p className="text-sm font-bold text-slate-500 uppercase mb-1 tracking-widest">主辦</p>
              <p className="font-bold text-xl text-white">工程事務組</p>
            </div>

            <ArrowDown className="w-8 h-8 text-blue-500/50 flex-shrink-0" />

            <div className="flex flex-row flex-wrap justify-center gap-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-base w-32 md:w-48 text-center text-slate-300">主計室</div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-base w-32 md:w-48 text-center text-slate-300">綜合企劃組</div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-base w-32 md:w-48 text-center text-slate-300">水文技術組</div>
            </div>

            <ArrowDown className="w-8 h-8 text-blue-500/50 flex-shrink-0" />

            <div className="bg-blue-900/40 text-blue-100 p-8 rounded-[2rem] shadow-xl w-full max-w-sm border border-blue-500/30">
              <h4 className="text-sm font-bold text-blue-400 mb-5 uppercase tracking-widest text-center">各單位內部處理程序</h4>
              <ol className="text-base space-y-4">
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-blue-400" /> 登記桌收文分派</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-blue-400" /> 科長派給會辦人</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-blue-400" /> 會辦人內會陳核</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 mr-3 text-blue-400" /> 單位主管核章</li>
              </ol>
            </div>

            <ArrowDown className="w-8 h-8 text-blue-500/50 flex-shrink-0" />

            <div className="bg-slate-800/80 border border-slate-700/50 p-5 rounded-2xl text-center shadow-md w-full max-w-sm flex justify-center">
              <span className="text-slate-300 font-bold leading-relaxed tracking-wider">送回原承辦人</span>
            </div>
          </div>
        </FlowchartAccordion>

        <div className="w-full my-8">
          <ImagePlaceholder src="/images/017.jpg" label="設定歷程" />
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

function Scenario5() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6">
        <div className="space-y-1">
          <p className="text-blue-400 text-base font-bold uppercase tracking-widest">情境五</p>
          <h3 className="text-4xl font-bold text-white">並會 + 內會並會</h3>
        </div>
      </div>

      <div className="space-y-6 mt-6">
        <div className="bg-slate-900/30 p-6 md:p-8 rounded-3xl border border-slate-800">
          <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
            <span className="w-2 h-8 bg-blue-500 rounded-full mr-3"></span> 前情提要
          </h4>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            內政部收到「國際公共水協會（台灣）」的籌組申請，透過經濟部商業發展署詢問水利署的意見，確認這個協會跟水利署的業務有沒有關係，以及水利署是否願意擔任其「目的事業主管機關」。
          </p>

          <div className="space-y-6">
            <div>
              <h5 className="text-xl font-bold text-blue-300 mb-3 border-b border-slate-700/50 pb-2">這個協會要做什麼？根據其章程草案，主要有四大目標：</h5>
              <ul className="space-y-3 text-slate-300 text-lg">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">整合交流：</strong> 促進台灣各個水資源相關公協會的技術合作與經驗分享。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">數位轉型：</strong> 推動水資源管理的數位化，並協助高科技產業建立省水標準。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">國際連結：</strong> 到海外設點（如美國），並與亞、歐洲的國際專業團體建立合作平台。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">人才培育：</strong> 帶領青年專業人士參與國際交流，培養具有國際觀的水利人才。</div>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-bold text-indigo-300 mb-3 border-b border-slate-700/50 pb-2 mt-4">水利署的評估與決定</h5>
              <p className="text-lg text-slate-300 mb-3">水利署（綜合企劃組）評估後認為應該要擔任其主管機關，理由如下：</p>
              <ul className="space-y-3 text-slate-300 text-lg">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">業務高度相關：</strong> 該協會處理的事務包含飲用水、再生水、雨水及洪水，與水利署的職掌完全重疊。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">掌握管理權：</strong> 擔任主管機關後，可以依法對其進行指導、監督，若有違法情事也能進行處分。</div>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">●</span>
                  <div><strong className="text-white">責任與義務：</strong> 法律規定主管機關只有監督權責，並沒有捐助經費的義務。</div>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700">
              <h5 className="text-xl font-bold text-emerald-300 mb-4 flex items-center">
                💬 水源經營組與保育事業組的意見
              </h5>
              <p className="text-lg text-slate-300 mb-4">這件公文當時有會辦這兩個核心組室，看看他們怎麼說：</p>
              <div className="space-y-4">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
                  <div className="flex items-start mb-2">
                    <span className="text-2xl mr-3">💧</span>
                    <div>
                      <strong className="text-white text-lg block mb-1">水源經營組：</strong>
                      <span className="text-slate-300 text-lg">收到公文後，先請組內的一科到五科全部看過一遍。</span>
                    </div>
                  </div>
                  <div className="ml-9 border-l-2 border-slate-700 pl-4 py-1">
                    <strong className="text-emerald-400">最終綜整：</strong> <span className="text-slate-300">全組確認後表示<strong className="text-white">「無意見」</strong>，也就是說他們覺得協會成立跟目前水源經營的實務運作沒有衝突。</span>
                  </div>
                </div>

                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
                  <div className="flex items-start mb-2">
                    <span className="text-2xl mr-3">🌿</span>
                    <div>
                      <strong className="text-white text-lg block mb-1">保育事業組：</strong>
                      <span className="text-slate-300 text-lg">同樣走標準程序，把公文傳給組內一科到四科的所有同仁。</span>
                    </div>
                  </div>
                  <div className="ml-9 border-l-2 border-slate-700 pl-4 py-1">
                    <strong className="text-emerald-400">最終綜整：</strong> <span className="text-slate-300">經過內部各科確認，同樣回覆<strong className="text-white">「無意見」</strong>，支持由綜合企劃組提出的建議。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FlowchartAccordion>
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="bg-slate-800 border-2 border-blue-500 p-5 rounded-2xl shadow-lg w-56 text-center">
              <p className="text-sm font-bold text-slate-500 uppercase mb-1 tracking-widest">主辦</p>
              <p className="font-bold text-xl text-white">綜合企劃組</p>
            </div>

            <ArrowDown className="w-8 h-8 text-blue-500/50 flex-shrink-0" />

            <div className="flex flex-row flex-wrap justify-center gap-4">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-base w-32 md:w-48 text-center text-slate-300">水源經營組</div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-base w-32 md:w-48 text-center text-slate-300">保育事業組</div>
            </div>

            <ArrowDown className="w-8 h-8 text-blue-500/50 flex-shrink-0" />

            <div className="bg-blue-900/40 text-blue-100 p-8 rounded-[2rem] shadow-xl w-full max-w-sm border border-blue-500/30">
              <h4 className="text-sm font-bold text-blue-400 mb-5 uppercase tracking-widest text-center">各單位內部處理程序</h4>
              <ol className="text-base space-y-4">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 text-blue-400 mt-0.5 flex-shrink-0" /> <span>會辦人設定「內會並會」其他科</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 text-blue-400 mt-0.5 flex-shrink-0" /> <span>各科會辦人內會陳核科長後<strong className="text-blue-200">送回至原會辦人</strong></span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 mr-3 text-blue-400 mt-0.5 flex-shrink-0" /> <span>原會辦人內會陳核單位主管</span></li>
              </ol>
            </div>

            <ArrowDown className="w-8 h-8 text-blue-500/50 flex-shrink-0" />

            <div className="bg-slate-800/80 border border-slate-700/50 p-5 rounded-2xl text-center shadow-md w-full max-w-sm flex justify-center">
              <span className="text-slate-300 font-bold leading-relaxed tracking-wider">送回原承辦人</span>
            </div>
          </div>
        </FlowchartAccordion>

        <div className="w-full my-8">
          <ImagePlaceholder src="/images/018.jpg" label="設定歷程" />
        </div>


      </div>
    </div>
  );
}


function ThanksSlide() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center space-y-12 py-16 md:py-24">
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
      </div>
    </div>
  );
}
