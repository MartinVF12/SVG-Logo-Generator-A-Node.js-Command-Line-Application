class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {

        return `<circle cx="50%" cy="50%" r="40%" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {

        return `<rect x="10%" y="10%" width="80%" height="80%" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {

        return `<polygon points="50,10 190,190 10,190" fill="${this.color}" />`;
    }
}


export { Circle, Square, Triangle };
