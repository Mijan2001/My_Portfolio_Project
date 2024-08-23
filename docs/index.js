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

// onclick controller
const homeBtn = document.getElementById('homeBtn');
const aboutmeBtn = document.getElementById('aboutmeBtn');
const contactBtn = document.getElementById('contactBtn');
const resumeBtn = document.getElementById('resumeBtn');
const projectBtn = document.getElementById('projectBtn');

const targetHomeBtn = document.getElementById('targetHomeBtn');
const targetAboutmeBtn = document.getElementById('targetAboutmeBtn');
const targetResumeBtn = document.getElementById('targetResumeBtn');
const targetProjectBtn = document.getElementById('targetProjectBtn');
const targetContactBtn = document.getElementById('targetContactBtn');

let commonClickAbleBtn = [
    homeBtn,
    aboutmeBtn,
    resumeBtn,
    projectBtn,
    contactBtn
];

let commonTargetBtn = [
    targetHomeBtn,
    targetAboutmeBtn,
    targetResumeBtn,
    targetProjectBtn,
    targetContactBtn
];

const onclickGotoTargetBtn = (from, target) => {
    from.addEventListener('click', () => {
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
};

for (let index = 0; index < commonClickAbleBtn.length; index++) {
    if (commonClickAbleBtn[index] === homeBtn) {
        onclickGotoTargetBtn(homeBtn, targetHomeBtn);
    } else if (commonClickAbleBtn[index] === aboutmeBtn) {
        onclickGotoTargetBtn(aboutmeBtn, targetAboutmeBtn);
    } else if (commonClickAbleBtn[index] === resumeBtn) {
        onclickGotoTargetBtn(resumeBtn, targetResumeBtn);
    } else if (commonClickAbleBtn[index] === projectBtn) {
        onclickGotoTargetBtn(projectBtn, targetProjectBtn);
    } else if (commonClickAbleBtn[index] === contactBtn) {
        onclickGotoTargetBtn(contactBtn, targetContactBtn);
    }
}

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
