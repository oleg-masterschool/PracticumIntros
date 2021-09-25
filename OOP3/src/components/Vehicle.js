const vehicleSelector = '.vehicle';
export const vehicleImageSelector = '.vehicle__image';
const vehicleActiveClass = 'vehicle_is-active';

export class Vehicle {
    constructor(selector) {
        this._selector = selector;
        this._element;
        this._handleClick = this._handleImageClick.bind(this);
        this._handleKeys = this._handleKeyDown.bind(this);
        this.arrowHandler = this._arrowHandler.bind(this);
        this._xCounter = 0;
        this._yCounter = 0;
        this._movement = {
            'left': -10,
            'right': +  10,
            'up': -10,
            'down': +10
        };
    }

    _getTemplate() {
        return document
            .querySelector(this._selector)
            .content
            .querySelector(vehicleSelector)
            .cloneNode(true);
    }

    _arrowHandler(direction) {
        if (direction === 'left' || direction === 'right') {
            this._xCounter = this._xCounter + this._movement[direction];
        }

        if (direction === 'up' || direction === 'down') {
            this._yCounter = this._yCounter + this._movement[direction];
        }
        this._element.style.transform = `translate(${this._xCounter}px, ${this._yCounter}px)`;
    }

    _handleKeyDown(e) {
        e.preventDefault();
        const { key } = e;
        const directions = {
            "ArrowLeft": 'left',
            "ArrowRight": 'right',
            "ArrowUp": 'up',
            "ArrowDown": 'down',
        };

        if (key in directions) {
            this.arrowHandler(directions[key]);
        }
    }

    _handleImageClick() {
        this._element
            .classList.toggle(vehicleActiveClass);

        if (this._element.classList.contains(vehicleActiveClass)) {
            document.addEventListener('keydown', this._handleKeys);
        } else {
            this._element.style = null;
            this._xCounter = 0;
            this._yCounter = 0;
            document.removeEventListener('keydown', this._handleKeys);
        }
    }


    _setEventListeners() {
        this._element
            .addEventListener("click", () => {
                this._handleClick();
            });
    }
}