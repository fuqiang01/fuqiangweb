import { Shape, Point } from './types';
import SquareGroup from './SquareGroup';
import { getRandom } from '../util'
import Square from './Square';



export class TShape extends SquareGroup {
    constructor(
        _centerPoint: Point,
        _color: string
    ) {
        super(
            [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }],
            _centerPoint, _color
        )
    }
}

export class LShape extends SquareGroup {
    constructor(
        _centerPoint: Point,
        _color: string
    ) {
        super(
            [{ x: -2, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }],
            _centerPoint, _color
        )
    }
}

export class LMirrorShape extends SquareGroup {
    constructor(
        _centerPoint: Point,
        _color: string
    ) {
        super(
            [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }, { x: 0, y: -1 }],
            _centerPoint, _color
        )
    }
}

export class SShape extends SquareGroup {
    constructor(
        _centerPoint: Point,
        _color: string
    ) {
        super(
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 1 }],
            _centerPoint, _color
        )
    }
    rotate(exists: Square[]) {
        super.rotate(exists);
        this.isClock = !this.isClock;
    }
}

export class SMirrorShape extends SquareGroup {
    constructor(
        _centerPoint: Point,
        _color: string
    ) {
        super(
            [{ x: 0, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
            _centerPoint, _color
        )
    }
    rotate(exists: Square[]) {
        super.rotate(exists);
        this.isClock = !this.isClock;
    }
}

export class SquareShape extends SquareGroup {
    constructor(
        _centerPoint: Point,
        _color: string
    ) {
        super(
            [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }],
            _centerPoint, _color
        )
    }
    rotate() { }
}

export class LineShape extends SquareGroup {
    constructor(
        _centerPoint: Point,
        _color: string
    ) {
        super(
            [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
            _centerPoint, _color
        )
    }
    rotate(exists: Square[]) {
        super.rotate(exists);
        this.isClock = !this.isClock;
    }
}

export const shapes = [
    TShape,
    LShape,
    LMirrorShape,
    SShape,
    SMirrorShape,
    SquareShape,
    LineShape
]

export const colors = [
    "red",
    "green",
    "blue",
    "orange"
]

export function createTeris(centerPoint: Point): SquareGroup {
    const shapeI = getRandom(0, shapes.length);
    const colorsI = getRandom(0, colors.length);
    const Shape = shapes[shapeI];
    const color = colors[colorsI];
    return new Shape(centerPoint, color);
}
