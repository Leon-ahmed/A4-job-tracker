### 1) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: <br>
getElementById() is used to select an element by its id which will be qnique and  it returns a single element.
getElementsByClassName() is used to access all elements of a same class  and it  returns a collection of elements.
querySelector() It selects first element of a given css selector.
querySelectorAll() It selects all elements of a given css selector and returns the elements as  a NodeList.

### 2) How do you create and insert a new element into the DOM?

Ans: <br>
We create a new element by using document.createElement(). 
After creating it, We can add text or content to it. Then for  inserting we use   methods like appendChild() or append() on a parent element.

### 3) What is Event Bubbling? And how does it work?

Ans: <br>
Event bubbling is a process where an event starts from the target element and then it  moves to its parent elements. 
For example, if we  click on a span element inside a paragraph, the click event first runs on the span and then on the paragraph, and then continues to the DOM tree.
 
### 4) What is Event Delegation in JavaScript? Why is it useful?

Ans: <br>
Event delegation is a technique where we can attach a single event listener to a parent element to handle events for its child elements.
It is useful because it reduces code duplication and also  works for dynamically added elements.

### 5) What is the difference between preventDefault() and stopPropagation() methods?
Ans: <br>
preventDefault() It  stops the browser’s default action, such as  opening a link.
stopPropagation() It stops the event from moving up to parent elements during event bubbling.
