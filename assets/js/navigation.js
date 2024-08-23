// Create an object to map href values to their corresponding nav-item elements
const navItemsMap = {};

document.querySelectorAll(".nav-item").forEach((navItem) => {
    let link = navItem.querySelector('a');
    let hrefValue = link.getAttribute('href').substring(1);
    navItemsMap[hrefValue] = navItem; // Map href values to nav-item elements
});

// Add scroll event listener
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    // Determine the currently visible section
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    // Add 'active' class to the corresponding nav-item and remove it from others
    Object.values(navItemsMap).forEach(navItem => {
        if (navItem && navItem.querySelector('a').getAttribute('href').substring(1) === currentSection) {
            navItem.classList.add('active');
        } else {
            navItem.classList.remove('active');
        }
    });

    // Log the current visible section
    if (currentSection) {
        console.log('Current visible section:', currentSection);
    }
});
