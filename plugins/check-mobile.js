export default ({ store }) => {
  const checkMobile = () => {
    store.dispatch('setMobile', window.innerWidth < 768)
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
}
