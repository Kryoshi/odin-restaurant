import { tabHome } from "./home";
import { tabMenu } from './menu';
import { tabAbout } from './about';

const pageHandler = (function() {
    const loadContent = (tab = tabHome()) => {
        const content = document.querySelector('#content');
        content.appendChild(tab);
    }
    
    const switchTabs = () => {
        const nav = document.querySelector('nav');
        nav.addEventListener('click', (e) => {
            if (e.target.tagName === "BUTTON") {
                clearContent();
                switch (e.target.textContent) {
                    case 'Home':
                        loadContent(tabHome())
                    break;
                    case 'Menu':
                        loadContent(tabMenu());
                    break;
                    case 'About':
                        loadContent(tabAbout());
                    break;
                }
            }
        });
    }
    
    const clearContent = () => {
        let child = content.lastElementChild;
        while (child) {
            content.removeChild(child);
            child = content.lastElementChild;
        }   
    }

    return {loadContent, switchTabs}
})();

export { pageHandler };