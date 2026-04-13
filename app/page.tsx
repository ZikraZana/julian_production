import Image from "next/image";
import { FaCamera, FaArrowDown, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

import localFont from 'next/font/local';

// Inisialisasi font lokal
const customFont = localFont({
  // Sesuaikan nama file ini dengan nama file font yang kamu masukkan ke folder fonts
  src: './fonts/Nulshock Bd.otf',
  display: 'swap',
});

const bodyFont = localFont({
  // Sesuaikan nama file ini dengan nama file font yang kamu masukkan ke folder fonts
  src: './fonts/Nasalization Rg.otf',
  display: 'swap',
});

export default function Home() {
  return (
    <div className={`bg-brand-black text-brand-white ${bodyFont.className} scroll-smooth`}>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full h-20 bg-brand-black/75 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 h-full flex justify-between items-center">

          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-3 h-full hover:opacity-80 transition-opacity">

            {/* Class font custom ditambahkan di sini */}
            <span className={`text-xl font-black tracking-widest uppercase text-brand-white ${customFont.className}`}>
              JULIAN<span className="text-brand-orange">.</span>PRODUCTIONS
            </span>
          </a>

          {/* Menu Navigasi */}
          <ul className="hidden md:flex items-center h-full gap-8 font-semibold text-sm uppercase tracking-wider text-gray-300 mr-45.5">
            <li>
              <a
                href="#beranda"
                className="relative py-1 font-bold hover:text-brand-orange transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#tentang"
                className="relative py-1 font-bold hover:text-brand-orange transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                href="#layanan"
                className="relative py-1 font-bold hover:text-brand-orange transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
              >
                Layanan
              </a>
            </li>
            <li>
              <a
                href="#galeri"
                className="relative py-1 font-bold hover:text-brand-orange transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
              >
                Galeri
              </a>
            </li>
          </ul>

          {/* Tombol Kontak Cepat */}
          <div className="hidden md:flex h-full items-center">
            <a href="#kontak" className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-orange text-brand-black text-sm font-bold hover:bg-orange-500 transition-all rounded-full leading-none">
              Hubungi Kami
            </a>
          </div>

        </div>
      </nav>

      {/* KONTEN UTAMA */}
      <main>

        {/* 1. SECTION BERANDA (HERO) */}
        <section id="beranda" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-black">

          <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

            {/* Bagian Kiri: Teks */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 pb-20 lg:pb-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/50 text-brand-orange mb-6">
                <FaCamera />
                <span className="text-xs font-bold tracking-widest uppercase">Fotografi Freelance</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-tight mb-6">
                Ceritakan Kisahmu <br className="hidden lg:block" /> Melalui <span className="text-brand-orange">Lensa</span> Kami.
              </h1>

              <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
                Dari momen cosplay hingga foto produk yang elegan, kami hadir untuk membekukan setiap momen berhargamu menjadi karya seni yang abadi.
              </p>

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

              {/* Ini adalah div GLOW (Blur), gambarmu JANGAN ditaruh di dalam sini */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-orange/20 blur-[100px] rounded-full z-0"></div>

              {/* Ini adalah Frame tempat gambarmu seharusnya berada */}
              <div className="relative z-10 w-full max-w-md aspect-4/5 hover:scale-110 rounded-3xl overflow-hidden transition-transform duration-500">
                <Image
                  src="/logo/logo_JP.png"
                  alt="Karya Fotografi"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

            </div>

          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <a href="#tentang" className="flex flex-col items-center text-brand-white/60 hover:text-brand-orange transition-colors">
              <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
              <FaArrowDown size={16} />
            </a>
          </div>
        </section>

        {/* 2. SECTION TENTANG KAMI */}
        <section id="tentang" className="min-h-screen py-24 px-6 flex items-center justify-center overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">

            {/* Bagian Kiri: Gambar Tunggal */}
            <div className="w-full lg:w-1/2 relative lg:pr-10">
              {/* Bingkai Gambar */}
              <div className="relative z-10 w-full rounded-3xl overflow-hidden shadow-2xl aspect-4/5 border border-gray-800">
                <img
                  src="https://amateurphotographer.com/wp-content/uploads/sites/7/2022/08/Tim-Coleman-AP-Nikon-Z30-product-shot_1_820px.jpg"
                  alt="Kamera Nikon Z-30"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 bg-gray-800"
                />
              </div>

              {/* Dekorasi Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-orange/10 blur-[80px] rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl z-0 animate-pulse"></div>
            </div>

            {/* Bagian Kanan: Teks & Statistik */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 text-brand-white mb-6 font-bold text-xs tracking-widest uppercase">
                Mengenal JULIAN.PRODUCTIONS
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Menangkap Momen, <br /> Menciptakan <span className="text-brand-orange">Kenangan.</span>
              </h2>

              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Kami adalah fotografi yang didedikasikan untuk mengabadikan momen terpenting dalam hidup Anda. Dengan pendekatan artistik dan perhatian penuh pada detail, kami memastikan setiap jepretan memiliki cerita dan emosi yang autentik.
              </p>

              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Tim profesional kami siap mendampingi Anda, mulai dari menyusun konsep hingga eksekusi akhir, memberikan pengalaman sesi foto yang santai namun dengan hasil akhir yang luar biasa.
              </p>

              <div className="flex flex-wrap gap-8 border-t border-gray-800 pt-8">
                <div>
                  <h3 className="text-4xl font-black text-brand-orange mb-1">3+</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Tahun Pengalaman</p>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-brand-orange mb-1">75+</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Klien Bahagia</p>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-brand-orange mb-1">80%</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Profesional</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. SECTION LAYANAN/PRODUK */}
        <section id="layanan" className="min-h-screen py-24 px-6 flex items-center justify-center border-y border-gray-900">
          <div className="container mx-auto">

            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/50 text-brand-orange mb-6 font-bold text-xs tracking-widest uppercase">
                Pilihan Paket
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Layanan <span className="text-brand-orange">&</span> Harga
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Pilih paket yang paling sesuai dengan kebutuhan visualmu. Kami menawarkan fleksibilitas dan kualitas premium untuk setiap jepretan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

              {/* Card 1: Portrait */}
              <div className="card bg-black shadow-2xl border border-gray-800 border-t-4 border-t-brand-orange relative overflow-hidden flex flex-col w-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-orange/10 blur-[50px] pointer-events-none"></div>
                {/* flex-1 di sini adalah kunci utamanya */}
                <div className="card-body relative z-10 flex flex-col flex-1">
                  <h3 className="card-title text-2xl font-bold text-brand-orange">Portrait</h3>
                  <p className="text-gray-400 mb-4">Cocok untuk personal branding, foto profil profesional, atau sekadar tampil keren.</p>
                  <div className="text-4xl font-black text-brand-white mb-6 mt-auto">
                    Rp 300<span className="text-lg text-gray-500 font-medium">rb</span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 text-gray-300">
                    <li className="flex items-center gap-2">✓ 1 Jam Sesi Foto</li>
                    <li className="flex items-center gap-2">✓ 10 Foto Edit Pilihan</li>
                    <li className="flex items-center gap-2">✓ Semua File Asli (Google Drive)</li>
                    <li className="flex items-center gap-2 opacity-40 line-through">Cetak Album Fisik</li>
                  </ul>
                  <div className="card-actions justify-center mt-auto w-full pt-4 border-t border-gray-800/50">
                    <a href="#kontak" className="w-full py-3 rounded-full bg-brand-orange text-brand-black font-bold hover:bg-orange-500 transition-colors text-center shadow-[0_0_15px_rgba(248,173,56,0.2)]">
                      Pilih Paket
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Cosplay (Best Seller) */}
              {/* Efek melayang (translate-y) dihapus agar sejajar 100% */}
              <div className="card bg-black shadow-2xl border border-gray-800 border-t-4 border-t-brand-orange relative overflow-hidden flex flex-col w-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-orange/10 blur-[50px] pointer-events-none"></div>
                <div className="card-body relative z-10 flex flex-col flex-1">
                  <h3 className="card-title text-2xl font-bold text-brand-orange pt-2">Cosplay</h3>
                  <p className="text-gray-400 mb-4">Abadikan karakter favoritmu dengan pencahayaan dan mood dramatis yang epik.</p>
                  <div className="text-3xl lg:text-4xl font-black text-brand-white mb-6 leading-tight mt-auto">
                    Rp 15<span className="text-lg text-gray-500 font-medium">rb</span> - 30<span className="text-lg text-gray-500 font-medium">rb</span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 text-gray-300">
                    <li className="flex items-center gap-2">✓ 3 Jam Sesi (Studio/Outdoor)</li>
                    <li className="flex items-center gap-2">✓ 20 Foto Edit + Retouch Efek</li>
                    <li className="flex items-center gap-2">✓ Pengarahan Pose Karakter</li>
                    <li className="flex items-center gap-2">✓ Semua File Asli High-Res</li>
                  </ul>
                  <div className="card-actions justify-center mt-auto w-full pt-4 border-t border-gray-800/50">
                    <a href="#kontak" className="w-full py-3 rounded-full bg-brand-orange text-brand-black font-bold hover:bg-orange-500 transition-colors text-center shadow-[0_0_15px_rgba(248,173,56,0.2)]">
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Wisuda */}
              <div className="card bg-black shadow-2xl border border-gray-800 border-t-4 border-t-brand-orange relative overflow-hidden flex flex-col w-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-brand-orange/10 blur-[50px] pointer-events-none"></div>
                <div className="card-body relative z-10 flex flex-col flex-1">
                  <h3 className="card-title text-2xl font-bold text-brand-orange">Wisuda</h3>
                  <p className="text-gray-400 mb-4">Rayakan momen kelulusanmu bersama keluarga dan sahabat terdekat.</p>
                  <div className="text-4xl font-black text-brand-white mb-6 mt-auto">
                    Rp 500<span className="text-lg text-gray-500 font-medium">rb</span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 text-gray-300">
                    <li className="flex items-center gap-2">✓ 2 Jam Sesi Foto Grup</li>
                    <li className="flex items-center gap-2">✓ 25 Foto Edit Pilihan</li>
                    <li className="flex items-center gap-2">✓ Cetak 1 Frame 10R</li>
                    <li className="flex items-center gap-2">✓ Flashdisk / Link G-Drive</li>
                  </ul>
                  <div className="card-actions justify-center mt-auto w-full pt-4 border-t border-gray-800/50">
                    <a href="#kontak" className="w-full py-3 rounded-full bg-brand-orange text-brand-black font-bold hover:bg-orange-500 transition-colors text-center shadow-[0_0_15px_rgba(248,173,56,0.2)]">
                      Pilih Paket
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. SECTION GALERI */}
        <section id="galeri" className="min-h-screen py-24 px-6">
          <div className="container mx-auto">

            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/50 text-brand-orange mb-6 font-bold text-xs tracking-widest uppercase">
                Portofolio
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Galeri <span className="text-brand-orange">Karya</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Beberapa momen ajaib yang berhasil kami abadikan dengan rasio potret 4:5 yang elegan.
              </p>
            </div>

            {/* Perubahan Utama: Mengubah columns menjadi grid agar rasionya seragam */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

              {/* Item 1 - Menambahkan aspect-[4/5] pada pembungkus gambar */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/5] border border-gray-800">
                <img
                  src="/gallery/gambar_1.jpg"
                  alt="Gallery 1"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 2 */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/5] border border-gray-800">
                <img
                  src="/gallery/gambar_2.jpg"
                  alt="Gallery 2"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 3 */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/5] border border-gray-800">
                <img
                  src="/gallery/gambar_3.jpg"
                  alt="Gallery 3"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 4 */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/5] border border-gray-800">
                <img
                  src="/gallery/gambar_4.jpg"
                  alt="Gallery 4"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 5 */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/5] border border-gray-800">
                <img
                  src="/gallery/gambar_5.jpg"
                  alt="Gallery 5"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 6 */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/5] border border-gray-800">
                <img
                  src="/gallery/gambar_6.jpg"
                  alt="Gallery 6"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 7 */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/5] border border-gray-800">
                <img
                  src="/gallery/gambar_7.jpg"
                  alt="Gallery 7"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 8 (Menambahkan satu item lagi agar grid-nya genap/penuh) */}
              <div className="relative group overflow-hidden rounded-xl cursor-pointer aspect-[4/5] border border-gray-800">
                <img
                  src="/gallery/gambar_8.jpg"
                  alt="Gallery 8"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

            </div>

            <div className="mt-16 text-center">
              <a href="https://www.instagram.com/julian_productionn" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-3 border-2 border-brand-orange text-brand-orange font-bold rounded-full hover:bg-brand-orange hover:text-brand-black transition-colors">
                <FaInstagram size={20} />
                Lihat Lebih Banyak di IG
              </a>
            </div>

          </div>
        </section>

        {/* 5. SECTION KONTAK */}
        <section id="kontak" className="min-h-screen py-24 px-6 border-t border-gray-900 flex items-center justify-center">
          <div className="container mx-auto max-w-6xl">

            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 text-brand-white mb-6 font-bold text-xs tracking-widest uppercase">
                Mari Berdiskusi
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Hubungi <span className="text-brand-orange">Kami</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Punya konsep foto impian atau sekadar ingin tanya harga? Jangan ragu untuk menyapa tim kami.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 bg-[#111111] rounded-3xl p-8 md:p-12 border border-gray-800 shadow-xl">

              {/* Bagian Kiri: Info Kontak */}
              <div className="w-full lg:w-5/12 space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-black border border-gray-800 text-brand-orange rounded-full flex items-center justify-center shrink-0">
                        <FaMapMarkerAlt size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-white">JULIAN.PRODUCTIONS</h4>
                        <p className="text-gray-400 mt-1">Jambi, Indonesia</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-black border border-gray-800 text-brand-orange rounded-full flex items-center justify-center shrink-0">
                        <FaWhatsapp size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-white">Telepon / WhatsApp</h4>
                        <p className="text-gray-400 mt-1">+62 822-8061-9853</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-black border border-gray-800 text-brand-orange rounded-full flex items-center justify-center shrink-0">
                        <FaEnvelope size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-white">Email</h4>
                        <p className="text-gray-400 mt-1">hello@julianproductions.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-brand-white mb-4">Ikuti Kami</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-brand-black border border-gray-800 text-brand-white flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors">
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bagian Kanan: Form UI Dummy & Tombol WA */}
              <div className="w-full lg:w-7/12 bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2">Nama Lengkap</label>
                      <input type="text" className="w-full p-4 bg-brand-black border border-gray-800 text-brand-white rounded-xl focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder-gray-600" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-2">No. WhatsApp</label>
                      <input type="text" className="w-full p-4 bg-brand-black border border-gray-800 text-brand-white rounded-xl focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all placeholder-gray-600" placeholder="0812-xxxx-xxxx" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">Ceritakan Kebutuhanmu</label>
                    <textarea rows={4} className="w-full p-4 bg-brand-black border border-gray-800 text-brand-white rounded-xl focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all resize-none placeholder-gray-600" placeholder="Saya ingin foto pre-wedding bulan depan..."></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <button type="button" className="flex-1 py-4 bg-transparent border-2 border-brand-white text-brand-white font-bold rounded-xl hover:bg-brand-white hover:text-brand-black transition-colors">
                      Kirim Pesan
                    </button>
                    <a href="https://wa.me/6282280619853" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/20">
                      <FaWhatsapp size={24} />
                      Chat via WA
                    </a>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] text-brand-white pb-8 border-t-[3px] border-brand-orange">
        <div className="text-center pt-8 border-t border-gray-800 text-gray-500 text-md">
          <p>&copy; {new Date().getFullYear()} JULIAN.PRODUCTIONS Photography. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}