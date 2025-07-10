import { ref, watchEffect, onMounted } from 'vue'

export const isDark = ref(false)

function updateClass() {
  document.documentElement.classList.toggle('dark', isDark.value)
}

export function useDarkMode() {
  onMounted(() => {
    const saved = localStorage.getItem('theme')
    isDark.value = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
    updateClass()
  })

  watchEffect(() => {
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    updateClass()
  })

  function toggle() {
    isDark.value = !isDark.value
  }

  return { isDark, toggle }
}