let diapo = document.querySelectorAll(".diapo");
var actuellement = 0;

function clss()
{
    for(let i = 0; i < diapo.length; i++)
    {
        diapo[i].style.display = "none";
    }
}

function next()
{
    clss();
    if(actuellement === diapo.length-1) actuellement = -1;
    actuellement++;
    diapo[actuellement].style.display = "block";
    diapo[actuellement].style.opacity = 0.4;

    let opacite = 0.4;
    let animation = setInterval(function(){
        opacite += 0.1;
        diapo[actuellement].style.opacity = opacite;
        if(opacite >= 1){
            clearInterval(animation);
            opacite = 0.4;
        }
    }, 100);
}

function back()
{
    clss();
    if(actuellement === 0) actuellement = diapo.length;
    actuellement--;
    diapo[actuellement].style.display = "block";
    diapo[actuellement].style.opacity = 0.4;

    let opacite = 0.4;
    let animation = setInterval(function(){
        opacite += 0.1;
        diapo[actuellement].style.opacity = opacite;
        if(opacite >= 1){
            clearInterval(animation);
            opacite = 0.4;
        }
    }, 100);
}

function start()
{
    clss();
    diapo[actuellement].style.display = "block";
}

start();

// conseil@campus-reunion.com François Miyeni
