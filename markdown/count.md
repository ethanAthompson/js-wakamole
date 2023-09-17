//tracks time
function count() {
    document.getElementById('button').disabled = true
    document.getElementById('seconds').innerHTML = `TIME 0:${timer}`
    setTimeout(count, 1300)

    if (timer == 20) 
    {
        document.getElementById('seconds').style.color = 'orange'
    }
    if (timer == 10) 
    {
        document.getElementById('seconds').style.color = 'red'
        document.getElementById('seconds').innerHTML = `TIME 0:${timer} ALMOST UP!`
    }
    if (timer == 0) 
    {
        document.getElementById('seconds').innerHTML = `TIME 0:0 GAME OVER`
        document.getElementById('button').disabled = false
        clearTimeout(count)
    }
    if (timer !== 0) 
    {
        timer--
    }

}
