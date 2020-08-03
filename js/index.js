const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// delete DOM to title
let title = document.querySelector('title');
title.textContent = 'Great Idea!'
// title.textContent = title.toString().replace('DOM', ''); ---- why does this work, but it doesn't show up correctly in console 
console.log(title);

// select anchor tags in nav bar
const mySelection = document.querySelectorAll('a')
console.log(mySelection);

mySelection[0].textContent = 'Services';
console.log(mySelection[0])

mySelection[1].textContent = 'Product';
console.log(mySelection[1])

mySelection[2].textContent = 'Vision';
console.log(mySelection[2])

mySelection[3].textContent = 'Features';
console.log(mySelection[3])

mySelection[4].textContent = 'About';
console.log(mySelection[4])

mySelection[5].textContent = 'Contact';
console.log(mySelection[5])

// to try to automate later

// Add to h1
const h1Text = document.querySelector('h1')
h1Text.innerText = `DOM \n Is \n Awesome`

console.log(h1Text.textContent);

// Add to button
const button = document.querySelector('button')
button.textContent = siteContent.cta.button;
console.log(button);

// Add paragraphs & titles to section

const allTitles = document.querySelectorAll('.text-content h4');
const allPara = document.querySelectorAll('.text-content p');

console.log(allTitles);

const firstTitle = allTitles[0]
firstTitle.textContent = siteContent["main-content"]["features-h4"];
console.log(firstTitle);

const firstPar = allPara[0];
firstPar.textContent = siteContent["main-content"]["features-content"];
console.log(firstPar);

const secondTitle = allTitles[1]
secondTitle.textContent = siteContent["main-content"]["about-h4"];
console.log(secondTitle);

const secondPar = allPara[1]
secondPar.textContent = siteContent["main-content"]["about-content"];
console.log(secondPar);

const thirdTitle = allTitles[2]
thirdTitle.textContent = siteContent["main-content"]["services-h4"];
console.log(thirdTitle);

const thirdPar = allPara[2]
thirdPar.textContent = siteContent["main-content"]["services-content"];
console.log(thirdPar);

const fourthTitle = allTitles[3]
fourthTitle.textContent = siteContent["main-content"]["product-h4"];
console.log(fourthTitle);

const fourthPar = allPara[3]
fourthPar.textContent = siteContent["main-content"]["product-content"];
console.log(fourthPar);

const fifthTitle = allTitles[4]
fifthTitle.textContent = siteContent["main-content"]["vision-h4"];
console.log(fifthTitle);

const fifthPar = allPara[4]
fifthPar.textContent = siteContent["main-content"]["vision-content"];
console.log(fifthPar);

// add src to imgs
const logoImg = document.querySelector('#logo-img');
logoImg.src = siteContent.nav["img-src"];
console.log(logoImg);

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = siteContent.cta["img-src"]
console.log(ctaImg);

const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];
console.log(middleImg);

// add bottom h4

let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent.contact["contact-h4"]
console.log(contactH4);

// add last 3 P's 

let contactParagraphs = document.querySelectorAll('.contact p');
console.log(contactParagraphs);

const firstContactP = contactParagraphs[0]
firstContactP.textContent = siteContent.contact.address;
console.log(firstContactP);

const secondContactP = contactParagraphs[1]
secondContactP.textContent = siteContent.contact.phone;
console.log(secondContactP);


const thirdContactP = contactParagraphs[2]
thirdContactP.textContent = siteContent.contact.email;
console.log(thirdContactP);


// footer p 
let footerParagraph = document.querySelector('footer p');
footerParagraph.textContent = siteContent.footer.copyright;
console.log(footerParagraph);