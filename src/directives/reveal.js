const countUp = (el) => {
  const target = Number(el.dataset.count)
  const start = performance.now()
  const step = (now) => {
    const t = Math.min((now - start) / 1500, 1)
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3)))
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

let observer

const getObserver = () => {
  observer ??= new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target
        el.classList.add('visible')
        el.querySelectorAll('[data-count]').forEach(countUp)
        setTimeout(() => { el.style.transitionDelay = '' }, 1400)
        observer.unobserve(el)
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
  )
  return observer
}

// Usage: v-reveal or v-reveal="index" to stagger siblings by 100ms each (capped at 5).
export const vReveal = {
  mounted(el, { value }) {
    el.style.transitionDelay = `${Math.min(value ?? 0, 5) * 100}ms`
    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  },
}
