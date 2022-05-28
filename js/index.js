$(document).ready(function () {
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    AOS.init();
    AOS.init({
        duration: 600,
    });
});

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 45,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
});

VanillaTilt.init(document.querySelectorAll(".all-card"), {
    max: 45,
    speed: 400,
    // glare: true,
    // "max-glare": 1,
});

VanillaTilt.init(document.querySelectorAll(".all-card"));

const contact = document.querySelector('.contact')

contact.addEventListener('click', () => {
    document.querySelector('.contact-us').innerHTML = `
    <div class="container" data-aos="fade" data-aos-delay="100">
        <div class="cross"><i class="exits fa fa-close fa-lx"></i></div>
        <h1>Contact Us</h1>
        <div class="form">
            <div class="txt_field">
                <input type="email" id="contat" required>
                <span></span>
                <label>Email</label>
            </div>
            <div class="txt_field">
                <input type="text" id="name" required>
                <span></span>
                <label>Full Name</label>
            </div>
            <div class="txt_field">
                <input type="text" id="taocu" required>
                <span></span>
                <label>Message</label>
            </div>
            <button id="send" class="sendbtn">Send</button>
        </div>
    </div>`
    const send = document.getElementById('send');
    const conta = document.getElementById('contat');
    const name = document.getElementById('name');
    const mess = document.getElementById('taocu');

    send.addEventListener('click', () => {
        let date = new Date();
        let months = ["January", "Febraury", "March", "April", "May", "June", "July", "August", "Septrmber", "October", "November", "December"];

        switch ("") {
            case name.value:
            case conta.value:
            case mess.value:
                alert("Please fill all the details")
                break;
            default:
                db.collection("contact").doc(name.value).set({
                    name: name.value,
                    email: conta.value,
                    message: mess.value,
                    messageat: `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
                })
                .catch((err) => {
                    console.error(err);
                })
        }
    })

    const exits = document.querySelector('.exits')
    exits.addEventListener('click', () => {
        document.querySelector('.contact-us').innerHTML = ``
    })
})

