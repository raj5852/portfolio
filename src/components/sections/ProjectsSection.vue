<script setup>
import { projects } from '@/data/portfolio'
</script>

<template>
  <section id="projects" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
    <p v-reveal class="section-label">04. Projects</p>
    <h2 v-reveal class="section-title">Things I've built</h2>

    <div class="mt-12 grid gap-6 md:grid-cols-2">
      <article v-for="(project, i) in projects" :key="project.title" v-reveal="i" class="card flex flex-col">
        <div class="flex items-start justify-between">
          <span class="rounded-md bg-brand-500/10 px-2 py-1 font-mono text-xs text-brand-400">{{ project.tag }}</span>
          <a :href="project.link" target="_blank" rel="noopener" aria-label="Source code" class="text-slate-400 transition hover:text-white">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7v7M21 3l-9 9M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></svg>
          </a>
        </div>
        <h3 class="mt-4 text-xl font-semibold text-white">{{ project.title }}</h3>
        <p class="mt-3 text-slate-400">{{ project.description }}</p>
        <ul class="mt-4 space-y-1 text-sm text-slate-400">
          <li v-for="item in project.highlights" :key="item">→ {{ item }}</li>
        </ul>
        <div class="mt-auto flex flex-wrap gap-2 pt-6">
          <span v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
