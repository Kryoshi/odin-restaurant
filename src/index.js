import './style.css'
import { tabHome } from "./modules/home";
import { tabMenu } from './modules/menu';
import { tabAbout } from './modules/about';

function loadPage() {
    const content = document.querySelector('#content');
    content.appendChild(tabHome());
}

function switchTabs() {
    const content = document.querySelector('#content');
    const nav = document.querySelector('nav');
    nav.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            clearContent();
            switch (e.target.textContent) {
                case 'Home':
                    content.appendChild(tabHome());
                break;
                case 'Menu':
                    content.appendChild(tabMenu());
                break;
                case 'About':
                    content.appendChild(tabAbout());
                break;
            }
        }
    });
}

function clearContent() {
    let child = content.lastElementChild;
    while (child) {
        content.removeChild(child);
        child = content.lastElementChild;
    }   
}

loadPage();
switchTabs();