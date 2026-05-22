import React, { useState, useEffect, createContext, useContext } from 'react';

// --- ROBUST DECLARATIVE SVG ICON COMPONENTS ---
function DashboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block align-middle">
      <rect width="7" height="9" x="3" y="3" rx="1"/>
      <rect width="7" height="5" x="14" y="3" rx="1"/>
      <rect width="7" height="9" x="14" y="10" rx="1"/>
      <rect width="7" height="5" x="3" y="14" rx="1"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block align-middle">
      <line x1="16" x2="16" y1="2" y2="6"/>
      <line x1="8" x2="8" y1="2" y2="6"/>
      <rect width="18" height="18" x="3" y="4" rx="2"/>
      <line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  );
}

function ContentIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block align-middle">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
    </svg>
  );
}

function PublishedIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block align-middle">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

function ChannelIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block align-middle">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
    </svg>
  );
}

function ProductIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block align-middle">
      <path d="m7.5 4.27 9 5.15"/>
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
      <path d="m3.3 7 8.7 5 8.7-5"/>
      <path d="M12 22V12"/>
    </svg>
  );
}

function JournalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block align-middle">
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
      <path d="M6 6h10"/>
      <path d="M6 10h10"/>
    </svg>
  );
}

function BackupIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 inline-block align-middle">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/>
      <line x1="12" x2="12" y1="3" y2="15"/>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="4" x2="20" y1="12" y2="12"/>
      <line x1="4" x2="20" y1="6" y2="6"/>
      <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <line x1="18" x2="6" y1="6" y2="18"/>
      <line x1="6" x2="18" y1="6" y2="18"/>
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <line x1="12" x2="12" y1="5" y2="19"/>
      <line x1="5" x2="19" y1="12" y2="12"/>
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 text-red-500">
      <path d="M3 6h18"/>
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
    </svg>
  );
}

// โน้ตย่อ: ไอคอนแก้ไขข้อมูล
function EditIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 text-blue-500">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  );
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2"/>
      <path d="M12 20v2"/>
      <path d="m4.93 4.93 1.41 1.41"/>
      <path d="m17.66 17.66 1.41 1.41"/>
      <path d="M2 12h2"/>
      <path d="M20 12h2"/>
      <path d="m6.34 17.66-1.41 1.41"/>
      <path d="m19.07 4.93-1.41 1.41"/>
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
      <polyline points="16 17 21 12 16 7"/>
      <line x1="21" x2="9" y1="12" y2="12"/>
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" x2="21" y1="14" y2="3"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <line x1="12" x2="12" y1="17" y2="22"/>
      <path d="M5 17h14v-1.76a2 2 0 0 0-.44-1.24l-2.12-2.6A2 2 0 0 1 16 10.16V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5.16c0 .43-.14.85-.4 1.2l-2.16 2.6a2 2 0 0 0-.44 1.24Z"/>
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  );
}

// --- INITIAL DATA & CONTEXT ---
const AppContext = createContext();

const initialMockData = {
  contents: [
    { id: '1', title: 'รีวิวขาตั้งไอแพดมินิมอล', description: 'ขาตั้งปรับระดับได้ สีขาวคลีน วางโต๊ะทำงานแล้วดูดีมาก', date: '2026-05-20', time: '18:00', status: 'ตัดต่อ', platform: 'TikTok', tag: '#รีวิวไอที', product: 'ขาตั้ง iPad Premium', link: '' },
    { id: '2', title: 'สอนจัดโต๊ะทำงานฉบับงบน้อย', description: 'เน้นของประหยัดจาก Shopee ออกมาสไตล์เกาหลี', date: '2026-05-22', time: '11:00', status: 'ร่าง', platform: 'YouTube', tag: '#จัดโต๊ะทำงาน', product: 'โคมไฟมินิมอล', link: '' },
    { id: '3', title: 'คลิปสั้นแจกพิกัดมุมแคมป์ปิ้ง', description: 'พิกัดลานกางเต็นท์เปิดใหม่ บรรยากาศดี มีริมน้ำ', date: '2026-05-18', time: '09:00', status: 'เผยแพร่แล้ว', platform: 'Facebook', tag: '#แคมป์ปิ้ง', product: 'ไม่มี', link: 'https://facebook.com' }
  ],
  channels: [
    { id: '1', name: 'กะปอมรีวิว', platform: 'TikTok', link: 'https://tiktok.com', description: 'ช่องรีวิวของใช้มินิมอลและไอที', followers: '15,000', category: 'Gadget / Lifestyle' }
  ],
  products: [
    { id: '1', name: 'ขาตั้ง iPad Premium', source: 'ซื้อเอง', price: '350', dateReceived: '2026-05-10', note: 'วัสดุอลูมิเนียม แข็งแรงมาก', category: 'ไอที & แกดเจ็ต' },
    { id: '2', name: 'โคมไฟมินิมอล', source: 'Sponsor', price: '0', dateReceived: '2026-05-12', note: 'สปอนเซอร์ส่งมาให้ช่วยทำคลิป', category: 'ตกแต่งบ้าน' }
  ],
  productCategories: ['ไอที & แกดเจ็ต', 'ตกแต่งห้อง', 'เครื่องเขียน', 'เสื้อผ้า / แฟชั่น'],
  journals: [
    { id: '1', title: 'ไอเดียช่อง พยายามจะเก่งขึ้นวันละนิด', content: 'ทำคลิปแชร์ทริคพัฒนาตัวเองวันละ 1 ข้อ สั้นๆ เข้าใจง่าย เล่าเรื่องแบบ Planner', date: '2026-05-19', tag: '#Mindset', pinned: true }
  ],
  pin: 'pom1234',
  isSetup: true
};

