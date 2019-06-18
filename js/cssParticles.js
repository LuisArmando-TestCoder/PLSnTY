(function() {
    const cssParticles = document.getElementsByClassName('css-particles');
    let particles;
    function r(min, max) {
        return Math.random() * (max - min) + min;
    }
    function putParticles(parent, n, i){
        parent.style.animationDelay = `${i / 10}s`;
        for(let c = 0; c < n; c++) {
            const div = document.createElement('div');
            div.className = `${parent.className}__particle`;
            parent.appendChild(div);
        }
        particles = [...document.getElementsByClassName(`${parent.className}__particle`)];
    }
    function moveParticles() {
        particles.forEach((p) => {
            p.vectors = [
                [+r(50, 100), -0.5],
                [+r(50, 100), 0.5], 
                [+r(50, 100), -0.5],
                [+r(50, 100), 0.5]
            ];
        });
        (function f() {
            particles.forEach((p) => {
                let str;
                p.vectors = p.vectors.map(v => {
                    if(v[0] >= 100 || v[0] <= 50) v[1] = -v[1];
                    return [v[0] += v[1], v[1]];
                });
                str = p.vectors.map(a => a[0]).join('% ') + '%';
                p.style.borderRadius = str;
            });
            requestAnimationFrame(f);
        })();
    }
    [...cssParticles].forEach((parent, i) => {
        putParticles(parent, 3, i);
    });
    moveParticles();
}());