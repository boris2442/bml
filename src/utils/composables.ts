import { ref, watch } from 'vue'

export function useDarkMode() {
  const isDark = ref(localStorage.getItem('darkMode') === 'true')

  const toggleDarkMode = () => {
    isDark.value = !isDark.value
    localStorage.setItem('darkMode', String(isDark.value))
    if (isDark.value) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  watch(isDark, (newValue) => {
    localStorage.setItem('darkMode', String(newValue))
    if (newValue) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  if (isDark.value) {
    document.documentElement.classList.add('dark')
  }

  return { isDark, toggleDarkMode }
}

export function useLanguage() {
  const language = ref(localStorage.getItem('language') || 'fr')

  watch(language, (newValue) => {
    localStorage.setItem('language', newValue)
  })

  return { language }
}
