<script setup>
import { email } from '@/data/portfolio'
</script>

<template>
  <section id="contact" class="mx-auto max-w-3xl scroll-mt-20 px-6 py-32 text-center">
    <p v-reveal class="section-label">06. What's next?</p>
    <h2 v-reveal class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">Let's work together</h2>
    <p v-reveal="1" class="mx-auto mt-6 max-w-xl text-lg text-slate-400">
      I'm open to remote full-time roles and freelance projects. Whether you need a scalable SaaS,
      a high-performance API, or help optimizing an existing Laravel app — my inbox is always open.
    </p>

    <a v-reveal :href="`mailto:${email}`" class="mt-10 inline-block rounded-lg bg-brand-500 px-8 py-4 font-semibold text-white shadow-lg shadow-brand-500/20 transition hover:bg-brand-600">Say Hello</a>

    <div class="mt-12 grid gap-4 text-left sm:grid-cols-3">
      <a v-reveal="0" :href="`mailto:${email}`" class="card">
        <p class="text-xs uppercase tracking-wider text-slate-500">Email</p>
        <p class="mt-1 truncate text-sm font-medium text-white">{{ email }}</p>
      </a>
      <a v-reveal="1" href="tel:+8801852211054" class="card">
        <p class="text-xs uppercase tracking-wider text-slate-500">Phone</p>
        <p class="mt-1 text-sm font-medium text-white">+880 1852 211054</p>
      </a>
      <div v-reveal="2" class="card">
        <p class="text-xs uppercase tracking-wider text-slate-500">Location</p>
        <p class="mt-1 text-sm font-medium text-white">Dhaka, Bangladesh</p>
      </div>
    </div>
  </section>
</template>
