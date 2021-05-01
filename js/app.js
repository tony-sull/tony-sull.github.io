(function () {
    const scrollToTop = document.getElementById('scrollToTop')
    const techAnchor = document.getElementById('tech')

    function debounce(func, timeout = 30) {
        let timer

        return (...args) => {
            clearTimeout(timer)
            timer = setTimeout(() => { func.apply(this, args); }, timeout)
        }
    }

    if (scrollToTop && techAnchor) {
        const updateScrollToTop = () => {
            if (techAnchor.getBoundingClientRect().top <= 50) {
                scrollToTop.classList.add('active')
            } else {
                scrollToTop.classList.remove('active')
            }
        }

        window.addEventListener('scroll', debounce(updateScrollToTop))
        window.addEventListener('resize', updateScrollToTop)
        window.addEventListener('load', updateScrollToTop)

        scrollToTop.addEventListener('click', () => {
            if (window.scrollY > 100) {
                window.scrollTo(0, 0)
            }
        })
    }
})();