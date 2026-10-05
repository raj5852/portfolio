import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useTypewriter(words) {
  const text = ref('')
  let timer

  onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      text.value = words[0]
      return
    }

    let wordIndex = 0
    let charIndex = 0
    let deleting = false

    const tick = () => {
      const word = words[wordIndex]
      charIndex += deleting ? -1 : 1
      text.value = word.slice(0, charIndex)
      let delay = deleting ? 40 : 90
      if (!deleting && charIndex === word.length) {
        deleting = true
        delay = 1800
      } else if (deleting && charIndex === 0) {
        deleting = false
        wordIndex = (wordIndex + 1) % words.length
        delay = 300
      }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 900)
  })

  onBeforeUnmount(() => clearTimeout(timer))

  return text
}
