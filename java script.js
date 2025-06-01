var sliderImg=document.getElementById("sliderImg");

var images=new Array(
"img/WhatsApp Image 2024-11-15 at 11.27.01 (1).jpeg",
"img/WhatsApp Image 2024-11-15 at 11.27.01.jpeg"
);
var len=images.length;
var i=0;
function slider (){
   if(i> len -1){
     i=0;
   }
   sliderImg.src=images[i];
   i++;
   setTimeout(slider, 3000);
}

document.getElementById('whatsappIcon').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});


document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

   
    const message = `Hello, I would like to book. My details are: \nName: ${name} \nEmail: ${email} \nPhone: ${phone}`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;

    
    window.open(whatsappUrl, '_blank');

    
    document.getElementById('modal').style.display = 'none';
});


window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

const playButton = document.getElementById("playButton");
const videoModal = document.getElementById("videoModal");
const closeModal = document.querySelector(".close-modal");
const videoPlayer = document.getElementById("videoPlayer");


playButton.addEventListener("click", () => {
  videoModal.style.display = "flex";
  videoPlayer.play(); 
});


closeModal.addEventListener("click", () => {
  videoModal.style.display = "none";
  videoPlayer.pause();
  videoPlayer.currentTime = 0; 
});


window.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
    videoPlayer.pause(); 
    videoPlayer.currentTime = 0; 
  }
});


const hamburgerIcon = document.querySelector('.hamburger-icon');
    const sidebar = document.querySelector('.sidebar');
    const closeIcon = document.querySelector('.sidebar .close-icon');

    hamburgerIcon.addEventListener('click', () => {
        sidebar.classList.add('active');
    });

    closeIcon.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });


    let zlider = document.querySelector('.zlider .list');
    let items = document.querySelectorAll('.zlider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let dots = document.querySelectorAll('.zlider .dots li');
    
    let lengthItems = items.length - 1;
    let active = 0;
    next.onclick = function(){
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadzlider();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadzlider();
    }
    let refreshInterval = setInterval(()=> {next.click()}, 3000);
    function reloadzlider(){
        zlider.style.left = -items[active].offsetLeft + 'px';
        // 
        let last_active_dot = document.querySelector('.zlider .dots li.active');
        last_active_dot.classList.remove('active');
        dots[active].classList.add('active');
    
        clearInterval(refreshInterval);
        refreshInterval = setInterval(()=> {next.click()}, 3000);
    
        
    }
    
    dots.forEach((li, key) => {
        li.addEventListener('click', ()=>{
             active = key;
             reloadzlider();
        })
    })
    window.onresize = function(event) {
        reloadzlider();
    };

    document.getElementById("toggleParagraph").addEventListener("click", function(event) {
        event.preventDefault(); // Prevents page from reloading
        var secondParagraph = document.querySelector(".service-box .hidden");
    
        if (secondParagraph.style.display === "none" || secondParagraph.style.display === "") {
          secondParagraph.style.display = "block"; // Show paragraph
        } else {
          secondParagraph.style.display = "none"; // Hide paragraph
        }
      });