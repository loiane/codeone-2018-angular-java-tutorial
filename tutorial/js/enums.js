"use strict";
function calculateArea(shape) {
    switch (shape.type) {
        case 'circle':
            return Math.PI * shape.;
        case 'rectangle':
            return shape.w * shape.h;
        case 'square':
            return Math.pow(shape.w, 2);
    }
    throw new Error('Invalid Shape');
}
var myCircle = { type: 'circle', radius: 2 };
calculateArea(myCircle);
