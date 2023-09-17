function moleDisplayer() {
    setTimeout(moleDisplayer,1000)
    function hidden() { document.getElementById(moleId).src = image0 }
    var moleId = Math.floor(Math.random() * 7)
    
    switch (moleId) {
        case 0: 
            console.log(moleId)
            document.getElementById(moleId).src = image1
            setTimeout(hidden, 1000)
            break;
        case 1:
            console.log(moleId)
            document.getElementById(moleId).src = image1
            setTimeout(hidden, 1000)
            break;
        case 2:
            console.log(moleId)
            document.getElementById(moleId).src = image1
            setTimeout(hidden, 1000)
            break;
        case 3:
            console.log(moleId)
            document.getElementById(moleId).src = image1
            setTimeout(hidden, 1000)
            break;
        case 4:
            console.log(moleId)
            document.getElementById(moleId).src = image1
            setTimeout(hidden, 1000)
            break;
        case 5:
            console.log(moleId)
            document.getElementById(moleId).src = image1
            setTimeout(hidden, 1000)
            break;
        case 6:
            console.log(moleId)
            document.getElementById(moleId).src = image1
            setTimeout(hidden, 1000)
            break;
        case 7:
            console.log(moleId)
            document.getElementById(moleId).src = image1
            setTimeout(hidden, 1000)
            break;
    }
}