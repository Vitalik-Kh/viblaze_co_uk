import { velocityHelpers } from 'velocity-react';

const $main_blue = '#6d7eb5';
const $main_red = '#DE4A4A';
const $yellow = '#eccb39';
const $green = '#24c253';
const $pink = '#d31b8c';

let line_width = '70%';
if (window.innerWidth >= 610  ) {
    line_width = '550px';
}

export const greetingAnim = velocityHelpers.registerEffect({
        defaultDuration: 5000,
        calls: [
            [{ 
                backgroundSize: `${line_width} 3px, ${line_width} 3px`,
                translateY: ['-50%','-50%'],
                translateX: ['-50%','-50%']
            }, 0.25],
            [{ height: '3px', padding: 0 }, 0.10, { delay: 1000 }],
            [{ 
                width: ['3px','100%'], 
                backgroundSize: '0% 3px, 0% 3px' 
            }, 0.05],
            [{ 
                borderRadius: '50%',
                width: '30px', 
                height: '30px',
                scaleX: 0.4,
                scaleY: 0.4,
                backgroundColor: $green,
                color: $green,
            }, 0.10, { easing: [500, 15] }],
            [{ 
                scaleX: 1,
                scaleY: 1,
                backgroundColor: $yellow,
                color: $yellow,
            }, 0.10, { easing: [500, 10], delay: 500 }],
            [{ 
                scaleX: 2,
                scaleY: 2,
                backgroundColor: $main_red,
                color: $main_red
            }, 0.10, { easing: [500, 10], delay: 400}],
            [{ 
                scaleX: 4,
                scaleY: 4,
                backgroundColor: $pink,
                color: $pink
            }, 0.10, { easing: [500, 10], delay: 300}],
            [{ 
                scaleX: 1,
                scaleY: 1,
                width: '5000px',
                height: '5000px',
                backgroundColor: $main_blue

            }, 0.20, { easing: 'ease-out', delay: 300}],
            
        ]
    }); 


