import Velocity from 'velocity-animate';

let timer = null;

Velocity.RegisterEffect('tooltipSlideIn', {
    calls: [
        [{  }]
    ]
})

export const tooltipMouseEnter = (tooltip, icon) => {
    timer = setTimeout(() => {
        timer = null;
        Velocity(tooltip, 'stop');
        Velocity(icon, 'stop');
        Velocity(icon, { scaleX: [1.1, 1], scaleY: [1.1, 1] }, 300);
        Velocity(
            tooltip, 
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

export const tooltipMouseLeave = (tooltip, icon) => {
    if (timer !== null) {
        clearTimeout(timer);
        timer = null;
    } else {
        Velocity(tooltip, 'stop');
        Velocity(icon, 'stop');
        Velocity(icon, { scaleX: [1, 1.1], scaleY: [1, 1.1] }, 300);
        Velocity(tooltip, 'transition.fadeOut', 500);
    }
}