const safeLocalStorage = {
  getItem: (key) => {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  },
  setItem: (key, value) => {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
};

export default function App() {
  const [db, setDb] = useState(() => {
    const saved = safeLocalStorage.getItem('creator_planner_db');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!parsed.productCategories) {
        parsed.productCategories = initialMockData.productCategories;
      }
      return parsed;
    }
    return initialMockData;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return safeLocalStorage.getItem('creator_session') === 'true';
  });

  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dialog, setDialog] = useState({ isOpen: false, type: 'alert', title: '', message: '', onConfirm: null });

  useEffect(() => {
    safeLocalStorage.setItem('creator_planner_db', JSON.stringify(db));
  }, [db]);

  const showDialog = (type, title, message, onConfirm = null) => {
    setDialog({ isOpen: true, type, title, message, onConfirm });
  };

  const closeDialog = () => {
    setDialog({ ...dialog, isOpen: false });
  };

  if (!isAuthenticated) {
    return <AuthScreen db={db} setDb={setDb} onLogin={() => {
      setIsAuthenticated(true);
      safeLocalStorage.setItem('creator_session', 'true');
    }} />;
  }

  return (
    <AppContext.Provider value={{ db, setDb, showDialog, activeTab, setActiveTab, darkMode }}>
      <div className={`${darkMode ? 'dark bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-800'} min-h-screen font-sans flex transition-colors duration-200`}>
        
        {/* CUSTOM DIALOG */}
        {dialog.isOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className={`p-6 rounded-2xl shadow-xl max-w-sm w-full border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
              <h3 className="text-lg font-bold mb-2">{dialog.title}</h3>
              <p className={`text-sm mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{dialog.message}</p>
              <div className="flex justify-end space-x-3">
                {dialog.type === 'confirm' && (
                  <button onClick={closeDialog} className={`px-4 py-2 text-sm rounded-xl border ${darkMode ? 'border-slate-600 hover:bg-slate-700' : 'border-slate-200 hover:bg-slate-50'}`}>ยกเลิก</button>
                )}
                <button onClick={() => { dialog.onConfirm?.(); closeDialog(); }} className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium">ตกลง</button>
              </div>
            </div>
          </div>
        )}

        {/* SIDEBAR */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 border-r transition-transform md:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-center">C</div>
              <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Creator Plan</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
              <CloseIcon />
            </button>
          </div>

          <nav className="p-4 space-y-1">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: DashboardIcon },
              { id: 'calendar', label: 'Calendar', icon: CalendarIcon },
              { id: 'content', label: 'Content Plan', icon: ContentIcon },
              { id: 'published', label: 'Published', icon: PublishedIcon },
              { id: 'channel', label: 'Channels', icon: ChannelIcon },
              { id: 'product', label: 'Product Stock', icon: ProductIcon },
              { id: 'journal', label: 'Journal & Idea', icon: JournalIcon },
              { id: 'backup', label: 'Backup Data', icon: BackupIcon },
            ].map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === item.id ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400' : 'text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'}`}
                >
                  <Icon />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-xl border ${darkMode ? 'border-slate-700 bg-slate-800 text-yellow-400' : 'border-slate-200 bg-slate-50 text-slate-600'}`}>
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button onClick={() => {
              setIsAuthenticated(false);
              safeLocalStorage.setItem('creator_session', 'false');
            }} className="flex items-center space-x-2 text-sm font-medium text-red-500 hover:text-red-600 p-2 rounded-xl">
              <LogoutIcon />
              <span className="hidden md:inline">ออกจากระบบ</span>
            </button>
          </div>
        </aside>

        {/* MAIN CONTAINER */}
        <div className="flex-1 md:pl-64 min-h-screen flex flex-col">
          <header className={`h-16 flex items-center justify-between px-6 border-b backdrop-blur sticky top-0 z-30 ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
            <div className="flex items-center space-x-3">
              <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 -ml-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800">
                <MenuIcon />
              </button>
              <h2 className="text-xl font-bold capitalize">{activeTab === 'product' ? 'Product Stock' : activeTab === 'content' ? 'Content Plan' : activeTab}</h2>
            </div>
            <div className="text-sm font-medium opacity-70 hidden sm:block">📍 สมุดแพลนเนอร์ส่วนตัว</div>
          </header>

          <main className="p-6 flex-1 max-w-7xl w-full mx-auto">
            {activeTab === 'dashboard' && <DashboardView />}
            {activeTab === 'calendar' && <CalendarView />}
            {activeTab === 'content' && <ContentPlanView />}
            {activeTab === 'published' && <PublishedView />}
            {activeTab === 'channel' && <ChannelView />}
            {activeTab === 'product' && <ProductStockView />}
            {activeTab === 'journal' && <JournalView />}
            {activeTab === 'backup' && <BackupView />}
          </main>
        </div>
      </div>
    </AppContext.Provider>
  );
}

// --- SUB-SCREEN: AUTHENTICATION ---
function AuthScreen({ db, setDb, onLogin }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const isFirstTime = !db.isSetup;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFirstTime) {
      if (pin.length < 4) {
        setError('กรุณาตั้งรหัสผ่าน 4 ตัวอักษรขึ้นไป');
        return;
      }
      setDb({ ...db, pin: pin, isSetup: true });
      onLogin();
    } else {
      if (pin === db.pin) {
        onLogin();
      } else {
        setError('รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่');
        setPin('');
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-sm w-full text-center">
        <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg shadow-blue-200">C</div>
        <h2 className="text-2xl font-bold text-slate-800 mb-1">Content Creator Plan</h2>
        <p className="text-sm text-slate-500 mb-6">{isFirstTime ? 'ตั้งค่ารหัสผ่านเข้าใช้งานระบบครั้งแรก' : 'กรุณากรอกรหัสผ่านเพื่อเข้าใช้งาน'}</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            maxLength={10}
            placeholder={isFirstTime ? 'ตั้งรหัสผ่าน (เช่น pom1234)' : 'กรอกรหัสผ่าน'}
            value={pin}
            onChange={(e) => { setPin(e.target.value); setError(''); }}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-center text-xl font-bold tracking-widest focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {error && <p className="text-xs font-medium text-red-500">{error}</p>}
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all shadow-md shadow-blue-100">
            {isFirstTime ? 'สร้างบัญชีเข้าใช้งาน' : 'เข้าสู่ระบบ'}
          </button>
        </form>
      </div>
    </div>
  );
}

