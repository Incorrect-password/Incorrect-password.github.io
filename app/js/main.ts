//import * as $ from 'jquery';
messageCheck()
onepageSetup()

/**
 * sets up onepage-scroll and adds event listeners to the custom nav
 */
function onepageSetup() {
    $(".main").onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 500,             // AnimationTime let you define how long each section takes to animate
        pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        // beforeMove: function(index) {},
        // afterMove: function(index) {
                // document.querySelector('footer').style.display = 'none'
        // },
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: 900,        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });
    document.querySelector('#page1').addEventListener('click', function () {
        $(".main").moveTo(1);
    });
    document.querySelector('#page2').addEventListener('click', function () {
        $(".main").moveTo(2);
    });
    document.querySelector('#page3').addEventListener('click', function () {
        $(".main").moveTo(3);
    });
}

/**
 * Checks if the opening message has been watched and if not plays message and sets a cookie.
 */
function messageCheck() {
    if (document.cookie.replace(/(?:(?:^|.*;\s*)seenIt\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
        document.cookie = "seenIt=true";
        matrix();
        setTimeout(backgroundSwitch, 17000);
    }else {
        backgroundSwitch();
    }
}

/**
 * Plays opening message, controls the timing of the typing and the sound effects.
 */
function matrix() {
    // let app = document.querySelector('#typewriter')
    const typewriter = new Typewriter('#typewriter', {
        loop: false,
    });
    typewriter.typeString('Wake up, Employers...')
        .pauseFor(500)
        .deleteAll(0.001)
        .typeString('The matrix has you.')
        .pauseFor(500)
        .deleteAll(0.0001)
        .typeString('And I am the One...')
        .pauseFor(500)
        .typeString('you should hur')
        .deleteChars(2)
        .typeString('ire.')
        .pauseFor(950)
        .deleteAll(0.0001)
        .start();

startTypeSound();
setTimeout(stopTypeSound, 3400);
setTimeout(startTypeSound,3800);
setTimeout(stopTypeSound, 7500);
setTimeout(startTypeSound,8000);
setTimeout(stopTypeSound, 11500);
setTimeout(startTypeSound, 12500);
setTimeout(stopTypeSound, 17000);
}

/**
 * Starts the typing sound effect.
 */
function startTypeSound() {
    (<HTMLAudioElement>document.querySelector('#audio')).play().then;
}

/**
 * Pauses the typing sound effect.
 */
function stopTypeSound() {
    (<HTMLAudioElement>document.querySelector('#audio')).pause();
}

/**
 * Fades the opening black screen into main page.
 */
function backgroundSwitch() {
    (<JQuery>$('.matrix')).fadeOut(3000, function() {
        //make it 4000
        (<JQuery>$('.title')).fadeIn(5000)
    })
};
document.querySelector('#phone').addEventListener('click', function() {
    alert('07907 860 879')
});
document.querySelector('#email').addEventListener('click', function() {
    alert('jvtdevelopers@hotmail.com')
});

screen.orientation.lock("portrait-primary");
