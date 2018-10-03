/* Enter the code to remove the main node element under this comment */

document.querySelector('main').remove();

/* Create your new element here and assign it to newHeader */

let newHeader = document.createElement('div');

document.body.appendChild(newHeader);

    var ul = document.createElement('ul')
     
    for (let i = 0; i < 3; i++) {
      let li = document.createElement('li')
      li.innerHTML = (i + 1).toString()
      ul.appendChild(li)
    }
     
    newHeader.appendChild(ul);

