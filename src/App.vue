<script setup>
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>

<template>
  <div aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div class="animate-blob absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-brand-600/20 blur-3xl"></div>
    <div class="animate-blob absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-indigo-600/15 blur-3xl [animation-delay:-6s]"></div>
    <div class="animate-blob absolute bottom-0 left-0 h-[380px] w-[380px] rounded-full bg-fuchsia-600/10 blur-3xl [animation-delay:-12s]"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
  </div>

  <TheNavbar />

  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <EducationSection />
    <ContactSection />
  </main>

  <TheFooter />
</template>
