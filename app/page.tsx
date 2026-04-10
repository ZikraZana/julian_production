import Image from "next/image";
import { FaCamera, FaArrowDown, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-brand-white text-brand-black font-sans scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-brand-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Dummy Hitam Putih */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-black text-brand-white flex items-center justify-center rounded-sm">
              <FaCamera size={20} />
            </div>
            <span className="text-xl font-black tracking-widest uppercase text-brand-black">
              LENS<span className="text-brand-orange">.</span>CO
            </span>
          </div>

          {/* Menu Navigasi */}
          <ul className="hidden md:flex gap-8 font-semibold text-sm uppercase tracking-wider">
            <li><a href="#beranda" className="hover:text-brand-orange transition-colors">Beranda</a></li>
            <li><a href="#tentang" className="hover:text-brand-orange transition-colors">Tentang</a></li>
            <li><a href="#layanan" className="hover:text-brand-orange transition-colors">Layanan</a></li>
            <li><a href="#galeri" className="hover:text-brand-orange transition-colors">Galeri</a></li>
          </ul>

          {/* Tombol Kontak Cepat */}
          <a href="#kontak" className="hidden md:flex px-6 py-2 bg-brand-black text-brand-white text-sm font-bold hover:bg-brand-orange hover:text-brand-black transition-all rounded-full">
            Hubungi Kami
          </a>
        </div>
      </nav>

      {/* KONTEN UTAMA */}
      <main>

        {/* 1. SECTION BERANDA (HERO) - SPLIT LAYOUT */}
        <section id="beranda" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-black">

          <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

            {/* Bagian Kiri: Teks */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 pb-20 lg:pb-0">
              {/* Badge Kecil */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/50 text-brand-orange mb-6">
                <FaCamera />
                <span className="text-xs font-bold tracking-widest uppercase">Studio Fotografi Profesional</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-tight mb-6">
                Ceritakan Kisahmu <br className="hidden lg:block" /> Melalui <span className="text-brand-orange">Lensa</span> Kami.
              </h1>

              {/* Sub-headline */}
              <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                Dari momen pre-wedding yang romantis hingga foto produk yang elegan, kami hadir untuk membekukan setiap momen berhargamu menjadi karya seni yang abadi.
              </p>

              {/* Tombol CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a href="#galeri" className="px-8 py-4 bg-brand-orange text-brand-black font-bold rounded-full hover:bg-orange-500 transition-all transform hover:scale-105 w-full sm:w-auto text-center shadow-[0_0_20px_rgba(248,173,56,0.3)]">
                  Lihat Portofolio
                </a>
                <a href="#kontak" className="px-8 py-4 bg-transparent border-2 border-brand-white text-brand-white font-bold rounded-full hover:bg-brand-white hover:text-brand-black transition-all w-full sm:w-auto text-center">
                  Pesan Jadwal
                </a>
              </div>
            </div>

            {/* Bagian Kanan: Gambar Featured */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
              {/* Dekorasi Glow di belakang gambar */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-orange/20 blur-[100px] rounded-full z-0"></div>

              {/* Frame Gambar */}
              <div className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1554046920-90dc20696342?q=80&w=800&auto=format&fit=crop"
                  alt="Karya Fotografi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* Indikator Scroll ke Bawah */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <a href="#tentang" className="flex flex-col items-center text-brand-white/60 hover:text-brand-orange transition-colors">
              <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
              <FaArrowDown size={16} />
            </a>
          </div>
        </section>

        {/* SECTION LAINNYA (Dibiarkan kosong/kerangka dulu untuk langkah selanjutnya) */}
        <section id="tentang" className="min-h-screen py-24 px-6 flex items-center justify-center"><h2 className="text-4xl font-bold">Tentang <span className="text-brand-orange">Kami</span></h2></section>
        <section id="layanan" className="min-h-screen py-24 px-6 bg-gray-50 flex items-center justify-center"><h2 className="text-4xl font-bold">Layanan <span className="text-brand-orange">&</span> Harga</h2></section>
        <section id="galeri" className="min-h-screen py-24 px-6 bg-brand-black text-brand-white flex items-center justify-center"><h2 className="text-4xl font-bold">Galeri <span className="text-brand-orange">Karya</span></h2></section>
        <section id="kontak" className="min-h-screen py-24 px-6 flex items-center justify-center"><h2 className="text-4xl font-bold">Hubungi <span className="text-brand-orange">Kami</span></h2></section>

      </main>
    </div>
  );
}