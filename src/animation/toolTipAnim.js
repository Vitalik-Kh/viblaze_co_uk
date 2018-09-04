import Velocity from 'velocity-animate';

let timer = null;

Velocity.RegisterEffect('tooltipSlideIn', {
    calls: [
        [{  }]
    ]
})

export const tooltipMouseEnter = (el) => {
    timer = setTimeout(() => {
        timer = null;
        Velocity(el, 'stop');
        Velocity(
            el, 
            { 
                translateX: ['-50%', '-50%'], 
                translateY: ['0px', '15px'], 
                opacity: 1 
            }, 
            { 
                duration: 300, 
                display: 'block' 
            });
    }, 300);
}

export const tooltipMouseLeave = (el) => {
    if (timer !== null) {
        clearTimeout(timer);
        timer = null;
    } else {
        Velocity(el, 'transition.fadeOut', 500);
    }
}