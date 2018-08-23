import Velocity from 'velocity-animate';

function dotsAnim(dotsContainer) {
    const dots = dotsContainer.children;
    this.count = 0;

    this.animate = () => {
        const runReposition = () => { this.reposition(); }
        const count = this.count;
        const sequence = [
            { 
                e: dots[1], 
                p: {
                    left: ['245px', '0px'], 
                    translateZ: [
                        function() { return Math.random() * 200 + 150 + 'px' },
                        '0px' 
                    ]
                }, 
                o: { duration: 4200 } 
            },
            { 
                e: dots, 
                p: { scaleX: [0, 1], scaleY: [0, 1] }, 
                o: { 
                    duration: 2000, 
                    complete: function() { 
                        if (count <= 3) {
                            runReposition() 
                        } 
                    }} 
            }               
        ];
        Velocity.RunSequence(sequence);
    }

    this.reposition = () => {
        const runAnimate = () => { this.animate() }
        const newTop = Math.floor(Math.random() * 60 + 20) + '%';
        const newLeft = Math.floor(Math.random() * 60 + 20) + '%';
        const rotates = [ 0, 90, 180, 270 ];
        const newRotate = rotates[Math.floor(Math.random() * 4)];
        const newSize = Math.random() + 0.1;

        Velocity(
            dots[1], 
            {   
                left: ['0px', '245px'], 
                translateZ: ['0px','300px'],
                opacity: [ 
                    function() { return (Math.random() * 2 + 3) / 10 }, 
                    0], 
            }, 
            { duration: 1 });
        Velocity(
            dotsContainer, 
            { 
                top: [newTop, 0], 
                left: [newLeft,0], 
                rotateZ: [newRotate, '0deg'],
                scaleX: [newSize, 1],
                scaleY: [newSize, 1]
            }, 
            { duration: 1 });
        Velocity(
            dots, 
            { scaleX: [1, 0], scaleY: [1, 0] }, 
            { duration: 1, complete: function() { runAnimate() } });
        this.count++;
    }

    this.init = () => {
        this.reposition();
    }
}

export default dotsAnim;