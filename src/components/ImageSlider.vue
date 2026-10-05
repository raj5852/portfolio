<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  alt: { type: String, default: '' },
  autoplay: { type: Number, default: 0 },
  start: { type: Number, default: 0 },
})

const emit = defineEmits(['select'])

const current = ref(props.start)
const hasMany = computed(() => props.images.length > 1)

const go = (index) => {
  const total = props.images.length
  current.value = (index + total) % total
}
const next = () => go(current.value + 1)
const prev = () => go(current.value - 1)

watch(() => props.images, () => { current.value = 0 })

let timer
const stop = () => clearInterval(timer)
const start = () => {
  stop()
  if (!hasMany.value || !props.autoplay) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  timer = setInterval(next, props.autoplay)
}

let touchStartX = 0
const onTouchStart = (e) => {
  touchStartX = e.touches[0].clientX
  stop()
}
const onTouchEnd = (e) => {
  const delta = e.changedTouches[0].clientX - touchStartX
  if (Math.abs(delta) > 40) (delta < 0 ? next : prev)()
  start()
}

onMounted(start)
onBeforeUnmount(stop)

defineExpose({ next, prev })
</script>

<template>
  <div
    class="group/slider relative aspect-video overflow-hidden bg-slate-900"
    @mouseenter="stop"
    @mouseleave="start"
    @touchstart.passive="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="flex h-full transition-transform duration-500 ease-out" :style="{ transform: `translateX(-${current * 100}%)` }">
      <button
        v-for="(src, i) in images"
        :key="src"
        type="button"
        class="h-full w-full shrink-0 cursor-zoom-in"
        :aria-label="`Open ${alt} screenshot ${i + 1}`"
        :tabindex="i === current ? 0 : -1"
        @click="emit('select', i)"
      >
        <img :src="src" :alt="`${alt} screenshot ${i + 1}`" class="h-full w-full object-cover" loading="lazy" draggable="false" />
      </button>
    </div>

    <template v-if="hasMany">
      <button
        type="button"
        aria-label="Previous screenshot"
        class="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white opacity-0 backdrop-blur transition group-hover/slider:opacity-100 hover:bg-brand-500 focus-visible:opacity-100"
        @click="prev"
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button
        type="button"
        aria-label="Next screenshot"
        class="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white opacity-0 backdrop-blur transition group-hover/slider:opacity-100 hover:bg-brand-500 focus-visible:opacity-100"
        @click="next"
      >
        <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
      </button>

      <div class="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        <button
          v-for="(_, i) in images"
          :key="i"
          type="button"
          :aria-label="`Go to screenshot ${i + 1}`"
          class="h-1.5 rounded-full transition-all"
          :class="i === current ? 'w-6 bg-brand-400' : 'w-1.5 bg-white/40 hover:bg-white/70'"
          @click="go(i)"
        ></button>
      </div>

      <span class="absolute left-3 top-3 rounded-md bg-slate-950/70 px-2 py-0.5 font-mono text-[11px] text-slate-300 backdrop-blur">
        {{ current + 1 }} / {{ images.length }}
      </span>
    </template>
  </div>
</template>
