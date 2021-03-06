import sidebar from './config/sidebar'

const handler = () => {
  let rect = document.body.getBoundingClientRect()
  if (!document.hidden) {
    sidebar.opened = rect.width - 3 >= 768
  }
}

window.addEventListener('DOMContentLoaded', handler)
window.addEventListener('resize', handler)
document.addEventListener('visibilitychange', handler)
