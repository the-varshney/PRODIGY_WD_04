document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Display a thank you message after form submission
        const contactSection = document.getElementById('contact');
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        thankYouMessage.style.color = 'Blue';
        contactSection.appendChild(thankYouMessage);

        // Clear the form
        contactForm.reset();
    });

    // Projects section
    const projects = [
        {
            title: 'ToDo list',
            image: 'https://i.postimg.cc/jSDg8kSM/image.png',
            description: 'A todo list application made with Python and GUI for better user interaction. It allows users to add, delete, and modify the order of tasks. Completed tasks are checked and moved to the completed tasks section.',
            liveDemoLink: 'https://github.com/the-varshney/CODSOFT/blob/master/T0-DO%20LIST.py',
            sourceCodeLink: 'https://github.com/the-varshney/CODSOFT/blob/master/T0-DO%20LIST.py'
        },
        {
            title: 'Banking Application',
            image: 'https://i.postimg.cc/fT2rRGbv/image.png',
            description: 'A Banking Application that helps users perform banking operations like checking balance, depositing, withdrawing money, and viewing transaction history. Built with Java using SWING and AWT for GUI and SQL classes for database operations.',
            liveDemoLink: 'https://github.com/YashGoel7/Banking_Application_in_Java/blob/master/BankingApplication.java',
            sourceCodeLink: 'https://github.com/YashGoel7/Banking_Application_in_Java/blob/master/BankingApplication.java'
        },
        {
            title: 'Quiz Game',
            image: 'https://i.postimg.cc/cCNCzjWw/image.png',
            description: 'A interactive quiz game developed in python. this game is made with GUI, which give options to choose and store the score of correct answers.',
            liveDemoLink: 'https://github.com/the-varshney/CODSOFT/blob/master/QUIZ%20GAME.py',
            sourceCodeLink: 'https://github.com/the-varshney/CODSOFT/blob/master/QUIZ%20GAME.py'
        },
        {
            title: 'Tic Tac Toe Game',
            image: 'https://i.postimg.cc/13p8GyZP/image.png',
            description: 'A Tic Tac Toe game developed with HTML, CSS, and JavaScript that maintains a scoreboard. Users can play with friends or against the computer.',
            liveDemoLink: 'https://github.com/the-varshney/PRODIGY_WD_03',
            sourceCodeLink: 'https://github.com/the-varshney/PRODIGY_WD_03'
        },
        {
            title: 'Web based Stopwatch',
            image: 'https://i.postimg.cc/hj7WmPH1/image.png',
            description: 'A web-based stopwatch built with HTML, CSS, and JS. It provides options to lap, start, stop, resume, and restart the watch.',
            liveDemoLink: 'https://github.com/the-varshney/PRODIGY_WD_02.git',
            sourceCodeLink: 'https://github.com/the-varshney/PRODIGY_WD_02.git'
        }
    ];

    const projectsSection = document.getElementById('projects');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.title;
        projectDiv.appendChild(projectTitle);

        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = `${project.title} Image`;
        projectDiv.appendChild(projectImage);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectDiv.appendChild(projectDescription);

        const liveDemoLink = document.createElement('a');
        liveDemoLink.href = project.liveDemoLink;
        liveDemoLink.target = '_blank';
        liveDemoLink.classList.add('project-link');
        liveDemoLink.textContent = 'Live Demo';
        projectDiv.appendChild(liveDemoLink);

        const sourceCodeLink = document.createElement('a');
        sourceCodeLink.href = project.sourceCodeLink;
        sourceCodeLink.target = '_blank';
        sourceCodeLink.classList.add('project-link');
        sourceCodeLink.textContent = 'Source Code';
        projectDiv.appendChild(sourceCodeLink);

        projectsSection.appendChild(projectDiv);
    });

    // Dark mode toggle
    const toggleSwitch = document.querySelector("#dark-mode-toggle");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleSwitch.checked = true;
    }

    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});
