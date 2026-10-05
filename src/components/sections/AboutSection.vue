<script setup>
import { stats } from '@/data/portfolio'
</script>

<template>
  <section id="about" class="mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
    <p v-reveal class="section-label">01. About</p>
    <h2 v-reveal class="section-title">Engineering clean, scalable systems</h2>

    <div class="mt-10 grid gap-12 lg:grid-cols-5">
      <div class="space-y-5 text-lg leading-relaxed text-slate-400 lg:col-span-3">
        <p v-reveal="0">
          I'm a full-stack developer based in <span class="text-white">Dhaka, Bangladesh</span>, specializing in
          PHP and Laravel. Over the past five years I've designed and shipped SaaS platforms, multi-tenant
          systems, e-commerce marketplaces and APIs used by tens of thousands of people.
        </p>
        <p v-reveal="1">
          I care about maintainable architecture, SOLID principles and measurable performance. I've
          architected MVPs from scratch, led code reviews, mentored developers, and worked in distributed
          Agile teams across Greece, Cambodia and Bangladesh.
        </p>
        <p v-reveal="2">
          Lately I've been building AI-assisted tooling, including an MCP (Model Context Protocol)
          integration that lets merchants manage their stores through ChatGPT and Claude.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-4 lg:col-span-2">
        <div v-for="(stat, i) in stats" :key="stat.label" v-reveal="i" class="card text-center">
          <p class="text-4xl font-extrabold text-white"><span :data-count="stat.count">0</span>{{ stat.suffix }}</p>
          <p class="mt-1 text-sm text-slate-400">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
