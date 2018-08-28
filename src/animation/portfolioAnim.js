import Velocity from 'velocity-animate';

let timer = null;

export const projectMouseEnter = (project, text) => {
    timer = setTimeout(() => {
        timer = null;
        Velocity(project, 'stop');
        Velocity(text, 'stop');
        Velocity({e: project, p: { zIndex: 1 }, o: { duration: 1 }});
        Velocity({
            e: project, 
            p: { scaleX: [1.15, 1], scaleY: [1.15, 1] },
            o: { duration: 200 } });
        Velocity({
            e: text, 
            p: { opacity: [1, 0] },
            o: { duration: 400, queue: false }})
    }, 300);
    
}

export const projectMouseLeave = (project, text) => {
    if (timer !== null) { 
        clearTimeout(timer);
        timer = null; 
    } else {
        Velocity(project, 'stop');
        Velocity(text, 'stop');
        Velocity({
            e: project, 
            p: { scaleX: [1, 1.15], scaleY: [1, 1.15] },
            o: { duration: 200 } });
        Velocity({e: project, p: { zIndex: 0 }, o: { duration: 1 }});
        Velocity({
            e: text, 
            p: { opacity: [0, 1] },
            o: { duration: 200, queue: false }})
    }
    
}