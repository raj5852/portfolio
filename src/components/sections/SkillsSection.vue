<script setup>
import { skillGroups } from '@/data/portfolio'
</script>

<template>
  <section id="skills" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
    <p v-reveal class="section-label">02. Skills</p>
    <h2 v-reveal class="section-title">Tech stack</h2>

    <div class="mt-10 grid gap-6 sm:grid-cols-2">
      <div v-for="(group, i) in skillGroups" :key="group.title" v-reveal="i" class="card">
        <div class="flex items-center gap-3">
          <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/10 text-brand-400">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" :d="group.icon"/></svg>
          </div>
          <h3 class="text-lg font-semibold text-white">{{ group.title }}</h3>
        </div>
        <div class="mt-5 flex flex-wrap gap-2">
          <span v-for="skill in group.skills" :key="skill" class="chip">{{ skill }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
