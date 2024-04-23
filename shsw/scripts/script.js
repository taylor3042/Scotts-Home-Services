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
                    document.querySelector('.lawn-care-button').style.gridRow = startRow + endRow + 2 + ' / ' + (5 + endRow + 1);  
                }else if(associatedElement[0] == 'p')
                {
                    document.querySelector('.painting-button').style.gridRow = startRow + endRow + 2 + ' / ' + (5 + endRow + 1);
                }else if(associatedElement[0] == 'c')
                {
                    document.querySelector('.cleaning-services-button').style.gridRow = startRow + endRow + 2 + ' / ' + (5 + endRow + 1);
                }
            } else {
                this.textContent = 'More';
                // Reset the grid template rows to its original state
                //content.parentNode.style.gridTemplateRows = '';
                
                // Reset the grid row span of the associated element
                document.querySelector('.' + associatedElement).style.gridRow = '3 / 5'; // Reset to original value

                if (associatedElement[0] == 'l')
                {
                    document.querySelector('.lawn-care-button').style.gridRow = 5 + ' / ' + 6;  
                }else if(associatedElement[0] == 'p')
                {
                    document.querySelector('.painting-button').style.gridRow = 5 + ' / ' + 6;
                }else if(associatedElement[0] == 'c')
                {
                    document.querySelector('.cleaning-services-button').style.gridRow = 5 + ' / ' + 6;
                }
                //document.querySelector('.' + associatedElement).style.gridRow = startRow + ' / ' + endRow; // Reset to original value
            }
        });
    });
});


