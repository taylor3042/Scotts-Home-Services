document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var associatedElement = this.getAttribute('data-associated-element');
            var content = this.parentNode.querySelector('.' + associatedElement);
            var startRow = parseInt(this.getAttribute('data-start-row'));
            var endRow = parseInt(this.getAttribute('data-end-row'));
            
            // Toggle the class to expand or collapse the content
            content.classList.toggle('expanded');
            
            // Toggle the button text
            if (content.classList.contains('expanded')) {
                this.textContent = 'Less';
                // Calculate the number of rows needed based on content height
                var rowCount = Math.ceil(content.scrollHeight / parseInt(getComputedStyle(content).lineHeight));
                // Update the grid template rows to accommodate the calculated number of rows
                content.parentNode.style.gridTemplateRows = 'repeat(' + rowCount + ', auto)';
                
                // Adjust the grid row span of the associated element
                document.querySelector('.' + associatedElement).style.gridRow = startRow + ' / ' + (5 + endRow); // Adjust rows
                if (associatedElement[0] == 'l')
                {
                    document.querySelector('.lawn-care-button').style.gridRow = startRow + endRow + 1 + ' / ' + (7 + endRow);
                    document.querySelector('.lawn-care-button').style.zIndex = '0';

                      
                }else if(associatedElement[0] == 'p')
                {
                    document.querySelector('.painting-button').style.gridRow = startRow + endRow + 1 + ' / ' + (7 + endRow);
                    document.querySelector('.painting-button').style.zIndex = '0';
                }else if(associatedElement[0] == 'c')
                {
                    //document.querySelector('.cleaning-services-button').style.gridRow = startRow + endRow + 3 + ' / ' + (7 + endRow);
                    document.querySelector('.cleaning-services-button').style.gridRow =  endRow + startRow + 1 + ' / ' + (7 + endRow);
                    document.querySelector('.cleaning-services-button').style.zIndex = '0';
                }
            } else {
                this.textContent = 'More';
                // Reset the grid template rows to its original state
                //content.parentNode.style.gridTemplateRows = '';
                
                // Reset the grid row span of the associated element
                document.querySelector('.' + associatedElement).style.gridRow = '4 / 7'; // Reset to original value

                if (associatedElement[0] == 'l')
                {
                    document.querySelector('.lawn-care-button').style.gridRow = '7/9';  
                }else if(associatedElement[0] == 'p')
                {
                    document.querySelector('.painting-button').style.gridRow = '7/9';
                }else if(associatedElement[0] == 'c')
                {
                    document.querySelector('.cleaning-services-button').style.gridRow = '7/9';
                }
                //document.querySelector('.' + associatedElement).style.gridRow = startRow + ' / ' + endRow; // Reset to original value
            }
        });
    });
});

// Wait for the document to finish loading
document.addEventListener("DOMContentLoaded", function() {
    // Get the link element with the href attribute equal to "moreInfoDeals.html"
    
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var contactInfoParagraph = document.querySelector('.contact-info p');

    // Check if contactInfoParagraph is not null
        if (screenWidth <= 700) {
            // Replace spans with <br> elements
            var contactInfoHTML = contactInfoParagraph.innerHTML;
            // Replace all occurrences of "</span>" with "<br>"
            contactInfoHTML = contactInfoHTML.replace(/<\/span>/g, "<br>");

            // Replace all occurrences of "<span>" with an empty string
            contactInfoHTML = contactInfoHTML.replace(/<span>/g, "");
            contactInfoParagraph.innerHTML = contactInfoHTML;
        } else
        {
            contactInfoParagraph.innerHTML = "<span>Phone number:&nbsp;[work phone]</span><span>Email:&nbsp;[work email]</span>LinkedIn Account:&nbsp;[linkedIn profile]";
        }
    var link = document.querySelector('nav a[href="moreInfoDeals.html"]');
    if (link) {
      // Set the text of the link to "Deals"
      link.textContent = "Deals";
    }
    });
  
