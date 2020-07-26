document.addEventListener('scroll', function() {
    var
    sT = document.body.scrollTop,
    btn = document.querySelector('.btnUp');
    if (sT > 150){
        btn.style.cssText = 'display:block;';
    }
    else {
        btn.style.cssText = 'display:none;';
    }
});
document.querySelector('.btnUp').addEventListener('click', function(){
    document.body.scrollTop = 0;
});
