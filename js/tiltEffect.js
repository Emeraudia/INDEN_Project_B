class TitlEffect {
    constructor({element}) {
        this.element = element;
        this.card = this.element.querySelector(".card");
        this.size = [340, 480];
        [this.w, this.h] = this.size;

        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.defaultStates = this.defaultStates.bind(this);
        this.setProperty = this.setProperty.bind(this);

        this.init = this.init.bind(this);
        this.init();
    }

    handleMouseMove(event) {
        const {offsetX, offsetY} = event;
        
        let X;
        let Y;

        X = 180 + (-(offsetX - (this.w/2)) / 3) / 3;
        Y = ((offsetY - (this.h/2)) / 3) / 3;
        console.log(offsetX+" "+offsetY);
        this.setProperty('--rY', X.toFixed(2));
        this.setProperty('--rX', Y.toFixed(2));
    }

    handleMouseEnter() {
        this.setProperty("transition", ".1s")
        this.mouseOnComponent = true;
    }

    handleMouseLeave() {
        this.mouseOnComponent = false;
        this.defaultStates();
    }

    defaultStates() {
        this.setProperty("transition", ".3s");
        this.setProperty('--rY', 0);
        this.setProperty('--rX', 180);
    }

    setProperty(p, v) {
        return this.card.style.setProperty(p, v);
    }

    init() {
        this.element.addEventListener('mousemove', this.handleMouseMove);
        this.element.addEventListener('mouseenter', this.handleMouseEnter);
        this.element.addEventListener('mouseleave', this.handleMouseLeave);
    }
}

 
const $ = e => document.querySelectorAll(e);

$('.wrapper').forEach(card => {
    const wrap = new TitlEffect({element:card});
});