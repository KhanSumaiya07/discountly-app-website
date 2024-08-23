let navItems = document.querySelectorAll(".nav-item");
let hrefValue
navItems.forEach((navItem) => {
  console.log(navItem);
  let link = navItem.querySelector('a')
  hrefValue = link.getAttribute('href').substring(1);
});
console.log('href value:', hrefValue);

document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    if (currentSection) {
        console.log('Current visible section:', currentSection);
    }
});
