function saveTheme() {
    localStorage.setItem('darkTheme', document.body.classList.contains('dark'))
}

function changeTheme() {
    document.body.classList.toggle('dark')
    saveTheme()
}

function loadTheme() {
    if (localStorage.getItem('darkTheme') === 'true') {
        document.body.classList.add('dark')
        return true
    }
    return false
}

export { changeTheme, loadTheme }