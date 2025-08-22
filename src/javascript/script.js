const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('#navbar ul li');

function toggleMobileMenu() {
    const mobile_btn_icon = document.querySelector('#mobile_btn i');
    if (mobile_btn_icon.classList.contains('fa-bars')) {
        mobile_btn_icon.classList.remove('fa-bars');
        mobile_btn_icon.classList.add('fa-x');
    } else {
        mobile_btn_icon.classList.remove('fa-x');
        mobile_btn_icon.classList.add('fa-bars');
    }
}

function removeActive(){
    navLi.forEach(li => {
        if(li.classList.contains('active')){
            li.classList.remove('active')
        }        
    });
}



function changeActiveMenu(length){

    if(length< sections[0].offsetHeight){
        removeActive()
        navLi[0].classList.add('active')
    }else if(length < sections[0].offsetHeight + sections[1].offsetHeight - 100){
        removeActive()
        navLi[1].classList.add('active')
    }else{
         removeActive()
        navLi[2].classList.add('active')
    }

}
console.log("Sessoes: ")
sections.forEach(section => {console.log(section.offsetHeight)})
console.log("Acabou Sessoes")

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrollY = window.scrollY - header.offsetHeight;


    console.log(scrollY);

    if(scrollY < 0){
        header.style.boxShadow = 'none';
    }else{
        header.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    }
    
    
    changeActiveMenu(scrollY);
});



document.querySelector('#mobile_btn'),addEventListener('click', function(){
    this.document.querySelector('#mobile_menu').classList.toggle('active');
    toggleMobileMenu();
})