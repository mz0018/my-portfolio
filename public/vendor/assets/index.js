console.log('im here');

const images = [
    { name: 'profile', path: './public/vendor/img/temp-profile.png' },
    { name: 'profile', path: './public/vendor/img/remove-bg.png' },
    { name: 'profile', path: './public/vendor/img/new-profile.png' },
    { name: 'profile', path: './public/vendor/img/image.png' },
    { name: 'profile', path: './public/vendor/img/image-removebg-preview.png' },
    { name: 'profile', path: './public/vendor/img/logo.png' },
    { name: 'profile', path: './public/vendor/img/main-logo.png' }
    // { name: 'profile', path: '/public/vendor/img/yellow-removebg-preview.png' },
    // { name: 'profile', path: '/public/vendor/img/black-removebg-preview.png' }
];

const skills =[
    {name: 'Html css', path: './public/vendor/img/htmlCSS.png'},
    {name: 'Mysql', path: './public/vendor/img/sql.png'},
    {name: 'Bootstrap', path: './public/vendor/img/bootstrap.png'},
    {name: 'JavaScript', path: './public/vendor/img/javascript.png'},
    {name: 'PHP', path: './public/vendor/img/php.png'},
];

const navbar = document.querySelector('nav');
const footer = document.querySelector('footer');

// Set the navbar content
navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-transparent shadow-lg fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="${images[5].path}" alt="${images[5].name}" class="img-fluid" width="30" height="24">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mx-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

//section Home
const section_home = document.getElementById('home');

section_home.innerHTML = `
<div class="container">
    <div class="row">
        <div class="col-7 d-flex justify-content-center align-items-center flex-column">
            <p class="im">I'm <span class="name">Hanz Menzi;</span></p>
            <p>Php Develop & Freelancer programmer.</p>
        </div>
        
        <div class="col-5 d-flex justify-content-center align-items-center">
            <img src="${images[6].path}" class="img-profile img-fluid" alt="${images[6].name}">
        </div>

    </div>
</div>
`;

//section about
const section_about = document.getElementById('about');

section_about.innerHTML = `
<div class="container h-100 d-flex flex-column justify-content-center">
    <div class="row mt-5">
        <div class="col-12">
            <p class="text-center about">About me</p>
        </div>
    </div>
    <div class="row flex-grow-1">
        <div class="col-12 col-md-10 col-lg-8 mx-auto">
            <p class="text-start text-md-start">
                Hi there! I’m Hanz Menzi, a passionate freelancer programmer with a love for coding and drawing.
                I specialize in web development, working with technologies like JavaScript, PHP, Bootstrap, and MySQL
                to create dynamic and engaging websites. Whether I’m building a portfolio site or experimenting 
                with animations using anime.js, I’m always eager to tackle new challenges. Outside of coding,
                you might find me sketching or exploring new ideas for creative projects. Welcome to my corner of the web!
            </p>
        </div>
    </div>
    <hr>
    <div class="row justify-content-center mt-4">
        <div class="col-4 col-md-3 col-lg-2">
            <img src="${skills[0].path}" class="logo img-fluid" alt="${skills[0].name}">
        </div>
        <div class="col-4 col-md-3 col-lg-2">
            <img src="${skills[1].path}" class="logo img-fluid" alt="${skills[1].name}">
        </div>
        <div class="col-4 col-md-3 col-lg-2">
            <img src="${skills[2].path}" class="logo img-fluid" alt="${skills[2].name}">
        </div>
        <div class="col-4 col-md-3 col-lg-2">
            <img src="${skills[3].path}" class="logo img-fluid" alt="${skills[3].name}">
        </div>
        <div class="col-4 col-md-3 col-lg-2">
            <img src="${skills[4].path}" class="logo img-fluid" alt="${skills[4].name}">
        </div>
    </div>
</div>`;


//section projects
const section_projects = document.getElementById('projects');

section_projects.innerHTML = `
<div class="container bg-dark d-flex justify-content-center align-items-center">
    <div class="row bg-warning">
        <h1>Project Under Construction</h1>
    </div>
</div>
`;


//section contact
const section_contact = document.getElementById('contact');

section_contact.innerHTML = `
<div class="container ">
    <div class="row mt-5">
        <div class="col-12 col-md-6 text-center py-3" id="chat-container">
            <p class="text-start fs-1 fw-bold">Let's chat.</p>
            <p class="text-start fs-4">Tell me about your project.<br>
            Let's create something together.</p>
            <p class="text-center">
                <i class="bi bi-envelope"> martinezhanzmenzi@gmail.com</i>
            </p>
            <hr>
        </div>


        <div class="col-12 col-md-6 text-center py-3">
            <div class="card bg-transparent">
                <div class="card-body text-start">
                    <div class="form-group">
                        <p class="fs-4 fw-bold">Send me message</p>
                        <input type="text" class="form-control w-100 mb-2">
                    </div>
                    <div class="form-group">
                        <p>Tell me more about your project.</p>
                        <textarea class="form-control mb-2 w-100"></textarea>
                        <button type="submit" class="btn btn-dark">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;


// Set the footer content
footer.innerHTML = `
<div class="container">
    <div class="row">
        <div class="col-md-12 text-center">
        <hr>
            <p class="fs-6">&copy; 2024 Martinez Website. All rights reserved.</p>
        </div>
    </div>
</div>
`;

// Add event listeners to nav links
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        // Remove 'active' class from all nav links
        document.querySelectorAll('.nav-link').forEach((navLink) => {
            navLink.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        link.classList.add('active');

        // Get the target section from href attribute
        const href = link.getAttribute('href');
        const section = document.querySelector(href);

        // Scroll to the target section using anime.js
        const position = section.offsetTop;

        anime({
            targets: [document.documentElement, document.body],
            scrollTop: position,
            duration: 1000,
            easing: 'easeInOutQuad'
        });
    });
});


//add event listener to check which section is viewed
const sections = document.querySelectorAll('.x');

window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        
        const rect = section.getBoundingClientRect(); //getBoundingClientRect - is a method that returns the size of an element and its position

        //check if rect is inside the viewport
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            fadeInSection(section);
        }
    })
})


//functions
function fadeInSection(section) {
    anime({
        targets: section,
        opacity: [0,1],
        duration: 1000,
        delay: 400,
        easing: 'easeInOutQuad'
    });
}
