document.addEventListener('DOMContentLoaded', function() {
    const popLogo1 = document.getElementById("popLogo1");
    const popLogo2 = document.getElementById("popLogo2");
    const rpBox1 = document.getElementById("rpBox1");
    const popularGames = document.getElementById("popularGames");
    const rpGame1 = document.getElementById("rpGame1");
    const itemRPG1 = document.getElementById("itemRPG1");
    const carouselExample = document.getElementById("carouselExample");
    const itemCarousel1 = document.getElementById("itemCarousel1");
    const itemCarousel2 = document.getElementById("itemCarousel2");
    const itemCarousel3 = document.getElementById("itemCarousel3");
    const tagMainRec2 = document.getElementById("tagMainRec2");
    const tagMainRec = document.getElementById("tagMainRec");
    const tagMainRecText = document.getElementById("tagMainRecText");
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const b3 = document.getElementById("b3");
    const b4 = document.getElementById("b4");
    const slidingButtons = document.getElementById("slidingButtons");

    function resizeItems() {
        const height = document.documentElement.clientHeight;
        const width = document.documentElement.clientWidth;

        if (width < 1510) {
            b1.style.fontSize = "18px";
            b2.style.fontSize = "18px";
            b3.style.fontSize = "18px";
            b4.style.fontSize = "18px";
        } else {
            b1.style.fontSize = "20px";
            b2.style.fontSize = "20px";
            b3.style.fontSize = "20px";
            b4.style.fontSize = "20px";
        }
        if (width < 1510) {
            carouselExample.style.height = "550px";
            itemCarousel1.style.height = "550px";
            itemCarousel2.style.height = "550px";
            itemCarousel3.style.height = "550px";
            tagMainRec2.style.height = "550px";
            tagMainRec.style.width = "200px";
            tagMainRec.style.height = "65px";
            tagMainRecText.style.fontSize = "28px";
        } else {
            carouselExample.style.height = "600px";
            itemCarousel1.style.height = "600px";
            itemCarousel2.style.height = "600px";
            itemCarousel3.style.height = "600px";
            tagMainRec2.style.height = "600px";
            tagMainRec.style.width = "260px";
            tagMainRecText.style.fontSize = "35px";
            tagMainRec.style.height = "80px";
        }
        if (width < 1410) {
            carouselExample.style.height = "450px";
            itemCarousel1.style.height = "450px";
            itemCarousel2.style.height = "450px";
            itemCarousel3.style.height = "450px";
            tagMainRec2.style.height = "450px";
            b1.style.fontSize = "16px";
            b2.style.fontSize = "16px";
            b3.style.fontSize = "16px";
            b4.style.fontSize = "16px";
        }
        if (width < 1140) {
            b1.style.fontSize = "13px";
            b2.style.fontSize = "13px";
            b3.style.fontSize = "13px";
            b4.style.fontSize = "13px";
        }
        if (width < 1070) {
            carouselExample.style.width = "75vw";
            itemCarousel1.style.width = "75vw";
            itemCarousel2.style.width = "75vw";
            itemCarousel3.style.width = "75vw";
            tagMainRec2.style.width = "75vw";
            carouselExample.style.left = "13vw";
            tagMainRec2.style.left = "13vw";
            tagMainRec.style.left = "13vw";
            b1.style.marginLeft = "-12%";
            b1.style.width = "15vw";
            b2.style.width = "15vw";
            b3.style.width = "15vw";
            b4.style.width = "15vw";
            b1.style.fontSize = "16px";
            b2.style.fontSize = "16px";
            b3.style.fontSize = "16px";
            b4.style.fontSize = "16px";
        } else {
            b1.style.width = "11vw";
            b2.style.width = "11vw";
            b3.style.width = "11vw";
            b4.style.width = "11vw";
            b1.style.marginLeft = "0";
            carouselExample.style.width = "58vw";
            itemCarousel1.style.width = "58vw";
            itemCarousel2.style.width = "58vw";
            itemCarousel3.style.width = "58vw";
            tagMainRec2.style.width = "58vw";
            carouselExample.style.left = "21vw";
            tagMainRec2.style.left = "21vw";
            tagMainRec.style.left = "21vw";
        }
        if (width < 830) {
            b1.style.marginLeft = "-20.2%";
            b1.style.width = "18vw";
            b2.style.width = "18vw";
            b3.style.width = "18vw";
            b4.style.width = "18vw";
            b1.style.fontSize = "14px";
            b2.style.fontSize = "14px";
            b3.style.fontSize = "14px";
            b4.style.fontSize = "14px";
            carouselExample.style.width = "85vw";
            itemCarousel1.style.width = "85vw";
            itemCarousel2.style.width = "85vw";
            itemCarousel3.style.width = "85vw";
            tagMainRec2.style.width = "85vw";
            carouselExample.style.left = "7vw";
            tagMainRec2.style.left = "7vw";
            tagMainRec.style.left = "7vw";
        }
        if (width < 660) {
            slidingButtons.style.top = "208px";
            b1.style.marginLeft = "-20.2%";
            b1.style.height = "46px";
            b2.style.height = "46px";
            b3.style.height = "46px";
            b4.style.height = "46px";
            b1.style.fontSize = "12px";
            b2.style.fontSize = "12px";
            b3.style.fontSize = "12px";
            b4.style.fontSize = "12px";
            carouselExample.style.height = "320px";
            itemCarousel1.style.height = "320px";
            itemCarousel2.style.height = "320px";
            itemCarousel3.style.height = "320px";
            tagMainRec2.style.height = "320px";
            tagMainRec.style.width = "140px";
            tagMainRec.style.height = "50px";
            tagMainRecText.style.fontSize = "17px";
        } else {
            b1.style.height = "58px";
            b2.style.height = "58px";
            b3.style.height = "58px";
            b4.style.height = "58px";
            slidingButtons.style.top = "190px";
        }
        if (width < 535) {
            b1.style.fontSize = "10px";
            b2.style.fontSize = "10px";
            b3.style.fontSize = "10px";
            b4.style.fontSize = "10px";
        }
        if (width < 465) {
            b1.style.marginLeft = "-24%";
            b1.style.width = "21vw";
            b2.style.width = "21vw";
            b3.style.width = "21vw";
            b4.style.width = "21vw";
            b1.style.fontSize = "11px";
            b2.style.fontSize = "11px";
            b3.style.fontSize = "11px";
            b4.style.fontSize = "11px";
            carouselExample.style.width = "100%";
            itemCarousel1.style.width = "100%";
            itemCarousel2.style.width = "100%";
            itemCarousel3.style.width = "100%";
            tagMainRec2.style.width = "100%";
            carouselExample.style.left = "0px";
            tagMainRec2.style.left = "0px";
            tagMainRec.style.left = "0px";
            carouselExample.style.height = "260px";
            itemCarousel1.style.height = "260px";
            itemCarousel2.style.height = "260px";
            itemCarousel3.style.height = "260px";
            tagMainRec2.style.height = "260px";
        }
        if (width < 420) {
            slidingButtons.style.top = "218px";
            b1.style.fontSize = "8.5px";
            b2.style.fontSize = "8.5px";
            b3.style.fontSize = "8.5px";
            b4.style.fontSize = "8.5px";
            b1.style.height = "42px";
            b2.style.height = "42px";
            b3.style.height = "42px";
            b4.style.height = "42px";
        }
        if (width < 345) {
            b1.style.fontSize = "7.5px";
            b2.style.fontSize = "7.5px";
            b3.style.fontSize = "7.5px";
            b4.style.fontSize = "7.5px";
            carouselExample.style.height = "230px";
            itemCarousel1.style.height = "230px";
            itemCarousel2.style.height = "230px";
            itemCarousel3.style.height = "230px";
            tagMainRec2.style.height = "230px";
            tagMainRec.style.width = "110px";
            tagMainRec.style.height = "40px";
            tagMainRecText.style.fontSize = "13px";
        }

//        if (height < 921) {
//            popLogo1.style.width = "10%";
//            popLogo1.style.height = "10";
//            popLogo1.style.marginTop = "1%";
//            popLogo2.style.width = "10%";
//            popLogo2.style.height = "10";
//            popLogo2.style.marginTop = "0.5%";
//        } else {
//            popLogo1.style.width = "15%"; // Возвращаем на значение по умолчанию
//            popLogo1.style.height = "15%"; // Возвращаем на значение по умолчанию
//            popLogo1.style.marginTop = "0";
//            popLogo2.style.width = "15%";
//            popLogo2.style.height = "15%";
//            popLogo2.style.marginTop = "0";
//        }
//
//        if (height < 721) {
//            rpBox1.style.marginTop = "2%";
//        } else {
//            rpBox1.style.marginTop = "10%";
//        }
//        if (height < 600) {
//            popLogo1.style.width = "8%";
//            popLogo1.style.height = "8";
//            popLogo1.style.marginTop = "1%";
//            popLogo2.style.width = "8%";
//            popLogo2.style.height = "8";
//            popLogo2.style.marginTop = "1%";
//        }
//        if (height < 530) {
//            rpBox1.style.marginTop = "-3%";
//            rpGame1.style.marginTop = "1%";
//            itemRPG1.style.fontSize = "calc(0.5vh + 0.5vw)";
//            popularGames.style.width = "50vw";
//        } else {
//            rpGame1.style.marginTop = "5%";
//            itemRPG1.style.fontSize = "calc(0.75vh + 0.75vw)";
//            popularGames.style.width = "68vw";
//        }
   }

    // Проверка при загрузке страницы
    resizeItems();

    // Добавление обработчика события изменения размера окна
    window.addEventListener('resize', resizeItems);
});