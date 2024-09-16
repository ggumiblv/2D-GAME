import kaboom from 'kaboom';

export const k = kaboom ({
    global: false,
    touchToMouse: true, //чтобы работало на телефоне
    canvas: document.getElementById("game"),
    debug: false,
})