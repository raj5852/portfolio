<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { navLinks, email } from '@/data/portfolio'

const menuOpen = ref(false)
const scrolled = ref(false)
const progress = ref(0)
const activeSection = ref('')

const onScroll = () => {
  scrolled.value = window.scrollY > 10
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? window.scrollY / max : 0
}

let sectionObserver

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) activeSection.value = `#${entry.target.id}`
      })
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  document.querySelectorAll('main section[id]').forEach((s) => sectionObserver.observe(s))
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  sectionObserver?.disconnect()
})
</script>

<template>
  <div
    class="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-brand-500 via-fuchsia-500 to-indigo-500"
    :style="{ transform: `scaleX(${progress})` }"
  ></div>

  <header
    class="fixed inset-x-0 top-0 z-50 border-b transition"
    :class="scrolled ? 'border-white/10 bg-slate-950/80 backdrop-blur' : 'border-transparent'"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#home" class="font-mono text-lg font-semibold text-white">
        <span class="text-brand-400">&lt;</span>Raj<span class="text-brand-400">/&gt;</span>
      </a>

      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          :class="{ active: activeSection === link.href }"
        >{{ link.label }}</a>
        <a :href="`mailto:${email}`" class="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600">Hire Me</a>
      </div>

      <button class="text-slate-300 md:hidden" aria-label="Toggle menu" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </nav>

    <div v-show="menuOpen" class="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur md:hidden">
      <div class="flex flex-col gap-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          @click="menuOpen = false"
        >{{ link.label }}</a>
      </div>
    </div>
  </header>
</template>
