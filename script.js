//select some elments ...........
const btns = Array.from(document.querySelectorAll(".plush-sub"));


btns.map((btn) =>{
    btn.addEventListener("click" , (e) =>{
       const parentElm =  e.target.parentElement.parentElement.parentElement.lastElementChild;
       parentElm.classList.toggle("none");

       e.currentTarget.firstElementChild.classList.toggle("fa-plus");
      e.currentTarget.firstElementChild.classList.toggle("fa-minus");
    });
});
