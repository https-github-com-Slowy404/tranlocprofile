window.addEventListener("scroll",function(){
    const x=window.pageYOffset;
    console.log(x);
    if(x>700){
        document.querySelector('.header-fixed').style="background-color: #09203f;";
    } else document.querySelector('.header-fixed').style="background-color: transparent;";
});