(function() {
    const balls = [];
    const audio = new Audio('./songs/PLS&TY - Run Wild.mp3');
    let eq;

    audio.volume = 0.3;

    size(window.innerWidth, 200);
    fillArray(10, balls, i => {
        const size = 2;
        const y = c.height / 2 - size / 2;
        return {
            x: c.width / 10 * i + size * 1.5,
            y,
            oY: y,
            r: size,
            size,
            c: '#fff'
        };
    });
    draw(() => {
        let aver = !audio.paused ? eq.getFrequency().average / 10 : 0;
        clear();
        renderGroup('arc', balls);
        updateGroup(balls, o => {
            o.x += 0.5;
            o.y = o.oY + Math.sin(o.x / 10) * 10; 
            o.r = o.size + aver;
            if(o.x > c.width) o.x = -o.r;
        });
    });

    window.addEventListener('click', () => {
        if(audio.paused) {
            eq = analyseAudio(audio);
            audio.play();
        }
    });

    window.addEventListener('resize', () => {
        updateGroup(balls, (o, i) => {
            o.x = c.width / 10 * i + o.size * 1.5;
        });
    });

}());