// --- VIEW: DASHBOARD ---
function DashboardView() {
  const { db, setActiveTab } = useContext(AppContext);
  const total = db.contents.length;
  const draft = db.contents.filter(c => c.status === 'ร่าง').length;
  const edit = db.contents.filter(c => c.status === 'ตัดต่อ').length;
  const ready = db.contents.filter(c => c.status === 'พร้อมลง').length;
  const published = db.contents.filter(c => c.status === 'เผยแพร่แล้ว').length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: 'งานทั้งหมด', count: total, color: 'border-slate-200 bg-white dark:bg-slate-800' },
          { label: 'กำลังวางแผน (ร่าง)', count: draft, color: 'border-gray-200 bg-gray-50 text-gray-600 dark:bg-slate-800 dark:text-gray-300' },
          { label: 'กำลังตัดต่อคลิป', count: edit, color: 'border-blue-100 bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400' },
          { label: 'ตรวจทาน/พร้อมลง', count: ready, color: 'border-orange-100 bg-orange-50 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400' },
          { label: 'เผยแพร่เสร็จสิ้น', count: published, countColor: 'text-emerald-600 dark:text-emerald-400', color: 'border-emerald-100 bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400' },
        ].map((s, idx) => (
          <div key={idx} onClick={() => setActiveTab('content')} className={`p-4 rounded-2xl border shadow-sm cursor-pointer hover:scale-105 transition-all ${s.color}`}>
            <p className="text-xs font-semibold opacity-70">{s.label}</p>
            <p className={`text-2xl font-black mt-1 ${s.countColor || ''}`}>{s.count}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl border dark:border-slate-700 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-base">ตารางคอนเทนต์ล่าสุด</h3>
            <button onClick={() => setActiveTab('content')} className="text-xs text-blue-600 font-bold hover:underline">ดูทั้งหมด</button>
          </div>
          <div className="space-y-3">
            {db.contents.slice(0, 4).map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 border dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                <div>
                  <h4 className="text-sm font-bold">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.date} • {item.time}น. | {item.platform}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                  item.status === 'เผยแพร่แล้ว' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' :
                  item.status === 'พร้อมลง' ? 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300' :
                  item.status === 'ตัดต่อ' ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300' : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                }`}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border dark:border-slate-700 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-base mb-3">บันทึกไอเดียด่วน</h3>
            {db.journals.filter(j => j.pinned).slice(0, 1).map(j => (
              <div key={j.id} className="p-4 bg-amber-50 dark:bg-amber-950/30 text-amber-900 dark:text-amber-200 rounded-xl border border-amber-100 dark:border-amber-900">
                <p className="font-bold text-sm mb-1">📌 {j.title}</p>
                <p className="text-xs line-clamp-4 leading-relaxed opacity-90">{j.content}</p>
              </div>
            ))}
            {db.journals.filter(j => j.pinned).length === 0 && (
              <p className="text-xs text-slate-400 py-6 text-center">ไม่มีบันทึกที่ปักหมุดไว้</p>
            )}
          </div>
          <button onClick={() => setActiveTab('journal')} className="w-full mt-4 py-2.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-xs font-bold rounded-xl transition-colors">
            เขียนโน้ตไอเดียใหม่
          </button>
        </div>
      </div>
    </div>
  );
}

