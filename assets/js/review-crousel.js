document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
        {
            img: 'assets/img/shape/man2.png',
            heading: 'No Skidding Products',
            paragraph: 'We are beyond satisfied with this app. After many failed attempts trying to set up tiered pricing on our store, we found this app to be a great solution. Rahul and his team respond quickly to all inquiries and their ability to make user-specific customizations has been an incredible help. The discounts are especially easy to set-up, and the program supports the 1000+ different variants that our store requires. Highly recommend to all stores in need of an effective pricing solution.'
        },
        {
            img: 'assets/img/shape/man2.png',
            heading: 'Groupe TAQ',
            paragraph: 'I am new to this Shopify universe and I really don\'t know what I am doing... After trying about 50 apps for Quantity breaks, I found this one that looked cool but I still was not able to make it show on my product page (like many others I\'ve tried)... But this time, it was different... I asked for help and got a response in a record time. Rahul explained to me that my theme was not compatible by default with their app but he coded it for me into my theme code and it works great!!'
        },
        {
            img: 'assets/img/shape/man1.png',
            heading: 'Legacy Sports Paintball',
            paragraph: 'Great app, easy to use with a well designed, easily configured interface with a clean, modern and professional look. Support is responsive and knowledgeable.'
        },
        {
            img: 'assets/img/shape/man2.png',
            heading: 'Dermalogica DE',
            paragraph: 'Thoroughly impressed with this app and its service. Our use case, which we haven\'t been able to solve with any other app, was possible with AnnCode but required custom coding. The team was super fast in implementing this and going through a few iterations to get everything working perfectly. This kind of service level, arguably during the busiest time of the year, is unmatched. Thank you!'
        },
        {
            img: 'assets/img/shape/man3.png',
            heading: 'Freezebone',
            paragraph: 'Wow, I\'ve got to say, this app is a total game-changer! I had it up and running in no time. And it functions smoothly as butter! But what really blew me away was their customer service. Every interaction felt like chatting with a friend who genuinely wanted to help out. If you\'re on the fence about trying this tiered app, just dive in! It\'s been a fantastic experience for me.'
        },
        {
            img: 'assets/img/shape/man2.png',
            heading: 'Leachs',
            paragraph: 'Very good app for us. Did everything we needed it to, and runs quicker than the last app we used for this. The newly added import feature was a life saver as we have over 1500 tiered prices. On top of this the support is insanely good. very very helpful and quick at replying. I was needing things quite sharpish as we had a specific launch date for this and they helped us to achieve this.'
        }
    ];

    const slidesContainer = document.querySelector('.testimonial-carousel');

    testimonials.forEach((testimonial) => {
        const slide = document.createElement('div');
        slide.className = 'slick-slide';
        slide.innerHTML = `
            <div class="what-img">
                <img src="${testimonial.img}" alt="${testimonial.heading}">
            </div>
            <div class="what-cap">
                <h4><a href="#">${testimonial.heading}</a></h4>
                <p>${testimonial.paragraph}</p>
            </div>
        `;
        slidesContainer.appendChild(slide);
    });

    $('.single-item-rtl').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        arrows: true
    });
});
