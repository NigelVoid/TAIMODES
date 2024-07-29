function removeButton(button) {
        document.body.style.overflowY = "auto";
        const textElement = document.querySelector('.fading-text');
        const textElement2 = document.querySelector('.growing-text');
        const textElement3 = document.getElementById("b1");
        const textElement4 = document.getElementById("b2");
        const textElement5 = document.getElementById("b3");
        const textElement6 = document.getElementById("b4");
        const textElement7 = document.getElementById("carouselExample");
        const textElement9 = document.getElementById("tagMainRec");
        const textElement10 = document.getElementById("tagMainRec2");
        textElement10.style.display = "block";
        textElement10.classList.add('main-rec');
        textElement9.style.display = "block";
        textElement9.classList.add('main-rec');
        textElement7.style.display = "block";
        textElement7.classList.add('main-rec');
        textElement.classList.add('fade-out');
        button.classList.add('fade-out');
        textElement2.classList.add('moveUp');
        textElement3.classList.add('sliding-buttons1');
        textElement4.classList.add('sliding-buttons2');
        textElement5.classList.add('sliding-buttons3');
        textElement6.classList.add('sliding-buttons4');
    }
 function getCategories() {
        closeGenres();
        const element = document.getElementById("categ");
        element.style.display = "flex";
        element.classList.remove('fade-out-categories');
        element.classList.add('fading-categories');
    }
  function getGenres() {
        closeCategories();
        const element = document.getElementById("genres");
        element.style.display = "flex";
        element.classList.remove('fade-out-categories');
        element.classList.add('fading-categories');
    }


 function closeCategories() {
        const element = document.getElementById("categ");
        element.classList.remove('fading-categories');
        element.classList.add('fade-out-categories');
    }

  function closeGenres() {
        const element = document.getElementById("genres");
        element.classList.remove('fading-categories');
        element.classList.add('fade-out-categories');
    }

