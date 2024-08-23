// toggleClickIcon controller start

const iconClick = document.getElementById('icon-click');
const showNav = document.getElementById('showNav');
let toggleIcon = false;
iconClick.addEventListener('click', e => {
    e.preventDefault();
    if (!toggleIcon) {
        showNav.classList.remove('hidden');
        showNav.classList.add('duration-500', 'ease-in-out', 'animation');
        toggleIcon = true;
    } else {
        showNav.classList.add('hidden');
        toggleIcon = false;
    }
});

// toggleClickIcon controller ends

document.addEventListener('alpine:init', () => {
    Alpine.data('skillDisplay', () => ({
        skills: [
            {
                title: 'C',
                percent: '90'
            },
            {
                title: 'C++',
                percent: '70'
            },

            {
                title: 'HTML',
                percent: '95'
            },
            {
                title: 'CSS',
                percent: '70'
            },
            {
                title: 'Bootstrap',
                percent: '70'
            },
            {
                title: 'Tailwind CSS',
                percent: '90'
            },
            {
                title: 'JavaScript',
                percent: '85'
            },
            {
                title: 'NodeJS',
                percent: '80'
            },
            {
                title: 'ExpressJS',
                percent: '80'
            },
            {
                title: 'MongoDB',
                percent: '75'
            }
        ],
        currentSkill: {
            title: 'HTML',
            percent: '90'
        }
    }));
});

// email section
