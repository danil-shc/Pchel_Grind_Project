export default {
  mounted(el) {
    const options = {
      rootMargin: '0px 0px -15% 0px',
      threshold: 0.05
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = el.querySelectorAll('.reveal-item')
          
          items.forEach((item) => {
            item.classList.add('active')
          })

          observer.unobserve(el)
        }
      })
    }, options)

    observer.observe(el)

    el._htmlObserver = observer
  },

  unmounted(el) {
    if (el._htmlObserver) {
      el._htmlObserver.disconnect()
      delete el._htmlObserver
    }
  }
}