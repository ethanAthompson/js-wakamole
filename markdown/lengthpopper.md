function LengthPopper() {
    position.push(Math.floor(Math.random() * 8) + 1 + "")
    if (9 != position.length) {
        console.log(setTimeout(molePopper, 1000))
        console.log(position)   
    }
    if (9 == position.length) {
        clearTimeout(molePopper)
        console.log("MAX!")
    }
}