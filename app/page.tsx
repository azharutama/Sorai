'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRight, Menu, Play, ShoppingBag, Sparkles, X } from 'lucide-react'

const products = [
  { name: 'Solstice S-22', type: 'Electric Guitar', price: 'Rp 12.900.000', image: '/product-guitar.png', tag: 'Bestseller' },
  { name: 'Orbit 8', type: 'Analog Synthesizer', price: 'Rp 8.750.000', image: '/product-synth.png', tag: 'New arrival' },
]

export default function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f2ec] text-[#1c1c1c]">
      <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#f5f2ec]/90 text-[#1c1c1c] shadow-sm backdrop-blur-xl' : 'text-white'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="font-display text-2xl font-semibold tracking-[-0.06em]">SONORA<span className="text-[#ef5a3c]">.</span></a>
          <div className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.16em] md:flex">
            <a href="#shop" className="transition-opacity hover:opacity-60">Shop</a>
            <a href="#story" className="transition-opacity hover:opacity-60">Our story</a>
            <a href="#contact" className="transition-opacity hover:opacity-60">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <button aria-label="Shopping bag" className="hidden rounded-full border border-current/30 p-2.5 md:block"><ShoppingBag size={15} strokeWidth={1.5} /></button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'} className="rounded-full border border-current/30 p-2.5 md:hidden">{menuOpen ? <X size={16} /> : <Menu size={16} />}</button>
            <a href="#shop" className="hidden rounded-full bg-[#ef5a3c] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-transform hover:scale-105 sm:block">Jelajahi gear</a>
          </div>
        </div>
        {menuOpen && <div className="border-t border-black/10 bg-[#f5f2ec] px-6 py-5 text-sm font-semibold md:hidden"><div className="flex flex-col gap-5"><a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a><a href="#story" onClick={() => setMenuOpen(false)}>Our story</a><a href="#membership" onClick={() => setMenuOpen(false)}>Membership</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div></div>}
      </nav>

      <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#171717] pb-14 pt-32 text-white md:pb-20">
        <Image src="/hero-instrument.png" alt="Gitar elektrik dan synthesizer di studio musik" fill priority className="object-cover object-center opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/35 to-black/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="mb-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65"><span className="h-2 w-2 rounded-full bg-[#ef5a3c]" /> Musik yang terasa personal</div>
          <h1 className="max-w-4xl font-display text-[clamp(4rem,11vw,9.6rem)] font-medium leading-[0.84] tracking-[-0.075em]">Find your<br /><em className="font-serif font-normal tracking-[-0.06em]">frequency.</em></h1>
          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-xs text-sm leading-relaxed text-white/70">Alat musik pilihan untuk bunyi yang hanya bisa kamu ciptakan.</p>
            <a href="#shop" className="group flex w-fit items-center gap-4 rounded-full bg-[#f5f2ec] px-6 py-4 text-xs font-bold uppercase tracking-[0.12em] text-[#1c1c1c] transition-all hover:bg-[#ef5a3c] hover:text-white">Mulai eksplorasi <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></a>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-white/55 md:flex"><span className="h-px w-10 bg-white/40" /> Scroll untuk merasakan</div>
      </section>

      <section id="shop" className="bg-[#f5f2ec] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef5a3c]">Kurasi minggu ini</p><h2 className="font-display text-5xl tracking-[-0.06em] md:text-7xl">The good stuff<span className="text-[#ef5a3c]">.</span></h2></div><a href="#contact" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] underline underline-offset-8">Lihat semua produk <ArrowRight size={15} /></a></div>
          <div className="grid gap-5 md:grid-cols-2">
            {products.map((product) => <article key={product.name} className="group relative overflow-hidden rounded-[2rem] bg-white p-4"><div className="relative aspect-[1.15] overflow-hidden rounded-[1.5rem] bg-[#ebe7df]"><Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] backdrop-blur">{product.tag}</span><button aria-label={`Tambah ${product.name} ke keranjang`} className="absolute bottom-4 right-4 rounded-full bg-[#1c1c1c] p-3 text-white opacity-0 transition-opacity group-hover:opacity-100"><ShoppingBag size={16} /></button></div><div className="flex items-end justify-between px-2 pb-2 pt-5"><div><h3 className="font-display text-2xl tracking-[-0.04em]">{product.name}</h3><p className="mt-1 text-xs text-black/50">{product.type}</p></div><p className="text-sm font-semibold">{product.price}</p></div></article>)}
          </div>
        </div>
      </section>

      <section id="story" className="bg-[#d9e0d5] px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ef5a3c]">Why Sonora</p><h2 className="font-display text-5xl leading-[0.9] tracking-[-0.065em] md:text-7xl">More than<br /><em className="font-serif font-normal">just gear.</em></h2><p className="mt-8 max-w-sm text-sm leading-7 text-black/65">Kami percaya alat musik yang tepat bukan cuma terdengar bagus. Ia terasa seperti perpanjangan dari dirimu—mengundangmu untuk bermain lebih lama.</p><a href="#membership" className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em]">Kenali kami <ArrowRight size={15} /></a></div><div className="relative aspect-[1.2] overflow-hidden rounded-[2rem] bg-[#b5c0b1]"><div className="absolute inset-0 flex items-center justify-center"><div className="flex h-48 w-48 items-center justify-center rounded-full border border-black/15 md:h-64 md:w-64"><div className="flex h-32 w-32 items-center justify-center rounded-full border border-black/15 md:h-44 md:w-44"><Play size={22} fill="currentColor" /></div></div></div><div className="absolute bottom-6 left-6 text-[10px] font-bold uppercase tracking-[0.18em]">Watch our story — 01:42</div></div></div></section>

      <section id="contact" className="bg-[#1c1c1c] px-6 py-24 text-white lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-12 md:flex-row"><div><Sparkles className="mb-8 text-[#ef5a3c]" size={24} /><h2 className="max-w-2xl font-display text-5xl leading-[0.9] tracking-[-0.065em] md:text-8xl">Make some<br /><em className="font-serif font-normal">noise.</em></h2></div><div className="max-w-xs self-end"><p className="text-sm leading-relaxed text-white/55">Datang, coba, dan temukan suara yang selama ini kamu cari.</p><a href="https://shopee.co.id/" target="_blank" rel="noreferrer" className="mt-7 flex items-center gap-3 rounded-full bg-[#ef5a3c] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em]">Kunjungi toko <ArrowRight size={15} /></a></div></div><div className="mt-24 flex flex-col justify-between gap-5 border-t border-white/15 pt-6 text-[10px] uppercase tracking-[0.16em] text-white/40 md:flex-row"><span>© 2024 Sonora Music Co.</span><span>Jl. Kemang Raya 12, Jakarta Selatan</span><span>Instagram / TikTok / YouTube</span></div></div></section>
    </main>
  )
}
