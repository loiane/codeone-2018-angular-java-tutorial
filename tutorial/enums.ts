type Shape =
  | { type: 'circle'; radius: number }
  | { type: 'square'; w: number }
  | { type: 'rectangle'; w: number; h: number };

function calculateArea(shape: Shape) {
  switch (shape.type) {
    case 'circle':
      return Math.PI * shape.;
    case 'rectangle':
      return shape.w * shape.h;
    case 'square':
      return shape.w ** 2;
  }
  throw new Error('Invalid Shape');
}

const myCircle: Shape = { type: 'circle', radius: 2 };
calculateArea(myCircle);
