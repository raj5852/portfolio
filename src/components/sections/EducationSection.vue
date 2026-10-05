<script setup>
import { education } from '@/data/portfolio'
</script>

<template>
  <section id="education" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
    <p v-reveal class="section-label">05. Education</p>
    <h2 v-reveal class="section-title">Education</h2>

    <div class="mt-10 grid gap-6 md:grid-cols-2">
      <div v-for="(item, i) in education" :key="item.degree" v-reveal="i" class="card">
        <p class="font-mono text-sm text-slate-500">{{ item.period }}</p>
        <h3 class="mt-2 text-lg font-semibold text-white">{{ item.degree }}</h3>
        <p class="mt-1 text-slate-400">{{ item.school }}</p>
      </div>
    </div>
  </section>
</template>
