'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Factory,
  Map,
  Package,
  ScanSearch,
  Ship,
  Users,
} from 'lucide-react'

const supplyChain = [
  { icon: Map, label: 'Vùng trồng' },
  { icon: Users, label: 'Nông hộ' },
  { icon: Package, label: 'Thu mua' },
  { icon: Factory, label: 'Sản xuất' },
  { icon: Ship, label: 'Lô hàng' },
  { icon: ScanSearch, label: 'Truy xuất' },
]

const benefits = [
  'Số hóa dữ liệu tập trung, minh bạch',
  'Kết nối xuyên suốt toàn bộ chuỗi cung ứng',
  'Tự động hóa hồ sơ và quy trình truy xuất',
  'Sẵn sàng đáp ứng yêu cầu EUDR của EU',
]

export default function Page() {
  // 1. Hook tự động tải Tracking Script của BowNow vào Header
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://contents.bownow.jp/forms/sid_79340359725cff1f243d/trace.js"
    script.charset = "utf-8"
    script.async = true
    document.head.appendChild(script)

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  // 2. Hook render Form BowNow vào container liên hệ
  useEffect(() => {
    const container = document.getElementById('bownow-form-container')
    if (!container) return

    const script = document.createElement('script')
    script.src = "https://contents.bownow.jp/forms/sid_79340359725cff1f243d/trace.js"
    script.charset = "utf-8"
    script.async = true

    container.appendChild(script)

    return () => {
      if (container && container.contains(script)) {
        container.removeChild(script)
      }
    }
  }, [])

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9f5] font-sans text-[#173d35] text-base leading-relaxed selection:bg-[#005a9c] selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#dce7dd] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="https://vietnam.controlunion.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Control Union Việt Nam"
            className="flex items-center gap-3 transition hover:opacity-90"
          >
            <span className="flex h-12 w-56 items-center overflow-hidden rounded-xl bg-white px-2">
              <img
                src="/control-union-logo.png"
                alt="Control Union Vietnam"
                className="w-full object-contain"
              />
            </span>
          </a>
          <nav aria-label="Điều hướng chính" className="flex items-center gap-3 sm:gap-4">
            <a
              href="#register"
              className="inline-flex items-center gap-2 rounded-full bg-[#005a9c] px-6 py-3 text-base font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#004070] hover:shadow-lg"
            >
              Đăng ký ngay <ArrowRight className="size-5" aria-hidden="true" />
            </a>
            <a
              href="https://vietnam.controlunion.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border-2 border-[#bfd5c4] px-5 py-3 text-base font-bold text-[#173d35] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#005a9c] hover:bg-[#edf4ed] hover:text-[#005a9c]"
            >
              Về Control Union <ArrowRight className="size-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Banner Section */}
      <section className="relative">
        <div
          className="absolute -right-24 -top-24 size-96 rounded-full bg-[#dfeee0] blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-12 lg:items-center lg:px-10 lg:pb-28 lg:pt-20">
          
          {/* Cột trái: Văn bản thông tin */}
          <div className="lg:col-span-5">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#bfd5c4] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#497363]">
              <span className="size-2 rounded-full bg-[#005a9c]" /> 
              Control Union Việt Nam kính mời tham dự
            </div>
            
            {/* TIÊU ĐỀ NGUYÊN BẢN GỐC NẰM GỌN TRONG ĐÚNG 3 HÀNG - FONT TO BẮT MẮT */}
            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#173d35] sm:text-5xl lg:text-6xl">
              Giới thiệu <span className="text-[#e47d35]">Terax</span><br />
              Số hóa truy xuất nguồn gốc<br />
              &amp; sẵn sàng cho EUDR
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-8 text-[#5c7168]">
              Bạn đang gặp khó khăn trong việc quản lý dữ liệu từ vùng trồng đến thành phẩm, truy xuất nguồn gốc và chuẩn bị hồ sơ EUDR?
            </p>
            
            {/* CTA Main Hero: Màu Xanh Control Union */}
            <div className="mt-8">
              <a
                href="#register"
                className="inline-flex items-center gap-3 rounded-full bg-[#005a9c] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#005a9c]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#004070] hover:shadow-2xl"
              >
                Đăng ký tham dự <ArrowRight className="size-6" aria-hidden="true" />
              </a>
            </div>

            {/* Time Cards */}
            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
              <div className="group rounded-2xl border border-[#c9ddcc] border-l-4 border-l-[#005a9c] bg-white px-5 py-4.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#005a9c] hover:shadow-xl">
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#82968b]">Thời gian</span>
                <strong className="mt-1 block text-2xl font-extrabold text-[#173d35]">11/09/2026</strong>
                <span className="mt-0.5 block font-bold text-[#5c7168]">14:00–16:00</span>
              </div>
              <div className="group rounded-2xl border border-[#c9ddcc] border-l-4 border-l-[#34705a] bg-white px-5 py-4.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#34705a] hover:shadow-xl">
                <span className="block text-xs font-bold uppercase tracking-[0.16em] text-[#82968b]">Hình thức</span>
                <strong className="mt-1 block text-2xl font-extrabold text-[#173d35]">Webinar &amp; Live Demo</strong>
                <span className="mt-0.5 block font-bold text-[#5c7168]">Online</span>
              </div>
            </div>
          </div>

          {/* Cột phải: Hình ảnh Banner phóng TO VÀ CÂN ĐỐI */}
          <div className="relative w-full lg:col-span-7">
            <div className="group overflow-hidden rounded-[2.5rem] bg-[#173d35] p-3 shadow-2xl shadow-[#173d35]/20 ring-1 ring-black/5 transition duration-500 hover:shadow-3xl">
              <img
                src="/eudr-forest.jpg"
                alt="Rừng nhiệt đới nhìn từ trên cao với thông tin EUDR"
                className="aspect-[16/11] w-full rounded-[1.8rem] object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-105"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Terax Supply Chain Section */}
      <section id="terax" className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          
          {/* Block Căn Giữa Cỡ Chữ Lớn */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-base font-extrabold uppercase tracking-[0.18em] text-[#005a9c]">
              Một nền tảng, toàn bộ chuỗi cung ứng
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#173d35]">
              Terax giúp doanh nghiệp chủ động với dữ liệu
            </h2>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-[#657a70]">
              Số hóa và tự động hóa dữ liệu chuỗi cung ứng, từ vùng trồng đến lô hàng cuối cùng — rõ ràng, kết nối và sẵn sàng cho kiểm tra.
            </p>
          </div>

          {/* Supply Chain Interactive Hover Items */}
          <div className="mt-16 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {supplyChain.map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className="group relative flex items-center gap-4 rounded-2xl border border-[#dce8de] bg-[#f7f9f5] p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#005a9c] hover:bg-white hover:shadow-xl lg:block lg:text-center cursor-pointer"
              >
                <span className="mx-auto flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#dfeee0] text-[#005a9c] transition-all duration-300 group-hover:bg-[#005a9c] group-hover:text-white group-hover:scale-110">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <span className="mt-0 text-base font-bold transition-colors duration-300 group-hover:text-[#005a9c] lg:mt-4 lg:block">
                  {label}
                </span>
                {index < supplyChain.length - 1 && (
                  <ChevronRight
                    className="absolute -right-3.5 top-1/2 -translate-y-1/2 hidden text-[#9db6a1] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#005a9c] lg:block z-10"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="group flex gap-3.5 rounded-2xl border border-[#e5ece5] bg-white p-6 text-base font-semibold text-[#46665a] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#005a9c] hover:shadow-md"
              >
                <CheckCircle2 className="size-6 shrink-0 text-[#005a9c] transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Timeline Callout */}
      <section className="bg-[#edf4ed] py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <p className="text-base font-extrabold uppercase tracking-wider text-[#005a9c]">Mốc thời gian quan trọng</p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl text-[#173d35]">
              EUDR áp dụng từ <span className="text-[#e47d35]">31/12/2026</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-[#5e7668]">
            Đừng đợi đến khi yêu cầu bắt buộc. Tham gia webinar để hiểu rõ lộ trình và bắt đầu chuẩn hóa dữ liệu ngay hôm nay.
          </p>
        </div>
      </section>

      {/* Registration Section với Bownow Form Integration */}
      <section id="register" className="py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-10">
          <div>
            <p className="text-base font-extrabold uppercase tracking-[0.18em] text-[#005a9c]">Đăng ký ngay</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-[#173d35]">
              Số hóa dữ liệu hôm nay — sẵn sàng cho EUDR ngày mai!
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#63796d]">
              Điền thông tin để nhận email mời tham dự Webinar &amp; Live Demo Terax từ Control Union Việt Nam.
            </p>
            <div className="mt-8 flex items-center gap-3 text-base font-bold text-[#005a9c]">
              <Check className="size-6 rounded-full bg-[#005a9c]/10 p-1" aria-hidden="true" /> Hoàn toàn miễn phí
            </div>
          </div>

          {/* Form Container nhúng BowNow Form */}
          <div className="rounded-3xl bg-white p-6 shadow-xl shadow-[#173d35]/8 ring-1 ring-[#dce7dd] sm:p-10">
            <div id="bownow-form-container" className="w-full overflow-hidden min-h-[500px]">
              {/* Script BowNow sẽ tự động render Form vào đây */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#173d35] py-10 text-[#c5ded0]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 text-base sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <span>© 2026 Control Union Việt Nam</span>
          <a
            href="https://vietnam.controlunion.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold underline-offset-4 hover:underline hover:text-white"
          >
            vietnam.controlunion.com <ArrowRight className="ml-1 inline size-4" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  )
}