(function () {
    function mouseMoveElem(selector, sc) {
        const moveElems = [...document.querySelectorAll(selector)];
        const pos = {
            x: null,
            y: null,
            w: window.innerWidth,
            h: window.innerHeight,
            sc
        };
        window.addEventListener('resize', () => {
            pos.w = window.innerWidth;
            pos.h = window.innerHeight;
        });
        window.addEventListener('mousemove', (e) => {
            pos.x = e.clientX;
            pos.y = e.clientY;
            moveElems.forEach(move => {
                move.style.transform = `
                translate(${(pos.w / 2 - pos.x) / pos.sc}px,
                ${(pos.h / 2 - pos.y) / pos.sc}px)`;
            });
        });
    }
    mouseMoveElem('[move]', 10);
    mouseMoveElem('[move2]', 100);
}());