import Image from "next/image";
import { FaCamera, FaArrowDown, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-brand-white text-brand-black font-sans scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full h-20 bg-brand-white/95 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 h-full flex justify-between items-center">

          {/* Logo Dummy Hitam Putih */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-black text-brand-white flex items-center justify-center rounded-sm">
              <FaCamera size={20} />
            </div>
            <span className="text-xl font-black tracking-widest uppercase text-brand-black">
              JULIAN<span className="text-brand-orange">.</span>PRODUCTIONS
            </span>
          </div>

          {/* Menu Navigasi */}
          <ul className="hidden md:flex items-center h-full gap-8 font-semibold text-sm uppercase tracking-wider mr-38">
            <li><a href="#beranda" className="hover:text-brand-orange transition-colors">Beranda</a></li>
            <li><a href="#tentang" className="hover:text-brand-orange transition-colors">Tentang</a></li>
            <li><a href="#layanan" className="hover:text-brand-orange transition-colors">Layanan</a></li>
            <li><a href="#galeri" className="hover:text-brand-orange transition-colors">Galeri</a></li>
          </ul>

          {/* Tombol Kontak Cepat */}
          <div className="hidden md:flex h-full items-center">
            <a href="#kontak" className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-black text-brand-white text-sm font-bold hover:bg-brand-orange hover:text-brand-black transition-all rounded-full leading-none">
              Hubungi Kami
            </a>
          </div>

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
                <span className="text-xs font-bold tracking-widest uppercase">Fotografi Profesional</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-tight mb-6">
                Ceritakan Kisahmu <br className="hidden lg:block" /> Melalui <span className="text-brand-orange">Lensa</span> Kami.
              </h1>

              {/* Sub-headline */}
              <p className="text-lg text-gray-300 mb-10 max-w-xl leading-relaxed">
                Momen-momen foto wisuda hingga foto produk yang elegan, kami hadir untuk membekukan setiap momen berhargamu menjadi karya seni yang abadi.
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
              <div className="relative z-10 w-full max-w-md aspect-4/5 rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
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

        {/* 2. SECTION TENTANG KAMI */}
        <section id="tentang" className="min-h-screen py-24 px-6 bg-brand-white text-brand-black flex items-center justify-center overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row items-center gap-16">

            {/* Bagian Kiri: Kolase Gambar */}
            <div className="w-full lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {/* Gambar 1 (Agak turun) */}
                <div className="mt-12 rounded-2xl overflow-hidden shadow-xl aspect-3/4">
                  <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=600&auto=format&fit=crop"
                    alt="Fotografer beraksi"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Gambar 2 (Agak naik) */}
                <div className="mb-12 rounded-2xl overflow-hidden shadow-xl aspect-3/4">
                  <img
                    src="https://images.unsplash.com/photo-1520390116614-d537f8e77241?q=80&w=600&auto=format&fit=crop"
                    alt="Kamera"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Dekorasi Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gray-100 rounded-full z-0"></div>
              {/* Aksen titik-titik oranye (opsional) */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-brand-orange/20 rounded-full blur-xl z-0"></div>
            </div>

            {/* Bagian Kanan: Teks & Statistik */}
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-brand-black mb-6 font-bold text-xs tracking-widest uppercase">
                Mengenal JULIAN.PRODUCTIONS
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Menangkap Momen, <br /> Menciptakan <span className="text-brand-orange">Kenangan.</span>
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Kami adalah studio fotografi yang didedikasikan untuk mengabadikan momen terpenting dalam hidup Anda. Dengan pendekatan artistik dan perhatian penuh pada detail, kami memastikan setiap jepretan memiliki cerita dan emosi yang autentik.
              </p>

              {/* Statistik Pencapaian */}
              <div className="flex flex-wrap gap-8 border-t border-gray-200 pt-8">
                <div>
                  <h3 className="text-4xl font-black text-brand-orange mb-1">3+</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Tahun Pengalaman</p>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-brand-orange mb-1">100+</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Klien Bahagia</p>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-brand-orange mb-1">100%</h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Profesional</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 3. SECTION LAYANAN/PRODUK */}
        <section id="layanan" className="min-h-screen py-24 px-6 bg-gray-50 flex items-center justify-center">
          <div className="container mx-auto">

            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange mb-6 font-bold text-xs tracking-widest uppercase">
                Pilihan Paket
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-brand-black">
                Layanan <span className="text-brand-orange">&</span> Harga
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Pilih paket yang paling sesuai dengan kebutuhan visualmu. Kami menawarkan fleksibilitas dan kualitas premium untuk setiap jepretan.
              </p>
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

              {/* Card 1: Basic / Portrait */}
              <div className="card bg-brand-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="card-body">
                  <h3 className="card-title text-2xl font-bold text-brand-black">Portrait Session</h3>
                  <p className="text-gray-500 mb-4">Cocok untuk personal branding, wisuda, atau katalog produk simpel.</p>
                  <div className="text-4xl font-black text-brand-black mb-6">
                    Rp 500<span className="text-lg text-gray-400 font-medium">rb</span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 text-gray-600">
                    <li className="flex items-center gap-2">✓ 2 Jam Sesi Foto</li>
                    <li className="flex items-center gap-2">✓ 15 Foto Edit Pilihan</li>
                    <li className="flex items-center gap-2">✓ Semua File Asli (Google Drive)</li>
                    <li className="flex items-center gap-2 opacity-40 line-through">Cetak Album Fisik</li>
                  </ul>
                  <div className="card-actions justify-center">
                    <a href="#kontak" className="w-full py-3 rounded-full border-2 border-brand-black text-brand-black font-bold hover:bg-brand-black hover:text-brand-white transition-colors text-center">
                      Pilih Paket
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Premium / Pre-wedding (Highlighted) */}
              <div className="card bg-brand-black text-brand-white shadow-2xl transform md:-translate-y-4 border-t-4 border-brand-orange">
                <div className="card-body">
                  <div className="absolute top-0 right-0 bg-brand-orange text-brand-black text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                    BEST SELLER
                  </div>
                  <h3 className="card-title text-2xl font-bold text-brand-orange">Pre-Wedding</h3>
                  <p className="text-gray-400 mb-4">Paket favorit untuk mengabadikan kisah cinta sebelum hari bahagia.</p>
                  <div className="text-4xl font-black text-brand-white mb-6">
                    Rp 2.5<span className="text-lg text-gray-400 font-medium">jt</span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 text-gray-300">
                    <li className="flex items-center gap-2 text-brand-white">✓ Seharian Penuh (Max 8 Jam)</li>
                    <li className="flex items-center gap-2 text-brand-white">✓ 50 Foto Edit Premium</li>
                    <li className="flex items-center gap-2 text-brand-white">✓ 2 Lokasi Outdoor/Indoor</li>
                    <li className="flex items-center gap-2 text-brand-white">✓ Cetak 1 Frame Canvas 40x60cm</li>
                  </ul>
                  <div className="card-actions justify-center">
                    <a href="#kontak" className="w-full py-3 rounded-full bg-brand-orange text-brand-black font-bold hover:bg-orange-500 transition-colors text-center shadow-[0_0_15px_rgba(248,173,56,0.3)]">
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 3: Wedding / Event */}
              <div className="card bg-brand-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="card-body">
                  <h3 className="card-title text-2xl font-bold text-brand-black">Wedding / Event</h3>
                  <p className="text-gray-500 mb-4">Dokumentasi komprehensif untuk acara pernikahan atau event besar.</p>
                  <div className="text-4xl font-black text-brand-black mb-6">
                    Rp 4.5<span className="text-lg text-gray-400 font-medium">jt</span>
                  </div>
                  <ul className="flex flex-col gap-3 mb-8 text-gray-600">
                    <li className="flex items-center gap-2">✓ 2 Fotografer + 1 Videografer</li>
                    <li className="flex items-center gap-2">✓ Video Cinematic 3-5 Menit</li>
                    <li className="flex items-center gap-2">✓ Cetak Album Eksklusif 100 Hal</li>
                    <li className="flex items-center gap-2">✓ Flashdisk Isi Semua File</li>
                  </ul>
                  <div className="card-actions justify-center">
                    <a href="#kontak" className="w-full py-3 rounded-full border-2 border-brand-black text-brand-black font-bold hover:bg-brand-black hover:text-brand-white transition-colors text-center">
                      Pilih Paket
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. SECTION GALERI */}
        <section id="galeri" className="min-h-screen py-24 px-6 bg-brand-black text-brand-white">
          <div className="container mx-auto">

            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/50 text-brand-orange mb-6 font-bold text-xs tracking-widest uppercase">
                Portofolio
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Galeri <span className="text-brand-orange">Karya</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Beberapa momen ajaib yang berhasil kami abadikan. Biarkan karya kami yang berbicara.
              </p>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

              {/* Item 1 */}
              <div className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer">
                <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=600&auto=format&fit=crop" alt="Gallery 1" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 2 */}
              <div className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer">
                <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop" alt="Gallery 2" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 3 */}
              <div className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop" alt="Gallery 3" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 4 */}
              <div className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer">
                <img src="https://images.unsplash.com/photo-1532712938730-4e36c457d913?q=80&w=600&auto=format&fit=crop" alt="Gallery 4" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 5 */}
              <div className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer">
                <img src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop" alt="Gallery 5" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 6 */}
              <div className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer">
                <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=600&auto=format&fit=crop" alt="Gallery 6" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

              {/* Item 7 */}
              <div className="break-inside-avoid relative group overflow-hidden rounded-xl cursor-pointer">
                <img src="https://images.unsplash.com/photo-1505934333218-8fe21ff88d40?q=80&w=600&auto=format&fit=crop" alt="Gallery 7" className="w-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/20 transition-colors duration-500"></div>
              </div>

            </div>

            {/* Tombol Lihat Lebih Banyak */}
            <div className="mt-16 text-center">
              <a href="https://www.instagram.com/julian.productions_" className="inline-flex items-center gap-3 px-8 py-3 border-2 border-brand-orange text-brand-orange font-bold rounded-full hover:bg-brand-orange hover:text-brand-black transition-colors" target="_blank">
                <FaInstagram size={20} />
                Lihat Lebih Banyak di IG
              </a>
            </div>

          </div>
        </section>

        {/* 5. SECTION KONTAK */}
        <section id="kontak" className="min-h-screen py-24 px-6 bg-brand-white text-brand-black flex items-center justify-center">
          <div className="container mx-auto max-w-6xl">

            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-brand-black mb-6 font-bold text-xs tracking-widest uppercase">
                Mari Berdiskusi
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Hubungi <span className="text-brand-orange">Kami</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Punya konsep foto impian atau sekadar ingin tanya harga? Jangan ragu untuk menyapa tim kami.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-16 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">

              {/* Bagian Kiri: Info Kontak */}
              <div className="w-full lg:w-5/12 space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-black text-brand-orange rounded-full flex items-center justify-center shrink-0">
                        <FaMapMarkerAlt size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-black">JULIAN.PRODUCTIONS</h4>
                        <p className="text-gray-600 mt-1">Jambi, Indonesia</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-black text-brand-orange rounded-full flex items-center justify-center shrink-0">
                        <FaWhatsapp size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-black">Telepon / WhatsApp</h4>
                        <p className="text-gray-600 mt-1">+62 812-3456-7890</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-black text-brand-orange rounded-full flex items-center justify-center shrink-0">
                        <FaEnvelope size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-black">Email</h4>
                        <p className="text-gray-600 mt-1">hello@julianproductions.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-brand-black mb-4">Ikuti Kami</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 rounded-full bg-brand-white border-2 border-gray-200 text-brand-black flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors shadow-sm">
                      <FaInstagram size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bagian Kanan: Form UI Dummy & Tombol WA */}
              <div className="w-full lg:w-7/12 bg-brand-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
                      <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">No. WhatsApp</label>
                      <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all" placeholder="0812-xxxx-xxxx" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Ceritakan Kebutuhanmu</label>
                    <textarea rows={4} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-orange transition-all resize-none" placeholder="Saya ingin foto pre-wedding bulan depan..."></textarea>
                  </div>

                  {/* Tombol Aksi */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-4">
                    <button type="button" className="flex-1 py-4 bg-brand-black text-brand-white font-bold rounded-xl hover:bg-gray-800 transition-colors">
                      Kirim Pesan
                    </button>
                    {/* Tombol Asli untuk direct WA */}
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex-1 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2 shadow-lg">
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
      <footer className="bg-brand-black text-brand-white pt-16 pb-8 border-t-10px border-brand-orange">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-white text-brand-black flex items-center justify-center rounded-sm">
                <FaCamera size={20} />
              </div>
              <span className="text-2xl font-black tracking-widest uppercase">
                JULIAN<span className="text-brand-orange">.</span>PRODUCTIONS
              </span>
            </div>

            <ul className="flex flex-wrap justify-center gap-6 md:gap-10 font-medium text-gray-400">
              <li><a href="#beranda" className="hover:text-brand-orange transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-brand-orange transition-colors">Tentang</a></li>
              <li><a href="#layanan" className="hover:text-brand-orange transition-colors">Layanan</a></li>
              <li><a href="#galeri" className="hover:text-brand-orange transition-colors">Galeri</a></li>
            </ul>
          </div>

          <div className="text-center pt-8 border-t border-gray-800 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} JULIAN.PRODUCTIONS Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}