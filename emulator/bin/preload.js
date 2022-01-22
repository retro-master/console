// fetch parameters
let emu_para = new URL(location.toString())
let emu_path = emu_para.searchParams.get("path")
let emu_core = emu_para.searchParams.get("core")
let emu_data = cores[emu_core]

// default configurations
window['EJS_player'] = '#game'
window['EJS_gameUrl'] = '../roms/' + emu_path
window['EJS_core'] = emu_core
window['EJS_pathtodata'] = 'data/'

// special configurations
if(emu_data.defs) {
    Object.keys(emu_data.defs).forEach(key => {
        window[key] = emu_data.defs[key]
    })
}

// autoplay
window.addEventListener('load', () => {
    document.querySelector("a[class]").click()
})