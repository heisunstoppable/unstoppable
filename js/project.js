    var index = 0;
    change();

    function change() {
        var x = document.getElementsByClassName('slides');

        for(var i = 0; i < x.length; i++) { 
            x[i].style.display = "none"; 
        }
        index++;

        if(index > x.length) { 
            index = 1; 
        };

        x[index - 1].style.display = "block";

        setTimeout(change, 5000);
    }

    
    let scrollContainer = document.querySelector(".gallery");
    let backBtn = document.getElementById("backBtn");
    let nextBtn = document.getElementById("nextBtn");

    scrollContainer.addEventListener("wheel", (evt) =>{
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "smooth";
    })

    nextBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth"
        scrollContainer.scrollLeft += 100;
    });
    
    backBtn.addEventListener("click", ()=>{
        scrollContainer.style.scrollBehavior = "smooth"
        scrollContainer.scrollLeft -= 100;
    });

    
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }