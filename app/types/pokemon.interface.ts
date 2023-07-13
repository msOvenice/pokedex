export interface IPokemon {
    results: IDataPokemon[]
}
export interface IDataPokemon {
    id: number
    name: string
    url: string
    image: string
    stats: IStats[]
    types: GroupTypes[]
}

export interface IPokemons {
    pokemon: IDataPokemon
}

export interface IStats {
    base_stat: number
    stat: IStat
}

export interface IStat {
    name: string
}

export interface IDescription {
    flavor_text_entries: FlavorText[]
}

export interface FlavorText {
    flavor_text: string
}

export interface TypeObject {
    id: number;
    name: string;
    image: string
}

type GroupTypes = {
    [key: string]: TypeObject
}

export interface IItem {
    name: string
    url: string
}

export const GroupSVG = [
    {"name": "normal", "image" :"https://www.svgrepo.com/download/420929/pokeball-pokemon-catch.svg"},
    {"name": "fighting", "image" :"https://www.svgrepo.com/download/46089/sword.svg"},
    {"name": "flying", "image" :"https://www.svgrepo.com/download/410696/fly.svg"},
    {"name": "poison", "image" :"https://www.svgrepo.com/download/320274/poison.svg"},
    {"name": "ground", "image" :"https://www.svgrepo.com/download/320899/ground-sprout.svg"},
    {"name": "rock", "image" :"https://www.svgrepo.com/download/307538/rock-fall-fall-danger-dirt.svg"},
    {"name": "bug", "image" :"https://www.svgrepo.com/download/472490/bug.svg"},
    {"name": "ghost", "image" :"https://www.svgrepo.com/download/481800/ghost-3.svg"},
    {"name": "steel", "image" :"https://www.svgrepo.com/download/499255/large-hammer.svg"},
    {"name": "fire", "image" :"https://www.svgrepo.com/download/500378/fire.svg"},
    {"name": "water", "image": "https://www.svgrepo.com/download/499449/water-drop.svg"},
    {"name": "grass", "image": "https://www.svgrepo.com/download/122570/grass-leaves.svg"},
    {"name": "electric", "image": "https://www.svgrepo.com/download/478811/electric.svg"},
    {"name": "physic", "image": "https://www.svgrepo.com/download/296993/physics.svg"},
    {"name": "ice", "image": "https://www.svgrepo.com/download/506219/ice.svg"},
    {"name": "dragon", "image": "https://www.svgrepo.com/download/499128/dragon.svg"},
    {"name": "dark", "image": "https://www.svgrepo.com/download/381213/dark-mode-night-moon.svg"},
    {"name": "fairy", "image": "https://www.svgrepo.com/download/320765/fairy-wand.svg"},
    {"name": "unknown", "image": "https://www.svgrepo.com/download/372737/unknown-status.svg"},
    {"name": "shadow", "image": "https://www.svgrepo.com/download/355443/set-shadows.svg"}
]