function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
      ...object1,
      ...object2,
    }
  }
  
  const comboObj = merge({ name: "John" }, { ages: [30, 31, 32] })
  
  interface Lengthy {
    length: number
  }
  
  function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2
  }
  
  console.log(printDoubleLength("Hello World"))
  
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
  
  const songs = new Playlist<Song>()
  songs.add({ title: "Praises", artist: "Hillsong United" })
  const videos = new Playlist<Video>()
  videos.add({ title: "music video", creator: "Hillsong", resolution: "1080p" })
  
  function triple(value: number | string) {
    if (typeof value === "string") {
      return value.repeat(3)
    } else if (typeof value === "number") {
      return value * 3
    }
  }
  
  const el = document.getElementById("status")
  
  if (el) {
    el
  } else {
    el
  }
  
  interface Rooster {
    name: string
    age: number
    weight: number
    kind: "rooster"
  }
  
  interface Cow {
    name: string
    age: number
    weight: number
    kind: "cow"
  }
  
  interface Pig {
    name: string
    age: number
    weight: number
    kind: "pig"
  }

  interface Sheep {
    name: string
    age: number
    weight: number
    kind: "sheep"
  }
  
  type FarmAnimal = Rooster | Cow | Pig
  
  function getFarmAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
      case "rooster":
        return "cockadoodledoo"
      case "cow":
        return "Moo"
      case "pig":
        return "Oink"
      case "sheep":
        return "Baa" 
      default:
        // We should never make it here
        const shouldNeverGetHere: never = animal
        return shouldNeverGetHere
    }
  }
  
  const stevie: Rooster = {
      name: "Stevie",
      weight: 10,
      age: 2,
      kind: "rooster"
  }
  
  console.log(getFarmAnimalSound(stevie))


  