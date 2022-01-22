let games = []

// create game list
Object.keys(packs).forEach(pack_name => {
    let pack = packs[pack_name]
    pack['list'].forEach(game => {
        games.push({
            core : pack.core,
            name : game.name,
            file : game.file,
            path : pack_name
        })
    })
})

// sort for alphabetical order
games.sort((a, b) => {
    if(a.name < b.name) { return - 1 } 
    if(a.name > b.name) { return + 1 } 
    return 0
})

// ad game index codes
games.forEach((game, i) => { game.code = i })

let list_index = 0
let menu_index = 0
let list_start = 0

let audio = new Audio()
audio.src = './bin/background.mp3'
audio.loop = true

let loadGameList = (start = list_start) => {
    // hide game view
    let view = document.querySelector('#game-view')
    view.classList.remove('game-open')
    view.outerHTML = '<iframe id="game-view"></iframe>'
    view.lang = "0"
    // load game list
    let list = document.querySelector('#game-list')
    let gidx = 0
    list.innerHTML = ''
    games.forEach(game => {
        if(game.code >= start && game.code < start + 15) {
            let item = document.createElement('button')
            if(gidx === menu_index) { item.classList.add('game-this') }
            item.innerHTML = game.code + 1 + '. &nbsp;' + game.name
            list.appendChild(item)
            gidx++
        }
    })
    list_start = start
    list_index = list_start + menu_index
}

window.addEventListener('load', () => { loadGameList(0) })

let jumpPage = k => {
    if(k === 0) {
        list_start = 0
    } else {
        list_start += k * 15
        if(list_start < 0) {
            list_start = games.length - ((games.length % 15) || 15)
        }
    }
}

let menuDown = () => {
    let n = document.querySelectorAll('button').length
    // middle item
    if(menu_index < n - 1) {
        menu_index++
        loadGameList()
        return
    }
    // end item next page
    if(menu_index === n - 1 && list_index !== games.length - 1) {
        menu_index = 0
        jumpPage(1)
        loadGameList()
        return
    }
    // end item back to first
    if(menu_index === n - 1 && list_index === games.length - 1) {
        menu_index = 0
        jumpPage(0)
        loadGameList()
        return
    }
}

let menuUp = () => {
    // middle item
    if(menu_index > 0) {
        menu_index--
        loadGameList()
        return
    }
    // first item last page
    if(menu_index === 0 && list_index !== 0) {
        menu_index = 14
        jumpPage(-1)
        loadGameList()
        return
    }
    // first item end page
    if(menu_index === 0 && list_index === 0) {
        menu_index = ((games.length % 15) || 15) - 1
        jumpPage(-1)
        loadGameList()
        return
    }
}

window.addEventListener('keydown', e => {
    if(getURLData() !== false) { return }
    if(e.key === 's' || e.key === 'ArrowDown') { menuDown() }
    if(e.key === 'w' || e.key === 'ArrowUp') { menuUp() }
})

window.addEventListener('keypress', e => {
    if(getURLData() !== false) { return }
    if(e.key === 'Enter') {
        let game = games[list_index]
        location = '#' + btoa(JSON.stringify(game))
    }
})

let loadGame = (game = null) => {
    if(game === null) { game = getURLData() }
    if(game === false) { return }
    // open game view
    audio.pause()
    let view = document.querySelector('#game-view')
    let path = '?core=' + game.core + '&path=../roms/' + game.path + '/' + game.file
    view.lang = "1"
    view.focus()
    view.setAttribute('src', 'emulator/index.html' + path)
    view.classList.add('game-open')
}

let getURLData = () => {
    // get current url path
    let game
    try {
        // try decode game data
        game = JSON.parse(atob(location.toString().split('#')[1]))
    } catch(err) {
        // unable to decode
        loadGameList()
        if(audio.paused === true) {
            audio.currentTime = 0
            audio.play()
        }
        return false
    }
    return game
}

window.addEventListener('hashchange', () => { loadGame() })
window.addEventListener('load', () => {

    let game = getURLData()

    if(game === false) {
        if(getURLData() === false) {
            window.addEventListener('click', () => {
                if(audio.paused === true) { audio.play() }
            })
            
            window.addEventListener('keydown', () => {
                if(audio.paused === true) { audio.play() }
            })
        }
        return
    }

    let step = document.querySelector('#user-step')
    step.classList.add('step-open')
    step.addEventListener('click', () => {
        loadGame(game)
        step.classList.remove('step-open')
    })

})

