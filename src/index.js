import './style.css'
import { tabHome } from "./home";

tabHome();

function switchTabs() {
    const content = document.querySelector('#content');
    const nav = document.querySelector('nav');
    nav.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            clearContent();
            switch (e.target.textContent) {
                case 'Home':
                    tabHome()
            }
        }
    });

    const clearContent = () => {
        let child = content.lastElementChild;
        while (child) {
            content.removeChild(child);
            child = content.lastElementChild;
        }   
    }
}

switchTabs();