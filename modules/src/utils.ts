console.log()

export function add(a: number, b: number) {
    return a + b
}

export function sample<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)]
}
