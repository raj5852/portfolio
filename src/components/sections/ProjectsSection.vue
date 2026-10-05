<script setup>
import { ref } from 'vue'
import { projects } from '@/data/portfolio'
import ImageSlider from '@/components/ImageSlider.vue'
import ProjectModal from '@/components/ProjectModal.vue'

const selected = ref(null)
const startIndex = ref(0)

const open = (project, index = 0) => {
  selected.value = project
  startIndex.value = index
}
</script>

<template>
  <section id="projects" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
    <p v-reveal class="section-label">04. Projects</p>
    <h2 v-reveal class="section-title">Things I've built</h2>

    <div class="mt-12 grid gap-6 md:grid-cols-2">
      <article v-for="(project, i) in projects" :key="project.title" v-reveal="i" class="card flex flex-col">
        <ImageSlider
          v-if="project.images?.length"
          :images="project.images"
          :alt="project.title"
          :autoplay="4000"
          class="-mx-6 -mt-6 mb-6 rounded-t-2xl border-b border-white/10"
          @select="open(project, $event)"
        />

        <div class="flex items-start justify-between">
          <span class="rounded-md bg-brand-500/10 px-2 py-1 font-mono text-xs text-brand-400">{{ project.tag }}</span>
          <a v-if="project.link || project.live" :href="project.link ?? project.live" target="_blank" rel="noopener" :aria-label="project.link ? 'Source code' : 'Live website'" class="text-slate-400 transition hover:text-white">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14 3h7v7M21 3l-9 9M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></svg>
          </a>
        </div>
        <h3 class="mt-4 text-xl font-semibold text-white">{{ project.title }}</h3>
        <p class="mt-3 line-clamp-3 text-slate-400">{{ project.description }}</p>
        <ul class="mt-4 space-y-1 text-sm text-slate-400">
          <li v-for="item in project.highlights" :key="item">→ {{ item }}</li>
        </ul>
        <div class="mt-auto flex flex-wrap gap-2 pt-6">
          <span v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</span>
        </div>

        <button
          type="button"
          class="group mt-6 inline-flex w-fit cursor-pointer items-center gap-2 text-sm font-semibold text-brand-400 transition hover:text-white"
          @click="open(project)"
        >
          View details
          <svg class="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </article>
    </div>

    <ProjectModal :project="selected" :start-index="startIndex" @close="selected = null" />
  </section>
</template>
