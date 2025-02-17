const powerOf = (x: number, y:number): number => {
    if(y < 0){
        throw new Error("The number must not be negative")
    }

    if(y === 0){
        return 1;
    }
    return x * powerOf(x, y - 1)
}

console.log(powerOf(2, 3));
