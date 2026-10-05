<script setup>
import { ref, watch, nextTick, onBeforeUnmount } from 'vue'
import ImageSlider from './ImageSlider.vue'

const props = defineProps({
  project: { type: Object, default: null },
  startIndex: { type: Number, default: 0 },
})

const emit = defineEmits(['close'])

const closeButton = ref(null)
const slider = ref(null)

const onKeydown = (e) => {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') slider.value?.next()
  if (e.key === 'ArrowLeft') slider.value?.prev()
}

watch(
  () => props.project,
  async (project) => {
    document.body.style.overflow = project ? 'hidden' : ''
    if (project) {
      window.addEventListener('keydown', onKeydown)
      await nextTick()
      closeButton.value?.focus()
    } else {
      window.removeEventListener('keydown', onKeydown)
    }
  },
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="project"
        class="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm sm:p-6"
        @click.self="emit('close')"
      >
        <div
          role="dialog"
          aria-modal="true"
          :aria-label="project.title"
          class="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-brand-500/10"
        >
          <button
            ref="closeButton"
            type="button"
            aria-label="Close"
            class="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-slate-300 backdrop-blur transition hover:bg-brand-500 hover:text-white"
            @click="emit('close')"
          >
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" d="M6 6l12 12M18 6L6 18"/></svg>
          </button>

          <ImageSlider v-if="project.images?.length" ref="slider" :images="project.images" :alt="project.title" :start="startIndex" />

          <div class="p-6 sm:p-8">
            <span class="rounded-md bg-brand-500/10 px-2 py-1 font-mono text-xs text-brand-400">{{ project.tag }}</span>
            <h3 class="mt-4 text-2xl font-bold text-white sm:text-3xl">{{ project.title }}</h3>
            <p class="mt-4 leading-relaxed text-slate-400">{{ project.description }}</p>

            <template v-if="project.features?.length">
              <h4 class="mt-8 font-mono text-sm tracking-wider text-brand-400">{{ project.featuresTitle ?? 'Key features' }}</h4>
              <ul class="mt-3 space-y-2 text-slate-300">
                <li v-for="feature in project.features" :key="feature" class="flex gap-3">
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400"></span>{{ feature }}
                </li>
              </ul>
            </template>

            <h4 class="mt-8 font-mono text-sm tracking-wider text-brand-400">Highlights</h4>
            <ul class="mt-3 space-y-1 text-slate-400">
              <li v-for="item in project.highlights" :key="item">→ {{ item }}</li>
            </ul>

            <h4 class="mt-8 font-mono text-sm tracking-wider text-brand-400">Tech stack</h4>
            <div class="mt-3 flex flex-wrap gap-2">
              <span v-for="tech in project.stack" :key="tech" class="chip">{{ tech }}</span>
            </div>

            <div class="mt-8 flex flex-wrap gap-3">
              <a
                v-if="project.liveLink"
                :href="project.liveLink"
                target="_blank"
                rel="noopener"
                class="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
              >Live Demo</a>
              <a
                v-if="project.githubLink"
                :href="project.githubLink"
                target="_blank"
                rel="noopener"
                class="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
              >Source Code</a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
