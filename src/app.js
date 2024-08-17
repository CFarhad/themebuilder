import { Tabs } from 'flowbite';
import "./app.css";
import "./elementor-icons.css"

// Initialize Tabs if element exists
const tabsElement = document.getElementById('tabs-example');
if (tabsElement) {
    const tabElements = [
        {
            id: 'profile',
            triggerEl: document.querySelector('#profile-styled-tab'),
            targetEl: document.querySelector('#styled-profile'),
        },
        {
            id: 'dashboard',
            triggerEl: document.querySelector('#dashboard-styled-tab'),
            targetEl: document.querySelector('#styled-dashboard'),
        },
        {
            id: 'settings',
            triggerEl: document.querySelector('#settings-styled-tab'),
            targetEl: document.querySelector('#styled-settings'),
        },
        {
            id: 'contacts',
            triggerEl: document.querySelector('#contacts-styled-tab'),
            targetEl: document.querySelector('#styled-contacts'),
        },
    ];

    const options = {
        defaultTabId: 'settings',
        activeClasses: 'themebuilder_tab-active',
        inactiveClasses: 'themebuilder_tab-inactive',
        onShow: () => {
            console.log('Tab is shown');
        },
    };

    const instanceOptions = {
        id: 'tabs-example',
        override: true
    };

    new Tabs(tabsElement, tabElements, options, instanceOptions);
}

// Handle drawer toggle
document.addEventListener("DOMContentLoaded", function () {
    const drawerElement = document.getElementById("themebuilder-drawer");

    if (drawerElement) {
        drawerElement.classList.add("themebuilder_show");
        document.body.classList.add('themebuilder_drawer-opened');

        document.querySelector('.themebuilder_offcanvas-toggle').addEventListener('click', function () {
            toggleDrawer(drawerElement);
        });

        document.querySelectorAll('[data-hide-drawer]').forEach(button => {
            button.addEventListener('click', () => {
                toggleDrawer(drawerElement);
            });
        });
    }
});

function toggleDrawer(drawerElement) {
    const isHidden = drawerElement.classList.contains('hidden');

    drawerElement.classList.toggle('hidden', !isHidden);
    drawerElement.classList.toggle('themebuilder_show', isHidden);
    document.body.classList.toggle('themebuilder_drawer-opened', isHidden);

    if (!isHidden) {
        document.querySelectorAll('.themebuilder').forEach(elm => {
            elm.classList.remove('active');
        });
    }
}

// Handle beforeunload event
window.addEventListener('beforeunload', function (e) {
    if (document.activeElement.tagName === 'A') {
        const confirmationMessage = 'Are you sure you want to leave this page?';

        // Standard way to display a custom message
        e.returnValue = confirmationMessage;

        // For older browsers
        return confirmationMessage;
    }
});
