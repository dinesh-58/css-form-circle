const img = document.querySelector('#circle');

const root = document.documentElement;
const form = document.querySelector('form');
form.onsubmit = e => {
    e.preventDefault();
    console.log(e);

    const inputs = e.target.children;
    img.classList.add('animated');
    root.style.setProperty('--cy', inputs.cy.value + "px");
    root.style.setProperty('--cx', inputs.cx.value + "px");
    root.style.setProperty('--radius', inputs.radius.value);
}
