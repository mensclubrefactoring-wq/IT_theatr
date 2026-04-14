import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Theater, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Clock, 
  Zap, 
  Mail, 
  Phone, 
  ChevronRight,
  Sparkles,
  Camera,
  Layout,
  MessageSquare,
  Globe,
  Award
} from 'lucide-react';

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-extrabold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-gray-400 max-w-2xl mx-auto text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`glass p-8 rounded-2xl transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Header / Logo */}
      <nav className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="input_file_1.png" alt="Logo" className="h-12 md:h-16 invert brightness-200" referrerPolicy="no-referrer" />
          <div className="hidden md:block border-l border-white/20 pl-4">
            <div className="text-xs font-mono text-brand-primary">IT ТЕАТРАЛЬНЫЙ КЛУБ</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-tighter">Перекодировка реальности</div>
          </div>
        </div>
        <a href="#contact" className="px-6 py-2 glass rounded-full text-sm font-bold hover:bg-white/10 transition-all">
          Обсудить встречу
        </a>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
          <img 
            src="input_file_5.png" 
            alt="Stage Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/40 to-dark-bg" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.15),transparent_70%)]" />
        </div>
        
        <div className="relative z-10 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-brand-primary text-sm font-mono"
          >
            <Sparkles size={16} />
            <span>PR-КОЛЛАБОРАЦИЯ 2026</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Оденьте <span className="text-gradient">IT-будущее</span> в ваш бренд
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Мы — театр, создающий постановки об IT. Нам нужно одеть наших актеров-айтишников в одежду вашего магазина для нового спектакля.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contact" className="px-8 py-4 bg-brand-primary text-dark-bg font-bold rounded-full hover:glow transition-all flex items-center justify-center gap-2">
              Назначить встречу <MessageSquare size={20} />
            </a>
            <a href="#about" className="px-8 py-4 glass font-bold rounded-full hover:bg-white/10 transition-all">
              Наш опыт
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
        >
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Театр технологий <br/>и <span className="text-brand-primary">традиций</span></h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Иммерсивный театр народов России «Калык шынык» обладает уникальным опытом работы в ТЦ. 
                Мы проводим масштабные мероприятия, раскрывающие культурный код коренных народов России через призму современных технологий.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Award size={20}/>, text: "Опыт проведения культурных событий в ТЦ" },
                  { icon: <Globe size={20}/>, text: "Работа с культурным кодом коренных народов России" },
                  { icon: <Cpu size={20}/>, text: "Постановки на стыке IT и классического театра" },
                  { icon: <Users size={20}/>, text: "Актеры, играющие реальных IT-специалистов" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-200">
                    <div className="text-brand-primary shrink-0">{item.icon}</div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden glass relative group">
                <img 
                  src="input_file_6.png" 
                  alt="Rehearsal" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl hidden md:block">
                <div className="text-3xl font-bold text-brand-primary">2026</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">Новый сезон</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section id="collab" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="Мы ищем партнера, готового одеть наших героев. Это не просто спонсорство, а полноценная PR-история.">
            Оденем айтишников <span className="text-brand-primary">в ваш бренд</span>
          </SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-6 text-brand-primary">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Костюмы для героев</h3>
              <p className="text-gray-400">
                Наши актеры — это собирательные образы современных IT-специалистов. Ваша одежда создаст их визуальный код на сцене.
              </p>
            </Card>
            
            <Card>
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mb-6 text-brand-secondary">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Живой манекен</h3>
              <p className="text-gray-400">
                Актеры в вашей одежде проводят перформансы прямо в торговом зале, превращая магазин в часть театрального действия.
              </p>
            </Card>
            
            <Card>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 text-green-500">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">PR и Культура</h3>
              <p className="text-gray-400">
                Совмещаем продвижение бренда с поддержкой культурного наследия и современных IT-трендов.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Story Section */}
      <section className="py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionTitle subtitle="От традиционных масок до цифрового кода — мы создаем визуальный язык будущего.">
            Эстетика <span className="text-brand-secondary">Перекодировки</span>
          </SectionTitle>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden aspect-square glass relative"
            >
              <img src="input_file_0.png" alt="Anime Group" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 text-xs font-mono bg-dark-bg/60 px-2 py-1 rounded">КОМАНДА</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden aspect-square glass relative"
            >
              <img src="input_file_2.png" alt="Props" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 text-xs font-mono bg-dark-bg/60 px-2 py-1 rounded">АРТЕФАКТЫ</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden aspect-square glass relative"
            >
              <img src="input_file_4.png" alt="Mall Art" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 text-xs font-mono bg-dark-bg/60 px-2 py-1 rounded">ПРОСТРАНСТВО</div>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden aspect-square glass relative"
            >
              <img src="input_file_3.png" alt="Interaction" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 text-xs font-mono bg-dark-bg/60 px-2 py-1 rounded">ИНТЕРАКТИВ</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PR Story Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle subtitle="Мы создаем инфоповоды, объединяющие традиции народов России и мир высоких технологий.">
            PR-история <span className="text-brand-primary">вашего успеха</span>
          </SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="glass p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="text-brand-primary" /> Культурный код
              </h4>
              <p className="text-gray-400">
                Наш опыт работы с наследием коренных народов России гарантирует глубину и смысловую наполненность каждого перформанса в вашем ТЦ.
              </p>
            </div>
            <div className="glass p-8 rounded-3xl">
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Camera className="text-brand-secondary" /> IT-эстетика
              </h4>
              <p className="text-gray-400">
                Актеры-айтишники в вашей одежде — это свежий взгляд на fashion-интеграцию, привлекающий самую прогрессивную аудиторию.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contact" className="py-24 px-4 bg-dark-bg border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Давайте <span className="text-gradient">встретимся</span></h2>
          <p className="text-xl text-gray-400 mb-12">
            Обсудим, как ваш бренд может стать частью нашей новой постановки. Оденьте будущее — пусть ваша одежда заговорит на языке театра и технологий.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="glass p-8 rounded-2xl flex flex-col items-center">
              <Mail className="text-brand-primary mb-4" size={32} />
              <a href="mailto:immersive.theatr@yandex.ru" className="text-xl font-bold hover:text-brand-primary transition-colors">
                immersive.theatr@yandex.ru
              </a>
            </div>
            <div className="glass p-8 rounded-2xl flex flex-col items-center">
              <Phone className="text-brand-primary mb-4" size={32} />
              <a href="tel:+79031193773" className="text-xl font-bold hover:text-brand-primary transition-colors">
                +7 (903) 119 3773
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="text-2xl font-bold">Алексей Рыбаков</div>
            <div className="text-gray-400 max-w-lg mx-auto leading-tight">
              Руководитель и режиссёр Иммерсивного театра народов России «Калык шынык» / IT театральный клуб
            </div>
          </div>
          
          <div className="mt-24 text-gray-600 text-sm font-mono">
            © 2026 ПЕРЕКОДИРОВКА РЕАЛЬНОСТИ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
          </div>
        </div>
      </footer>
    </div>
  );
}