// --- VIEW: CALENDAR ---
function CalendarView() {
  const { db, darkMode } = useContext(AppContext);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');
  const [selectedDayEvents, setSelectedDayEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    return { firstDay, totalDays, year, month };
  };

  const { firstDay, totalDays, year, month } = getDaysInMonth(currentDate);

  const monthNames = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate);
    if (viewMode === 'month') {
      newDate.setMonth(currentDate.getMonth() + direction);
    } else if (viewMode === 'week') {
      newDate.setDate(currentDate.getDate() + direction * 7);
    } else {
      newDate.setDate(currentDate.getDate() + direction);
    }
    setCurrentDate(newDate);
  };

  const handleCellClick = (dayStr) => {
    const matched = db.contents.filter(c => c.date === dayStr);
    setSelectedDayEvents(matched);
    setIsModalOpen(true);
  };

  const getStatusColorClass = (status) => {
    switch (status) {
      case 'ร่าง': return 'bg-slate-400';
      case 'ตัดต่อ': return 'bg-blue-600';
      case 'พร้อมลง': return 'bg-orange-500';
      case 'เผยแพร่แล้ว': return 'bg-emerald-600';
      default: return 'bg-slate-400';
    }
  };

  const renderMonthView = () => {
    const blanks = Array(firstDay).fill(null);
    const dayCells = Array.from({ length: totalDays }, (_, i) => i + 1);
    const gridItems = [...blanks, ...dayCells];

    return (
      <div className="grid grid-cols-7 gap-1 md:gap-2">
        {['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'].map((d, i) => (
          <div key={i} className="text-center font-bold text-xs py-2 uppercase opacity-60">{d}</div>
        ))}
        {gridItems.map((day, idx) => {
          if (day === null) return <div key={idx} className="aspect-square bg-slate-100/30 dark:bg-slate-800/20 rounded-xl" />;
          
          const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const dayEvents = db.contents.filter(c => c.date === dayStr);
          const isToday = new Date().toDateString() === new Date(year, month, day).toDateString();

          return (
            <div
              key={idx}
              onClick={() => handleCellClick(dayStr)}
              className={`aspect-square p-1.5 md:p-2 rounded-xl border flex flex-col justify-between cursor-pointer transition-all hover:border-blue-500 ${
                isToday ? 'border-blue-600 bg-blue-50/30 dark:bg-blue-950/20' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800'
              }`}
            >
              <span className={`text-xs font-bold ${isToday ? 'text-blue-600 dark:text-blue-400' : 'opacity-70'}`}>{day}</span>
              <div className="flex flex-wrap gap-1 mt-1 overflow-hidden max-h-12">
                {dayEvents.map(ev => (
                  <div key={ev.id} className={`w-2 h-2 rounded-full ${getStatusColorClass(ev.status)}`} title={ev.title} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderWeekView = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());

    return (
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 7 }).map((_, idx) => {
          const targetDate = new Date(startOfWeek);
          targetDate.setDate(startOfWeek.getDate() + idx);
          
          const dayStr = `${targetDate.getFullYear()}-${String(targetDate.getMonth() + 1).padStart(2, '0')}-${String(targetDate.getDate()).padStart(2, '0')}`;
          const dayEvents = db.contents.filter(c => c.date === dayStr);
          const isToday = new Date().toDateString() === targetDate.toDateString();

          return (
            <div
              key={idx}
              onClick={() => handleCellClick(dayStr)}
              className={`min-h-[220px] p-3 rounded-xl border flex flex-col cursor-pointer transition-all hover:border-blue-500 ${
                isToday ? 'border-blue-600 bg-blue-50/30 dark:bg-blue-950/20' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800'
              }`}
            >
              <div className="text-center pb-2 border-b border-slate-100 dark:border-slate-700">
                <p className="text-xs opacity-60 font-medium">{['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'][idx]}</p>
                <p className={`text-base font-black ${isToday ? 'text-blue-600 dark:text-blue-400' : ''}`}>{targetDate.getDate()}</p>
              </div>
              <div className="mt-2 space-y-1.5 flex-1 overflow-y-auto max-h-40">
                {dayEvents.map(ev => (
                  <div key={ev.id} className={`text-[10px] p-1 text-white rounded font-medium truncate ${getStatusColorClass(ev.status)}`}>
                    {ev.time} {ev.title}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderDayView = () => {
    const dayStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
    const dayEvents = db.contents.filter(c => c.date === dayStr).sort((a, b) => a.time.localeCompare(b.time));

    return (
      <div className="bg-white dark:bg-slate-800 rounded-2xl border dark:border-slate-700 p-6 shadow-sm">
        <h4 className="font-bold text-sm text-slate-400 uppercase tracking-wider mb-4">ตารางเวลาสำหรับวันนี้ ({dayStr})</h4>
        {dayEvents.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-sm">วันนี้ไม่มีการจัดวางตารางงานคอนเทนต์</div>
        ) : (
          <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-[45px] before:w-0.5 before:bg-slate-100 dark:before:bg-slate-700">
            {dayEvents.map(ev => (
              <div key={ev.id} className="flex items-start space-x-6 relative">
                <div className="w-12 text-right pt-1 text-xs font-black text-slate-500">{ev.time}</div>
                <div className={`w-3 h-3 rounded-full mt-2 relative z-10 ring-4 ${darkMode ? 'ring-slate-800' : 'ring-white'} ${getStatusColorClass(ev.status)}`} />
                <div className="flex-1 p-4 rounded-xl border dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <span className="text-xs px-2 py-0.5 font-bold rounded-md bg-white dark:bg-slate-800 border shadow-sm">{ev.platform}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 text-white rounded ${getStatusColorClass(ev.status)}`}>{ev.status}</span>
                  </div>
                  <h5 className="font-bold text-sm mt-2">{ev.title}</h5>
                  {ev.description && <p className="text-xs text-slate-400 mt-1 line-clamp-2">{ev.description}</p>}
                  {ev.product && ev.product !== 'ไม่มี' && <p className="text-[11px] font-medium text-blue-500 mt-2">🛍️ สินค้า: {ev.product}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const getHeaderTitle = () => {
    if (viewMode === 'month') return `${monthNames[month]} ${year}`;
    if (viewMode === 'week') {
      const start = new Date(currentDate); start.setDate(currentDate.getDate() - currentDate.getDay());
      const end = new Date(start); end.setDate(start.getDate() + 6);
      return `${start.getDate()} ${monthNames[start.getMonth()]} - ${end.getDate()} ${monthNames[end.getMonth()]} ${end.getFullYear()}`;
    }
    return `${currentDate.getDate()} ${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-2xl border dark:border-slate-700 shadow-sm">
        <div className="flex items-center space-x-2">
          <button onClick={() => changeMonth(-1)} className="p-2 rounded-xl border dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center">
            <ChevronLeftIcon />
          </button>
          <button onClick={() => setCurrentDate(new Date())} className="px-3 py-2 text-xs font-bold border dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700">วันนี้</button>
          <h3 className="text-base font-black px-2 min-w-[140px] text-center sm:text-left">{getHeaderTitle()}</h3>
          <button onClick={() => changeMonth(1)} className="p-2 rounded-xl border dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center">
            <ChevronRightIcon />
          </button>
        </div>

        <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
          {[
            { id: 'day', label: 'รายวัน' },
            { id: 'week', label: 'รายสัปดาห์' },
            { id: 'month', label: 'รายเดือน' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setViewMode(tab.id)}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${viewMode === tab.id ? 'bg-white dark:bg-slate-800 text-blue-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {viewMode === 'month' && renderMonthView()}
      {viewMode === 'week' && renderWeekView()}
      {viewMode === 'day' && renderDayView()}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className={`p-6 rounded-2xl shadow-xl max-w-md w-full border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-base">รายการแผนงานคอนเทนต์</h4>
              <button onClick={() => setIsModalOpen(false)} className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center">
                <CloseIcon />
              </button>
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
              {selectedDayEvents.length === 0 ? (
                <p className="text-sm text-slate-400 py-4 text-center">ไม่มีแผนงานในวันนี้</p>
              ) : (
                selectedDayEvents.map(ev => (
                  <div key={ev.id} className="p-3 border dark:border-slate-700 rounded-xl space-y-1 bg-slate-50 dark:bg-slate-900/50">
                    <div className="flex justify-between text-xs">
                      <span className="font-bold text-blue-600 dark:text-blue-400">🕒 {ev.time} น.</span>
                      <span className={`px-2 py-0.5 rounded font-bold text-[10px] text-white ${getStatusColorClass(ev.status)}`}>{ev.status}</span>
                    </div>
                    <h5 className="text-sm font-bold pt-1">{ev.title}</h5>
                    <p className="text-xs text-slate-400">{ev.description}</p>
                    <div className="flex justify-between items-center text-[11px] pt-2 opacity-80">
                      <span>🎬 ช่องทาง: {ev.platform}</span>
                      <span>🏷️ {ev.tag}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// --- VIEW: CONTENT PLAN ---
function ContentPlanView() {
  const { db, setDb, showDialog, darkMode } = useContext(AppContext);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ทั้งหมด');
  const [formData, setFormData] = useState({ id: '', title: '', description: '', date: '', time: '12:00', status: 'ร่าง', platform: 'TikTok', tag: '', product: 'ไม่มี', link: '' });
  const [modalOpen, setModalOpen] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.date) {
      showDialog('alert', 'ข้อมูลไม่ครบ', 'กรุณากรอกชื่องานและกำหนดวันที่เผยแพร่');
      return;
    }

    if (formData.id) {
      const updated = db.contents.map(c => c.id === formData.id ? formData : c);
      setDb({ ...db, contents: updated });
    } else {
      const newContent = { ...formData, id: Date.now().toString() };
      setDb({ ...db, contents: [newContent, ...db.contents] });
    }
    setModalOpen(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ id: '', title: '', description: '', date: '', time: '12:00', status: 'ร่าง', platform: 'TikTok', tag: '', product: 'ไม่มี', link: '' });
  };

  const deleteContent = (id) => {
    showDialog('confirm', 'ยืนยันการลบ', 'คุณต้องการลบแผนคอนเทนต์นี้ใช่หรือไม่?', () => {
      setDb({ ...db, contents: db.contents.filter(c => c.id !== id) });
    });
  };

  const filteredContents = db.contents.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.product.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === 'ทั้งหมด' || c.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch md:items-center bg-white dark:bg-slate-800 p-4 rounded-2xl border dark:border-slate-700 shadow-sm">
        <div className="flex-1 flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="ค้นหาชื่องาน หรือชื่อสินค้า..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 text-sm rounded-xl border dark:border-slate-700 bg-transparent outline-none focus:ring-2 focus:ring-blue-500 w-full sm:max-w-xs"
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2 text-sm rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500"
          >
            {['ทั้งหมด', 'ร่าง', 'ตัดต่อ', 'พร้อมลง', 'เผยแพร่แล้ว'].map(st => <option key={st} value={st}>{st}</option>)}
          </select>
        </div>
        <button onClick={() => { resetForm(); setModalOpen(true); }} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold flex items-center justify-center space-x-2 shadow-md">
          <PlusIcon /> <span>สร้างแพลนใหม่</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContents.map(c => (
          <div key={c.id} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border dark:border-slate-700 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="flex justify-between items-start gap-2 mb-2">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-md bg-slate-50 dark:bg-slate-700 border dark:border-slate-600">{c.platform}</span>
                <select
                  value={c.status}
                  onChange={(e) => {
                    const next = db.contents.map(item => item.id === c.id ? { ...item, status: e.target.value } : item);
                    setDb({ ...db, contents: next });
                  }}
                  className={`text-xs font-bold px-2 py-0.5 rounded border-none outline-none text-white ${
                    c.status === 'เผยแพร่แล้ว' ? 'bg-emerald-600' : c.status === 'พร้อมลง' ? 'bg-orange-500' : c.status === 'ตัดต่อ' ? 'bg-blue-600' : 'bg-slate-400'
                  }`}
                >
                  {['ร่าง', 'ตัดต่อ', 'พร้อมลง', 'เผยแพร่แล้ว'].map(st => <option key={st} value={st} className="text-slate-800 bg-white">{st}</option>)}
                </select>
              </div>
              <h4 className="font-bold text-base mb-1">{c.title}</h4>
              <p className="text-xs text-slate-400 dark:text-slate-400 line-clamp-2 mb-3 leading-relaxed">{c.description || 'ไม่มีรายละเอียดเพิ่มเติม'}</p>
              
              <div className="space-y-1 bg-slate-50 dark:bg-slate-900/40 p-3 rounded-xl text-xs mb-3">
                <p className="text-slate-500">📅 วันที่ลง: <span className="font-bold text-slate-800 dark:text-slate-200">{c.date} | {c.time} น.</span></p>
                <p className="text-slate-500">🛍️ สินค้า: <span className="font-semibold text-blue-600 dark:text-blue-400">{c.product}</span></p>
                <p className="text-slate-500">🏷️ แท็ก: <span className="opacity-90">{c.tag || '-'}</span></p>
              </div>
            </div>

            <div className="flex justify-end space-x-2 pt-2 border-t dark:border-slate-700">
              <button onClick={() => { setFormData(c); setModalOpen(true); }} className="p-2 border dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 flex items-center justify-center">
                <EditIcon />
              </button>
              <button onClick={() => deleteContent(c.id)} className="p-2 border dark:border-slate-700 rounded-lg hover:bg-red-50 flex items-center justify-center">
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <form onSubmit={handleSave} className={`p-6 rounded-2xl shadow-xl max-w-md w-full border space-y-4 max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
            <div className="flex justify-between items-center border-b pb-2 dark:border-slate-700">
              <h3 className="font-bold text-base">{formData.id ? 'แก้ไขแผนคอนเทนต์' : 'เพิ่มแผนคอนเทนต์ใหม่'}</h3>
              <button type="button" onClick={() => setModalOpen(false)} className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center justify-center">
                <CloseIcon />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-xs font-bold mb-1 opacity-80">ชื่องาน / ชื่อคลิป *</label>
                <input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none focus:ring-2 focus:ring-blue-500" placeholder="เช่น รีวิวโต๊ะคอมใหม่" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1 opacity-80">รายละเอียดบทความ / สคริปต์ด่วน</label>
                <textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none focus:ring-2 focus:ring-blue-500 h-20" placeholder="เขียนบันทึกย่อเกี่ยวกับคลิปนี้..." />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1 opacity-80">วันที่ลง *</label>
                  <input type="date" value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 opacity-80">เวลาลง</label>
                  <input type="time" value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1 opacity-80">แพลตฟอร์ม</label>
                  <select value={formData.platform} onChange={e => setFormData({ ...formData, platform: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500">
                    {['TikTok', 'YouTube', 'Facebook', 'Other'].map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1 opacity-80">สถานะ</label>
                  <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500">
                    {['ร่าง', 'ตัดต่อ', 'พร้อมลง', 'เผยแพร่แล้ว'].map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1 opacity-80">สินค้าที่ใช้รีวิว</label>
                <select value={formData.product} onChange={e => setFormData({ ...formData, product: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="ไม่มี">-- ไม่เลือกสินค้า / ไม่มี --</option>
                  {db.products.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1 opacity-80">Tags</label>
                <input type="text" value={formData.tag} onChange={e => setFormData({ ...formData, tag: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none focus:ring-2 focus:ring-blue-500" placeholder="เช่น #รีวิว #รีวิวของใช้" />
              </div>

              {formData.status === 'เผยแพร่แล้ว' && (
                <div>
                  <label className="block text-xs font-bold mb-1 text-emerald-600">ลิงก์วิดีโอคลิป (หลังเผยแพร่แล้ว)</label>
                  <input type="url" value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} className="w-full px-3 py-2 rounded-xl border border-emerald-300 dark:border-emerald-800 bg-transparent outline-none focus:ring-2 focus:ring-emerald-500" placeholder="https://..." />
                </div>
              )}
            </div>

            <div className="flex justify-end space-x-2 pt-4 border-t dark:border-slate-700">
              <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 rounded-xl border dark:border-slate-600 text-sm font-medium">ยกเลิก</button>
              <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold">บันทึกข้อมูล</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

// --- VIEW: PUBLISHED ---
function PublishedView() {
  const { db } = useContext(AppContext);
  const publishedList = db.contents.filter(c => c.status === 'เผยแพร่แล้ว');

  return (
    <div className="space-y-4">
      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 rounded-2xl text-xs font-medium border border-emerald-100 dark:border-emerald-900">
        💡 หน้ารวมผลงานที่เผยแพร่แล้วโดยอัตโนมัติ (ระบบดึงข้อมูลมาจาก Content Plan ที่เซ็ตสถานะเป็น "เผยแพร่แล้ว") คุณไม่สามารถเพิ่มข้อมูลตรงจากหน้านี้ได้
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {publishedList.map(item => (
          <div key={item.id} className="bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between">
            <div>
              <div className="aspect-video bg-slate-100 dark:bg-slate-700 flex flex-col items-center justify-center p-4 text-center border-b dark:border-slate-600 relative">
                <span className="absolute top-2 left-2 text-[10px] font-black tracking-wide px-2 py-0.5 rounded bg-black/60 text-white uppercase">{item.platform}</span>
                <span className="text-xs font-bold opacity-40">🎬 Video Content Thumbnail</span>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-sm line-clamp-1 mb-1">{item.title}</h4>
                <p className="text-xs text-slate-400">📅 เผยแพร่เมื่อ: {item.date} • {item.time} น.</p>
                {item.product && item.product !== 'ไม่มี' && (
                  <span className="inline-block mt-3 text-[11px] font-medium text-blue-500 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-md">🛍️ {item.product}</span>
                )}
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900/40 border-t dark:border-slate-700 flex justify-end">
              {item.link ? (
                <a href={item.link} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-1.5 text-xs text-blue-600 font-bold hover:underline">
                  <span>เปิดดูคลิปจริง</span> <ExternalLinkIcon />
                </a>
              ) : (
                <span className="text-xs text-slate-400 italic">ยังไม่ได้แนบลิงก์ผลงาน</span>
              )}
            </div>
          </div>
        ))}
        {publishedList.length === 0 && (
          <div className="col-span-full text-center py-12 text-slate-400 text-sm">ยังไม่มีคอนเทนต์ใดที่มีสถานะ "เผยแพร่แล้ว"</div>
        )}
      </div>
    </div>
  );
}

// --- VIEW: CHANNELS ---
function ChannelView() {
  const { db, setDb, showDialog, darkMode } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: '', name: '', platform: 'TikTok', link: '', description: '', followers: '', category: '' });

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name) return;

    if (formData.id) {
      setDb({ ...db, channels: db.channels.map(ch => ch.id === formData.id ? formData : ch) });
    } else {
      setDb({ ...db, channels: [{ ...formData, id: Date.now().toString() }, ...db.channels] });
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button onClick={() => { setFormData({ id: '', name: '', platform: 'TikTok', link: '', description: '', followers: '', category: '' }); setModalOpen(true); }} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold flex items-center space-x-2">
          <PlusIcon /> <span>เพิ่มช่องใหม่</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {db.channels.map(ch => (
          <div key={ch.id} className="bg-white dark:bg-slate-800 p-5 rounded-2xl border dark:border-slate-700 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-black px-2 py-0.5 bg-blue-50 dark:bg-blue-950 text-blue-600 rounded">{ch.platform}</span>
                <span className="text-xs font-black text-slate-400">{ch.followers || '0'} ผู้ติดตาม</span>
              </div>
              <h4 className="font-bold text-base mb-1">{ch.name}</h4>
              <p className="text-xs text-slate-400 mb-2">{ch.category || 'ไม่ระบุหมวดหมู่'}</p>
              <p className="text-xs opacity-80 leading-relaxed mb-4">{ch.description || '-'}</p>
            </div>

            <div className="flex justify-between items-center pt-3 border-t dark:border-slate-700">
              {ch.link ? (
                <a href={ch.link} target="_blank" rel="noreferrer" className="text-xs text-blue-600 font-bold hover:underline flex items-center space-x-1">
                  <span>เยี่ยมชมช่อง</span> <ExternalLinkIcon />
                </a>
              ) : <span />}
              <div className="flex space-x-1">
                <button onClick={() => { setFormData(ch); setModalOpen(true); }} className="p-1.5 border dark:border-slate-700 rounded-lg text-slate-400 flex items-center justify-center">
                  <EditIcon />
                </button>
                <button onClick={() => showDialog('confirm', 'ลบช่อง', 'ต้องการลบข้อมูลช่องนี้?', () => setDb({ ...db, channels: db.channels.filter(item => item.id !== ch.id) }))} className="p-1.5 border dark:border-slate-700 rounded-lg text-red-400 flex items-center justify-center">
                  <TrashIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <form onSubmit={handleSave} className={`p-6 rounded-2xl shadow-xl max-w-md w-full border space-y-4 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
            <h3 className="font-bold text-base border-b pb-2 dark:border-slate-700">{formData.id ? 'แก้ไขข้อมูลช่อง' : 'เพิ่มช่องออนไลน์ใหม่'}</h3>
            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-xs font-bold mb-1">ชื่อช่อง *</label>
                <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none" required />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">แพลตฟอร์ม</label>
                  <select value={formData.platform} onChange={e => setFormData({ ...formData, platform: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-white dark:bg-slate-800 outline-none">
                    {['TikTok', 'YouTube', 'Facebook', 'Other'].map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">จำนวนผู้ติดตาม</label>
                  <input type="text" value={formData.followers} onChange={e => setFormData({ ...formData, followers: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none" placeholder="เช่น 15K" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">หมวดหมู่ช่อง</label>
                <input type="text" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none" placeholder="เช่น รีวิวของใช้, ไอที" />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">ลิงก์ช่อง</label>
                <input type="url" value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none" placeholder="https://..." />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">คำอธิบายเพิ่มเติม</label>
                <textarea value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none h-16" />
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 border dark:border-slate-600 rounded-xl">ยกเลิก</button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold">บันทึกช่อง</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

// --- NEW VIEW: PRODUCT STOCK (WITH INTEGRATED CUSTOM CATEGORIES MANAGEMENT) ---
function ProductStockView() {
  const { db, setDb, showDialog, darkMode } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [manageCategoriesOpen, setManageCategoriesOpen] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [editIdx, setEditIdx] = useState(null);
  const [selectedFilterCategory, setSelectedFilterCategory] = useState('ทั้งหมด');

  const [formData, setFormData] = useState({ 
    id: '', name: '', note: '', price: '', source: 'ซื้อเอง', category: 'ไม่มีหมวดหมู่', dateReceived: '' 
  });

  const handleSave = (e) => {
    e.preventDefault();
    if (formData.id) {
      setDb({ ...db, products: db.products.map(p => p.id === formData.id ? formData : p) });
    } else {
      setDb({ ...db, products: [{ ...formData, id: Date.now().toString() }, ...db.products] });
    }
    setModalOpen(false);
  };

  // ฟังก์ชันลบสินค้า
  const deleteProduct = (id) => {
    showDialog('confirm', 'ยืนยันการลบ', 'คุณต้องการลบสินค้านี้ใช่หรือไม่?', () => {
      setDb({ ...db, products: db.products.filter(item => item.id !== id) });
    });
  };

  const handleSaveCategory = (e) => {
    e.preventDefault();
    if (!newCategoryName.trim()) return;
    if (editIdx !== null) {
      const oldName = db.productCategories[editIdx];
      const updatedCats = [...db.productCategories];
      updatedCats[editIdx] = newCategoryName.trim();
      const updatedProducts = db.products.map(p => p.category === oldName ? { ...p, category: newCategoryName.trim() } : p);
      setDb({ ...db, productCategories: updatedCats, products: updatedProducts });
      setEditIdx(null);
    } else {
      if (!db.productCategories.includes(newCategoryName.trim())) {
        setDb({ ...db, productCategories: [...db.productCategories, newCategoryName.trim()] });
      }
    }
    setNewCategoryName('');
  };

  const filteredProducts = db.products.filter(p => 
    (selectedFilterCategory === 'ทั้งหมด' || p.category === selectedFilterCategory) &&
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      {/* ส่วนบน: ค้นหาและปุ่ม */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border dark:border-slate-700 shadow-sm flex flex-wrap gap-2">
        <input className="flex-1 p-2 border rounded-xl dark:bg-slate-900" placeholder="ค้นหา..." onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => setManageCategoriesOpen(!manageCategoriesOpen)} className="p-2 border rounded-xl">📁 หมวดหมู่</button>
        <button onClick={() => { setFormData({ id: '', name: '', note: '', price: '', source: 'ซื้อเอง', category: 'ไม่มีหมวดหมู่', dateReceived: '' }); setModalOpen(true); }} className="px-4 py-2 bg-blue-600 text-white rounded-xl font-bold">+ เพิ่มสินค้า</button>
      </div>

      {/* ส่วนจัดการหมวดหมู่ (สวยงามและเป็นสัดส่วน) */}
      {manageCategoriesOpen && (
        <div className="p-5 border border-dashed rounded-2xl bg-slate-50 dark:bg-slate-900/50 space-y-4">
           <form onSubmit={handleSaveCategory} className="flex gap-2">
             <input value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} className="flex-1 p-2 border rounded-xl" placeholder="เพิ่ม/แก้ไขชื่อหมวดหมู่..." />
             <button type="submit" className="bg-emerald-600 text-white px-5 py-2 rounded-xl font-bold">{editIdx !== null ? 'บันทึก' : 'เพิ่ม'}</button>
           </form>
           <div className="flex flex-wrap gap-2">
             {db.productCategories.map((cat, idx) => (
               <div key={idx} className="flex items-center gap-2 bg-white dark:bg-slate-800 border px-3 py-1.5 rounded-lg shadow-sm text-sm">
                 <span className="cursor-pointer font-medium hover:text-blue-500" onClick={() => {setNewCategoryName(cat); setEditIdx(idx)}}>{cat}</span>
                 <button onClick={() => setDb({...db, productCategories: db.productCategories.filter((_,i)=>i!==idx)})} className="text-slate-400 hover:text-red-500 font-bold">×</button>
               </div>
             ))}
           </div>
        </div>
      )}

      {/* ปุ่มกรองหมวดหมู่ */}
      <div className="flex flex-wrap gap-2">
        <button onClick={() => setSelectedFilterCategory('ทั้งหมด')} className={`px-4 py-1.5 rounded-full text-xs font-bold ${selectedFilterCategory === 'ทั้งหมด' ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900' : 'bg-slate-200'}`}>ทั้งหมด</button>
        {db.productCategories.map((cat, idx) => (
          <button key={idx} onClick={() => setSelectedFilterCategory(cat)} className={`px-4 py-1.5 rounded-full text-xs font-bold ${selectedFilterCategory === cat ? 'bg-slate-800 text-white dark:bg-white dark:text-slate-900' : 'bg-slate-200'}`}>{cat}</button>
        ))}
      </div>

      {/* รายการสินค้า */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProducts.map(p => (
          <div key={p.id} className="p-4 bg-white dark:bg-slate-800 rounded-xl border shadow-sm flex flex-col justify-between">
            <div>
                <h4 className="font-bold text-lg">{p.name}</h4>
                <p className="text-sm text-slate-500">ประเภท: {p.source} | หมวดหมู่: {p.category}</p>
                <p className="text-sm font-bold mt-1">{p.price} บาท</p>
                <p className="text-xs text-slate-400 mt-2">{p.note}</p>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button onClick={() => { setFormData(p); setModalOpen(true); }} className="px-3 py-1 text-xs border rounded-lg hover:bg-slate-50">แก้ไข</button>
              <button onClick={() => deleteProduct(p.id)} className="px-3 py-1 text-xs bg-red-50 text-red-600 border border-red-100 rounded-lg hover:bg-red-100">ลบ</button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL เพิ่ม/แก้ไขสินค้า */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <form onSubmit={handleSave} className="p-6 bg-white dark:bg-slate-800 rounded-2xl w-full max-w-lg space-y-3">
            <h3 className="font-bold text-lg">{formData.id ? 'แก้ไขสินค้า' : 'เพิ่มสินค้า'}</h3>
            {/* ฟอร์มกรอกข้อมูลตามเดิมของคุณ */}
            <label className="text-xs font-bold">ชื่อสินค้า</label>
            <input className="w-full p-2 border rounded-xl dark:bg-slate-900" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} required />
            <label className="text-xs font-bold">รายละเอียด</label>
            <textarea className="w-full p-2 border rounded-xl dark:bg-slate-900" value={formData.note} onChange={e=>setFormData({...formData, note: e.target.value})} />
            <div className="grid grid-cols-2 gap-2">
              <div><label className="text-xs font-bold">ราคา (บาท)</label><input type="number" className="w-full p-2 border rounded-xl dark:bg-slate-900" value={formData.price} onChange={e=>setFormData({...formData, price: e.target.value})} /></div>
              <div><label className="text-xs font-bold">ประเภท</label><select className="w-full p-2 border rounded-xl dark:bg-slate-900" value={formData.source} onChange={e=>setFormData({...formData, source: e.target.value})}><option>ซื้อเอง</option><option>สินค้าจากสปอนเซอร์</option></select></div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div><label className="text-xs font-bold">หมวดหมู่</label><select className="w-full p-2 border rounded-xl dark:bg-slate-900" value={formData.category} onChange={e=>setFormData({...formData, category: e.target.value})}><option value="ไม่มีหมวดหมู่">ไม่มีหมวดหมู่</option>{db.productCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}</select></div>
              <div><label className="text-xs font-bold">วันที่</label><input type="date" className="w-full p-2 border rounded-xl dark:bg-slate-900" value={formData.dateReceived} onChange={e=>setFormData({...formData, dateReceived: e.target.value})} /></div>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 border rounded-xl">ยกเลิก</button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-xl">บันทึก</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

// --- VIEW: JOURNAL ---
function JournalView() {
  const { db, setDb, showDialog, darkMode } = useContext(AppContext);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: '', title: '', content: '', date: '', tag: '', pinned: false });

  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return;

    if (formData.id) {
      setDb({ ...db, journals: db.journals.map(j => j.id === formData.id ? formData : j) });
    } else {
      setDb({ ...db, journals: [{ ...formData, id: Date.now().toString(), date: new Date().toISOString().split('T')[0] }, ...db.journals] });
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button onClick={() => { setFormData({ id: '', title: '', content: '', date: '', tag: '', pinned: false }); setModalOpen(true); }} className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-bold flex items-center space-x-2 shadow-sm">
          <PlusIcon /> <span>จดบันทึกไอเดียใหม่</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {db.journals.map(j => (
          <div key={j.id} className={`p-5 rounded-2xl border transition-all relative group flex flex-col justify-between ${
            j.pinned ? 'bg-amber-50/70 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900' : 'bg-white border-slate-200 dark:bg-slate-800 dark:border-slate-700'
          }`}>
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold opacity-50">{j.date}</span>
                <button
                  onClick={() => setDb({ ...db, journals: db.journals.map(item => item.id === j.id ? { ...item, pinned: !item.pinned } : item) })}
                  className={`p-1 rounded flex items-center justify-center ${j.pinned ? 'text-amber-500' : 'text-slate-300 hover:text-slate-500'}`}
                >
                  <PinIcon />
                </button>
              </div>
              <h4 className="font-bold text-base mb-2 flex items-center">
                {j.pinned && <span className="mr-1">📌</span>}
                {j.title}
              </h4>
              <p className="text-xs opacity-90 whitespace-pre-wrap leading-relaxed mb-4">{j.content}</p>
            </div>

            <div className="flex justify-between items-center pt-3 border-t dark:border-slate-700">
              <span className="text-[10px] font-bold opacity-60 text-amber-700 dark:text-amber-400">{j.tag || '#Idea'}</span>
              <div className="flex space-x-1 opacity-60 group-hover:opacity-100 transition-opacity">
                <button onClick={() => { setFormData(j); setModalOpen(true); }} className="p-1.5 border dark:border-slate-700 rounded-lg flex items-center justify-center">
                  <EditIcon />
                </button>
                <button onClick={() => showDialog('confirm', 'ลบบันทึก', 'ต้องการลบโน้ตไอเดียนี้?', () => setDb({ ...db, journals: db.journals.filter(item => item.id !== j.id) }))} className="p-1.5 border dark:border-slate-700 rounded-lg text-red-500 flex items-center justify-center">
                  <TrashIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <form onSubmit={handleSave} className={`p-6 rounded-2xl shadow-xl max-w-md w-full border space-y-4 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'}`}>
            <h3 className="font-bold text-base border-b pb-2 dark:border-slate-700">บันทึกไดอารี่ไอเดีย</h3>
            <div className="space-y-3 text-sm">
              <div>
                <label className="block text-xs font-bold mb-1">หัวข้อไอเดีย *</label>
                <input type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none" required />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">เนื้อหารายละเอียดไอเดีย *</label>
                <textarea value={formData.content} onChange={e => setFormData({ ...formData, content: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none h-32" required />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1">หมวดหมู่แท็ก</label>
                <input type="text" value={formData.tag} onChange={e => setFormData({ ...formData, tag: e.target.value })} className="w-full px-3 py-2 rounded-xl border dark:border-slate-700 bg-transparent outline-none" placeholder="เช่น #คอนเทนต์ไอที" />
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <input type="checkbox" id="pin_note" checked={formData.pinned} onChange={e => setFormData({ ...formData, pinned: e.target.checked })} />
                <label htmlFor="pin_note" className="text-xs font-bold cursor-pointer select-none">ปักหมุดบันทึกนี้ไว้ที่หน้าแรก (Dashboard)</label>
              </div>
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button type="button" onClick={() => setModalOpen(false)} className="px-4 py-2 border dark:border-slate-600 rounded-xl">ยกเลิก</button>
              <button type="submit" className="px-4 py-2 bg-amber-500 text-white rounded-xl font-bold">บันทึกโน้ต</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

// --- VIEW: BACKUP / RESTORE JSON ---
function BackupView() {
  const { db, setDb, showDialog } = useContext(AppContext);

  const exportData = () => {
    try {
      const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(db, null, 2))}`;
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', jsonString);
      downloadAnchor.setAttribute('download', `content_creator_backup_${new Date().toISOString().split('T')[0]}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showDialog('alert', 'สำเร็จ', 'ส่งออกข้อมูลสำรองเรียบร้อยแล้ว');
    } catch (err) {
      showDialog('alert', 'เกิดข้อผิดพลาด', 'ไม่สามารถสร้างไฟล์สำรองข้อมูลได้');
    }
  };

  const handleImport = (e) => {
    const fileReader = new FileReader();
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    fileReader.onload = (event) => {
      try {
        const parsedData = JSON.parse(event.target.result);
        if (parsedData.contents && parsedData.channels) {
          showDialog('confirm', 'ยืนยันการนำเข้า', 'ข้อมูลชุดใหม่จะเข้ามาแทนที่ข้อมูลปัจจุบันทั้งหมด ต้องการดำเนินการต่อหรือไม่?', () => {
            setDb(parsedData);
            showDialog('alert', 'สำเร็จ', 'กู้คืนและอัปเดตข้อมูลสำรองเรียบร้อยแล้ว');
          });
        } else {
          showDialog('alert', 'รูปแบบไฟล์ไม่ถูกต้อง', 'โครงสร้างภายในไฟล์ JSON สำรองข้อมูลไม่สมบูรณ์');
        }
      } catch (err) {
        showDialog('alert', 'ข้อผิดพลาด', 'ไม่สามารถอ่านไฟล์ JSON นี้ได้');
      }
    };
    fileReader.readAsText(uploadedFile);
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-slate-800 p-6 rounded-2xl border dark:border-slate-700 shadow-sm space-y-6">
      <div className="text-center space-y-2">
        <h3 className="font-bold text-lg">จัดการสำรองข้อมูลส่วนตัว</h3>
        <p className="text-xs text-slate-400">เนื่องจากระบบจัดเก็บข้อมูลไว้ภายในเครื่อง (Local Storage) เพื่อความปลอดภัยสูงสุด แนะนำให้ Export ไฟล์สำรองเก็บไว้ป้องกันข้อมูลสูญหาย</p>
      </div>

      <div className="p-4 border dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/30 text-center space-y-3">
        <p className="text-xs font-bold text-slate-500">📥 ดาวน์โหลดข้อมูลปัจจุบันออกมาเป็นไฟล์ดิบ</p>
        <button onClick={exportData} className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors">
          Backup Data (Export JSON)
        </button>
      </div>

      <div className="p-4 border dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900/30 text-center space-y-3">
        <p className="text-xs font-bold text-slate-500">📤 เลือกไฟล์สำรองเพื่อกู้คืนข้อมูลเดิม</p>
        <label className="block w-full py-2.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 rounded-xl text-xs font-bold cursor-pointer transition-colors text-center">
          <span>Restore Data (Import JSON)</span>
          <input type="file" accept=".json" onChange={handleImport} className="hidden" />
        </label>
      </div>
    </div>
  );
}
