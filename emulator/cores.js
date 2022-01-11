let cores = {
    "3do" :{
        "name" : "3DO",
        "extensions" : ["bin", "cue", "iso"],
        "bios" : {
            "Panasonic FZ-1" : "f47264dd47fe30f73ab3c010015c155b",
            "Panasonic FZ-10-1" : "51f2f43ae2f3508a14d9f56597e2d3ce",
            "Panasonic FZ-10-2" : "1477bda80dc33731a65468c1f5bcbee9",
            "Panasonic FZ-10-E-1" : "a48e6746bd7edec0f40cff078f0bb19f",
            "Panasonic FZ-10-E-2" : "cf11bbb5a16d7af9875cca9de9a15e09",
            "Goldstar GDO-101M" : "8639fd5e549bd6238cfee79e3e749114",
            "Sanyo IMP-21J TRY" : "35fa1a1ebaaeea286dc5cd15487c13ea",
            "Shootout At Old Tucson" : "8970fc987ab89a7f64da9f8a8c4333ff",
            "Panasonic FZ-1 Kanji ROM" : "b8dc97f778a6245c58e064b0312e8281",
            "Panasonic FZ-10JA Kanji ROM" : "428577250f43edc902ea239c50d2240d",
            "Panasonic FZ-1J Kanji ROM" : "c23fb5d5e6bb1c240d02cf968972be37"
        },
        "defs" : {
            "EJS_biosUrl" : ""
        }
    },
    "arcade" : {
        "name" : "Arcade",
        "extensions" : ["zip"],
        "bios" : {
            "Neo Geo Games" : "410c65b2debdf4f2dac9ea2b23aa496e",
            "IGS Games" : "653e991a39e867354d090c3394157d1c",
            "ISG Selection Master Type 2006" : "4a56d56e2219c5e2b006b66a4263c01c"
        },
        "defs" : {
            "EJS_biosUrl" : ""
        }
    },
    "atari2600" : {
        "name" : "Atari 2600",
        "extensions" : []
    },
    "atari7800" : {
        "name" : "Atari 7800",
        "extensions" : []
    },
    "jaguar" : {
        "name" : "Atari Jaguar",
        "extensions" : []
    },
    "lynx" : {
        "name" : "Atari Lynx",
        "extensions" : []
    },
    "msx" : {
        "name" : "MSX",
        "extensions" : [],
        "defs" : {
            "EJS_biosUrl" : ""
        }
    },
    "ngp" : {
        "name" : "Neo Geo Poket",
        "extensions" : []
    },
    "nes" : {
        "name" : "NES-Famicom",
        "extensions" : ["fds", "nes", "unif", "unf"],
        "bios" : {
            "Famicom" : "ca30b50f880eb660a320674ed365ef7a"
        },
        "defs" : {
            "EJS_biosUrl" : "",
            "EJS_lightgun" : false
        }
    },
    "n64" : {
        "name" : "Nintendo 64",
        "extensions" : ["z64"]
    },
    "nds" : {
        "name" : "Nintendo DS",
        "extensions" : []
    },
    "gba" : {
        "name" : "Nintendo Game Boy Advance",
        "extensions" : [],
        "bios" : {
            "Game Boy Advance" : "a860e8c0b6d573d191e4ec7db1b1e4f6",
            "Game Boy" : "32fbbd84168d3482956eb3c5051637f5",
            "Game Boy Color" : "dbfce9db9deaa2567f6a84fde55f9680",
            "Super Game Boy" : "d574d4f9c12f305074798f54c091a8b4"
        },
        "defs" : {
            "EJS_biosUrl" : ""
        }
    },
    "gb" : {
        "name" : "Nintendo Game Boy",
        "extensions" : [],
        "bios" : {
            "Game Boy" : "32fbbd84168d3482956eb3c5051637f5",
            "Game Boy Color" : "dbfce9db9deaa2567f6a84fde55f9680"
        },
        "defs" : {
            "EJS_biosUrl" : ""
        }
    },
    "psx" : {
        "name" : "PlayStation",
        "extensions" : ["bin", "cue", "img", "mdf", "pbp", "toc", "cbn", "m3u", "ccd"],
        "bios" : {
            "PlayStation 1 JP" : "8dd7d5296a650fac7319bce665a6a53c",
            "PlayStation 1 US" : "490f666e1afb15b7362b406ed1cea246",
            "PlayStation 1 EU" : "32736f17079d0b2b7024407c39bd3050"
        },
        "defs" : {
            "EJS_biosUrl" : ""
        }
    },
    "sega32x" : {
        "name" : "Sega 32X",
        "extensions" : []
    },
    "segaCD" : {
        "name" : "Sega CD",
        "extensions" : [],
        "bios" : {
            "MegaCD EU-1" : "e66fa1dc5820d254611fdcdba0662372",
            "MegaCD EU-2" : "278a9397d192149e84e820ac621a8edd",
            "SegaCD US" : "854b9150240a198070150e4566ae1290"
        }
    },
    "segaGG" : {
        "name" : "Sega Game Gear",
        "extensions" : [],
        "bios" : {
            "GameGear (bootrom opt.)" : "672e104c3be3a238301aceffc3b23fd6"
        }
    },
    "segaMS" : {
        "name" : "Sega Master System",
        "extensions" : [],
        "bios" : {
            "MasterSystem EU (bootrom opt.)" : "840481177270d5642a14ca71ee72844c",
            "MasterSystem US (bootrom opt.)" : "840481177270d5642a14ca71ee72844c",
            "MasterSystem JP (bootrom opt.)" : "24a519c53f67b00640d0048ef7089105"
        }
    },
    "segaMD" : {
        "name" : "Sega Mega Drive",
        "extensions" : []
    },
    "segaSaturn" : {
        "name" : "Sega Saturn",
        "extensions" : [],
        "bios" : {
            "Saturn (opt.)" : "af5828fdff51384f99b3c4926be27762"
        },
        "defs" : {
            "EJS_biosUrl" : ""
        }
    },
    "snes" : {
        "name" : "SNES",
        "extensions" : ["smc", "fig", "sfc", "gd3", "gd7", "dx2", "bsx", "swc"],
        "bios" : {
            "Saturn (opt.)" : "af5828fdff51384f99b3c4926be27762"
        },
        "defs" : {
            "EJS_mouse" : false,
            "EJS_multitap" : false
        }
    },
    "pce" : {
        "name" : "TurboGrafs 16-PC Engine",
        "extensions" : [],
        "bios" : {
            "Super CD-ROM2 System" : "38179df8f4ac870017db21ebcbf53114"
        },
        "defs" : {
            "EJS_biosUrl" : ""
        }
    },
    "vb" : {
        "name" : "Virtual Boy",
        "extensions" : []
    },
    "ws" : {
        "name" : "WanderSwan-Color",
        "extensions" : []
    }
}