function removeQueryStringFromUrl(key) {
  const query = window.location.search.substring(1)
  const vars = query.split('&')
  const pairs = []
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split('=')
    if (decodeURIComponent(pair[0]) !== key) {
      pairs.push(`${pair.join('=')}`)
    }
  }

  const qs = pairs.length ? `?${pairs.join('&')}` : ''
  if (window.history.replaceState) {
    window.history.replaceState('', document.title, `${window.location.href.split('?')[0]}${qs}`)
  }
}