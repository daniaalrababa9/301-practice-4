# 301-practice-4
# 1- In an express server application, what does dotenv do?
Dotenv is a simple way to allow you to create secret keys that your application needs to function and keep them from going public.
# 2- What does the following code do:
function render( item ) {
  let markup = $('#item-template').html();
  let runTemplate = Handlebars.compile(markup);
  $("#list").append( runTemplate(markup) );
};
this function will render the item using handlebars, it will compile a template in JavaScript by using Handlebars.compile then render the item in the content area with the id='item-template' after the content area with the id ='list'.
# 3- What is the difference between relative and absolute positioning in CSS? In which SMACSS file would you put a rule with positioning?
Relative: Making an HTML element relative, gives you the privilege to move the element from its current position. It does not refer to a different element’s position.
Absolute: Absolute positioning an HTML element positions the element to its nearest positioned parent. Thus it refers to the nearest parent’s position. 
SMACSS file that would  put the rule with positioning is layout
