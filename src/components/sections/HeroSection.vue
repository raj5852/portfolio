<script setup>
import { ref } from 'vue'
import { useTypewriter } from '@/composables/useTypewriter'
import { roles, socials } from '@/data/portfolio'

const typed = useTypewriter(roles)
const profileImage = '/me.webp'
const imageFailed = ref(false)
</script>

<template>
  <section id="home" class="mx-auto grid min-h-screen max-w-6xl items-center gap-16 px-6 pt-28 pb-16 lg:grid-cols-[1.4fr_1fr]">
    <div class="order-2 lg:order-1">
      <div class="animate-fade-up inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
        </span>
        Available for remote opportunities
      </div>

      <p class="animate-fade-up mt-8 font-mono text-brand-400 [animation-delay:100ms]">Hi, my name is</p>
      <h1 class="animate-fade-up mt-3 text-5xl font-extrabold tracking-tight sm:text-7xl [animation-delay:200ms]">
        <span class="animate-gradient bg-gradient-to-r from-white via-brand-400 to-white bg-clip-text text-transparent">Raj Kumar Paul.</span>
      </h1>
      <h2 class="animate-fade-up mt-4 min-h-[2.5em] text-3xl font-bold tracking-tight text-slate-500 sm:min-h-[1.25em] sm:text-5xl [animation-delay:300ms]">
        I'm a <span class="text-slate-200">{{ typed }}</span><span class="caret text-brand-400">|</span>
      </h2>

      <p class="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 [animation-delay:400ms]">
        Full-stack PHP/Laravel developer with <span class="text-white">5+ years</span> of experience building
        multi-tenant SaaS platforms, REST APIs, and high-traffic applications — with performance gains of
        up to <span class="text-white">85%</span> through optimized queries, caching, and clean architecture.
      </p>

      <div class="animate-fade-up mt-10 flex flex-wrap items-center gap-4 [animation-delay:500ms]">
        <a href="#projects" class="group inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-brand-500/40">
          View My Work
          <svg class="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <a href="#contact" class="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5">Get In Touch</a>

        <div class="ml-2 flex items-center gap-4">
          <a :href="socials.github" target="_blank" rel="noopener" aria-label="GitHub" class="text-slate-400 transition hover:text-white">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>
          </a>
          <a :href="socials.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" class="text-slate-400 transition hover:text-white">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
          </a>
          <a :href="socials.leetcode" target="_blank" rel="noopener" aria-label="LeetCode" class="text-slate-400 transition hover:text-white">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.48 0a1.37 1.37 0 0 0-.96.44L7.12 6.21l-2.7 2.9a5.2 5.2 0 0 0-1.2 2.06 5.4 5.4 0 0 0 0 2.97 5.3 5.3 0 0 0 1.3 2.21l4.33 4.36a5.3 5.3 0 0 0 7.4.08l2.6-2.53a1.38 1.38 0 1 0-1.92-1.98l-2.6 2.53a2.53 2.53 0 0 1-3.53-.04l-4.33-4.36a2.6 2.6 0 0 1-.6-1.05 2.66 2.66 0 0 1 0-1.43 2.5 2.5 0 0 1 .56-.98l2.7-2.9 5.4-5.77A1.37 1.37 0 0 0 13.48 0Zm-2.87 13.06a1.38 1.38 0 1 0 0 2.76h9.8a1.38 1.38 0 1 0 0-2.76h-9.8Z"/></svg>
          </a>
        </div>
      </div>
    </div>

    <div class="animate-fade-up relative order-1 mx-auto w-64 sm:w-72 lg:order-2 lg:w-full lg:max-w-sm [animation-delay:300ms]">
      <div class="animate-float relative aspect-square">
        <div class="animate-spin-slow absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,var(--color-brand-500),#d946ef,#6366f1,var(--color-brand-500))] opacity-80 blur-sm"></div>
        <div class="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,var(--color-brand-500),#d946ef,#6366f1,var(--color-brand-500))]"></div>
        <div class="relative h-full w-full overflow-hidden rounded-full border-4 border-slate-950 bg-gradient-to-br from-slate-800 to-slate-900">
          <span class="absolute inset-0 flex items-center justify-center text-6xl font-extrabold text-white/80">RKP</span>
          <img v-if="!imageFailed" :src="profileImage" alt="Raj Kumar Paul" class="relative h-full w-full object-cover" @error="imageFailed = true" />
        </div>

        <div class="absolute -left-4 top-8 rounded-xl border border-white/10 bg-slate-900/90 px-3 py-2 shadow-xl backdrop-blur sm:-left-8">
          <p class="text-lg font-bold text-white">5+ yrs</p>
          <p class="text-[11px] text-slate-400">Experience</p>
        </div>
        <div class="absolute -right-4 bottom-10 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/90 px-3 py-2 shadow-xl backdrop-blur sm:-right-8">
          <span class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FF2D20]/15 font-mono text-sm font-bold text-[#FF2D20]">L</span>
          <div>
            <p class="text-sm font-semibold text-white">Laravel</p>
            <p class="text-[11px] text-slate-400">Specialist</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
