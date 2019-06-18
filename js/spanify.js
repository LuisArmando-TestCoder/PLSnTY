(function() {
    function spanify(selector) {
        const elements = [...document.querySelectorAll(selector)];
        elements.forEach(elem => {
            let str = elem.innerText.split('').join('</span><span>');
            str = `<span>${str}</span>`;
            elem.innerHTML = str;
        });
    }
    spanify('[spanify]');
})();