const ratio = .2;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio,
};

const handleIntersection = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersection, options)
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r)
});
