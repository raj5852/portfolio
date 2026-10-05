<script setup>
import { experience } from '@/data/portfolio'
</script>

<template>
  <section id="experience" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
    <p v-reveal class="section-label">03. Experience</p>
    <h2 v-reveal class="section-title">Where I've worked</h2>

    <ol class="relative mt-12 space-y-12 border-l border-white/10 pl-8">
      <li v-for="(job, i) in experience" :key="job.company" v-reveal="i" class="relative">
        <span
          class="absolute -left-[39px] top-1.5 h-4 w-4 rounded-full border-4 border-slate-950"
          :class="job.current ? 'bg-brand-500' : 'bg-slate-600'"
        ></span>
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <h3 class="text-xl font-semibold text-white">{{ job.role }} <span class="text-brand-400">@ {{ job.company }}</span></h3>
          <p class="font-mono text-sm text-slate-500">{{ job.period }}</p>
        </div>
        <ul class="mt-4 space-y-2 text-slate-400">
          <li v-for="point in job.points" :key="point" class="flex gap-3">
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"></span>{{ point }}
          </li>
        </ul>
      </li>
    </ol>
  </section>
</template>
