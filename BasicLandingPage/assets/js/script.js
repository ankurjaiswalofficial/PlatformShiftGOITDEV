const core = document.querySelector("#core");
const style = document.querySelector("#style");
const seo = document.querySelector("#seo");
const coreFeature = document.querySelector("#core-feature");
const styleFeature = document.querySelector("#style-feature");
const seoFeature = document.querySelector("#seo-feature"); 
const coreContainer = document.querySelector("#core-container");
const styleContainer = document.querySelector("#style-container");
const seoContainer = document.querySelector("#seo-container"); 

const featureElements = [coreFeature, styleFeature, seoFeature];
const contentElements = [coreContainer, styleContainer, seoContainer];

featureElements.forEach((featureElement, index) => {
  featureElement.addEventListener('click', () => {
    featureElement.classList.toggle("active");
    contentElements.forEach((contentElement, ind) => {
      if (index === ind) {
        contentElement.classList.add('flex');
        contentElement.classList.remove('hidden');
      } else {
        contentElement.classList.remove('flex');
        contentElement.classList.add('hidden');
      }
    });
  });
  featureElement.addEventListener('mouseover', () => {
    featureElement.classList.toggle("active");
    contentElements.forEach((contentElement, ind) => {
      if (index === ind) {
        contentElement.classList.add('flex');
        contentElement.classList.remove('hidden');
      } else {
        contentElement.classList.remove('flex');
        contentElement.classList.add('hidden');
      }
    });
  });
});

// Trigger the click event for the coreContainer to show it by default
coreFeature.click();

const coreFeatures = [
  {
      "card-title": "No Expertise",
      "card-text": "Our system has numerous autogenerated and Pre designed layouts"
  },
  {
      "card-title": "Re-useable components",
      "card-text": "Our system separates HTML , CSS and JS almost 99%."
  },
  {
      "card-title": "Web Terms",
      "card-text": "Categorising the html elements with suitable terms like section titles, tag lines."
  },
  {
      "card-title": "Adaptability",
      "card-text": "The layouts adjusts styles like colors and fonts with the template automatically."
  },
  {
      "card-title": "Responsive",
      "card-text": "All the template and layouts are auto responsive with Tabs and mobiles and large screens."
  },
  {
      "card-title": "Animations",
      "card-text": "Pre enabled with on load and on scroll animations , with options to disable"
  },
  {
      "card-title": "Variables",
      "card-text": "Layouts comes with pre defined variables to adjust styles as per the need."
  },
  {
      "card-title": "Formatted Content",
      "card-text": "Web site content can stored directly into relation database or into JSON with clean separation of fields."
  },
  {
      "card-title": "Deployment Free",
      "card-text": "website is a simple string to us , all its assets deployed to CDN"
  }
];

const styleFeatures = [
  {
      "card-title": "Switch Themes",
      "card-text": "Easily switch among the themes."
  },
  {
      "card-title": "Colors",
      "card-text": "Choose color from palettes or with wheel with standard schemes like Complementary, Triadic."
  },
  {
      "card-title": "Color & Font Schemes",
      "card-text": "Select color and font scheme to decide which color and fonts to apply at which place."
  },
  {
      "card-title": "Fonts",
      "card-text": "Select your favourite fonts from predefined set."
  },
  {
      "card-title": "Decorations",
      "card-text": "Add styles to your titles and other fields with pre defined set of styles."
  },
  {
      "card-title": "Animated backgrounds",
      "card-text": "You can select animated backgrounds to templates."
  },
  {
      "card-title": "Custom Styles",
      "card-text": "User allowed to write his own CSS or JavaScript if needed."
  }
];

const seoFeatures = [
  {
      "card-title": "Easy Content Edit",
      "card-text": "Both form based and WYSIWYG editors been given."
  },
  {
      "card-title": "Enquiry Forms",
      "card-text": "Functioning enquiry forms with customizations given."
  },
  {
      "card-title": "SEO",
      "card-text": "You can tune your SEO completely."
  },
  {
      "card-title": "White labeled",
      "card-text": "All web sites are white labeled, you will not see any content other than yours."
  },
  {
      "card-title": "No Subscription",
      "card-text": "All the features available to all users, just pay as you use."
  },
  {
      "card-title": "RTL",
      "card-text": "All the designs will support RTL by default."
  },
  {
      "card-title": "Browser Compatible",
      "card-text": "All layouts are designed to support all new and old browsers too."
  },
  {
      "card-title": "Restore",
      "card-text": "You can restore your old data and styles by creating snapshot of your website."
  },
  {
      "card-title": "Permanent Link",
      "card-text": "Each website comes with unique and permanent link with which user can access, with on off feature."
  },
  {
      "card-title": "Temporary Link",
      "card-text": "You can create a separate temporary link to your website which will expire after specified period."
  },
  {
      "card-title": "Link to your Domain",
      "card-text": "You can link your website to your custom domain."
  },
  {
      "card-title": "SSL",
      "card-text": "Custom deployment will come with SSL security."
  }
];


function cardMaker(cardTitle, cardText){
  const cardHtml = '<div class="card"><div class="card-back-anime"></div><div class="card-front">     <figure class="hidden">         <i class="fa-solid fa-screwdriver-wrench"></i>     </figure>     <div class="card-body">         <h2 class="card-title">' + cardTitle + '<div class="card-title-highlighter"></div>         </h2>         <p class="card-description">' + cardText + '</p>     </div></div></div>';
  return cardHtml;
}

function cardLoop(cardJSON, cardsContainer){
  let cardHtmlText = "";
  cardJSON.forEach((ele, index) => {
    cardHtmlText = cardHtmlText + cardMaker(ele["card-title"], ele['card-text']);
  })
  cardsContainer.innerHTML = cardHtmlText;
}

cardLoop(coreFeatures, coreContainer);
cardLoop(styleFeatures, styleContainer);
cardLoop(seoFeatures, seoContainer);

