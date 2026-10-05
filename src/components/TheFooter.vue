<script setup>
import { socials } from '@/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-white/10">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row">
      <p>&copy; {{ year }} Raj Kumar Paul.</p>
      <div class="flex gap-6">
        <a :href="socials.github" target="_blank" rel="noopener" class="transition hover:text-white">GitHub</a>
        <a :href="socials.linkedin" target="_blank" rel="noopener" class="transition hover:text-white">LinkedIn</a>
        <a :href="socials.leetcode" target="_blank" rel="noopener" class="transition hover:text-white">LeetCode</a>
      </div>
    </div>
  </footer>
</template>
