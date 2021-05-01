function toggle(active, timeout) {
    const pages = [$('.first'), $('.second'), $('.third')]
    pages.forEach((a, index) => {
        index === active ? a.fadeIn() : a.fadeOut()
    })
    setTimeout(function () {
        active += 1
        active = active > (pages.length - 1) ? 0 : active
        toggle(active, timeout)
    }, timeout)
}



$(document).ready(function () {
    toggle(2, 5000)
})
