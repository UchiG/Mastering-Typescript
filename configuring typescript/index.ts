function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2,
    }
}

const comboObj = merge({ name: 'John' }, { ages: [30, 31, 32] })

interface Lengthy {
    length: number
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2
}

console.log(printDoubleLength('Hello World'))


function makeEmptyArray<T = number>(): T[] {
    return []
}

const nums = makeEmptyArray() 
const strings = makeEmptyArray<string>()

interface Song {
    title: string
    artist: string
}

interface Video {
    title: string
    creator: string
    resolution: string
}

class Playlist<T> {
    public queue: T[] = []
    add(el: T) {
        this.queue.push(el)
    }
}

const songs = new Playlist<Song> ()
songs.add({title: 'Praises', artist: 'Hillsong United'})
const videos = new Playlist<Video> ()
videos.add({title: 'music video', creator: 'Hillsong', resolution: '1080p'})