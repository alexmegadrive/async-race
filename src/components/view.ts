import { html } from 'code-tag';
import { Model } from './model';
import { controls } from '../templates/controlsHTML';
import { garage } from '../templates/garageHTML';
import { header } from '../templates/headerHTML';
import { winners } from '../templates/winnersHTML';
import { IGarageCar } from './model';

export class View {
  model: Model;
  app: HTMLElement | null;
  page: number;
  perPage: number;
  raceIsActive: boolean;
  // currentWinnerId: number | null;
  constructor() {
    this.model = new Model();
    this.app = document.querySelector('#app');
    this.page = 1;
    this.perPage = 7;
    this.raceIsActive = false;
    // this.currentWinnerId = null;
  }

  renderUI() {
    if (this.app) {
      this.app.insertAdjacentHTML('beforeend', controls);
      this.app.insertAdjacentHTML('beforeend', garage);
    }
    this.renderGarage(this.page);
    this.addGarageControlListeners();
    this.addCarControlListeners();
  }

  async renderGarage(page: number) {
    const response = await this.model.API_getCars(page);
    const garage = document.querySelector('#garage-list');
    const totalCount = response.totalCount;

    if (garage) garage.innerHTML = '';

    response.cars.forEach((car: IGarageCar) => {
      const carHtml = this.renderGarageCar(car);
      garage?.insertAdjacentHTML('beforeend', carHtml);
    });
    this.renderPaginationBtns(totalCount);
  }

  renderPaginationBtns(totalCount: number) {
    const totalPages = Math.ceil(totalCount / 7);
    const paginationContainer = document.querySelector('#garage-pagination');
    if (paginationContainer) paginationContainer.innerHTML = '';
    if (totalPages > 1) {
      if (paginationContainer) paginationContainer.innerHTML = 'Page: ';
      for (let i = 1; i <= totalPages; i++) {
        const pagBtn = document.createElement('button');
        pagBtn.classList.add('pagination__button');
        pagBtn.setAttribute('data-page', i.toString());
        pagBtn.innerText = i.toString();
        pagBtn.onclick = () => {
          this.page = i;
          this.renderGarage(this.page);
        };
        if (paginationContainer) paginationContainer.append(pagBtn);
      }
    }
  }

  renderGarageCar(car: IGarageCar) {
    const carHtml = html`<div class="car-box" data-car-id="${car.id.toString()}" data-car-color="${car.color}">
      <div class="car-box__car-controls">
        <button class="btn car-controls__btn" data-car-id="${car.id.toString()}" data-car-action="select">
          Select
        </button>
        <button class="btn car-controls__btn" data-car-id="${car.id.toString()}" data-car-action="remove">
          Remove
        </button>
        <button class="btn car-controls__btn" data-car-id="${car.id.toString()}" data-car-action="create-winner">
          test create winner
        </button>
        <div class="car-controls__name">${car.name}</div>
      </div>
      <div class="car-box__track-container">
        <div class="car-box__track-controls">
          <button
            class="btn track-control-btn track-control-btn--start"
            data-car-action="start"
            data-car-id="${car.id.toString()}"
          ></button>
          <button
            class="btn btn--disabled track-control-btn track-control-btn--stop"
            data-car-action="stop"
            data-car-id="${car.id.toString()}"
          ></button>
        </div>
        <div class="car-box__car-track">
          <div class="car"></div>
        </div>
      </div>
    </div>`;
    return carHtml;
  }

  renderWinners() {
    //
  }

  addGarageControlListeners() {
    const garage = document.querySelector('#garage-controls');
    garage?.addEventListener('click', async (e) => {
      console.log('click garage');
      const target = e.target as HTMLElement;
      const action = target?.dataset?.garageAction;

      switch (action) {
        case 'create':
          this.handleCreateCar();
          break;
        case 'update':
          this.handleUpdateCar();
          break;

        case 'race':
          this.handleStartRace();
          break;
        case 'reset':
          this.handleResetCars();
          break;
        case 'generate':
          this.handleGenerateCars();
          break;
        default:
          break;
      }
    });
  }

  handleResetCars() {
    const cars: NodeListOf<HTMLElement> = document.querySelectorAll('.car');
    cars.forEach((car) => car.classList.add('parking'));
  }
  handleCreateCar() {
    const nameInput = document.querySelector('#new-name-input') as HTMLInputElement;
    const colorInput = document.querySelector('#new-color-input') as HTMLInputElement;
    const name = nameInput.value;
    const color = colorInput.value;
    this.model.API_createCar(name, color);
  }
  handleUpdateCar() {
    const nameInput = document.querySelector('#update-name-input') as HTMLInputElement;
    const colorInput = document.querySelector('#update-color-input') as HTMLInputElement;
    const idInput = document.querySelector('#update-id-input') as HTMLInputElement;
    const name = nameInput.value;
    const id = Number(idInput.value);
    const color = colorInput.value;
    this.model.API_updateCar(id, name, color);
  }
  handleGenerateCars() {
    this.model.generateCars();
    setTimeout(() => {
      this.renderGarage(this.page);
    }, 1000);
  }

  handleStartRace() {
    // this.currentWinnerId = null;
    this.raceIsActive = true;
    console.log('this.raceIsActive from raceAll :', this.raceIsActive);
    const startBtns: NodeListOf<HTMLElement> = document.querySelectorAll('[data-car-action="start"]');
    startBtns.forEach((el) => el.click());
    // const cars: NodeListOf<HTMLElement> = document.querySelectorAll('.car');
    // cars.forEach((car) => car.classList.remove('parking'));
  }

  addCarControlListeners() {
    const garageList = document.querySelector('#garage-list');
    let currentWinnerId: number | null;

    garageList?.addEventListener('click', async (e) => {
      const target = e.target as HTMLElement;
      const action = target.getAttribute('data-car-action') || 'stopped';
      const box = target.closest('.car-box') as HTMLElement;
      const carId = Number(box.getAttribute('data-car-id'));
      const carColor = box.getAttribute('data-car-color') || '';
      const carNameBox = box.querySelector('.car-controls__name') as HTMLElement;
      const startBtn = box.querySelector('[data-car-action="start"]') as HTMLElement;
      const stopBtn = box.querySelector('[data-car-action="stop"]') as HTMLElement;
      const carName = carNameBox.innerText || '';
      const carFigure = box?.querySelector('.car') as HTMLElement;

      const handleStartCar = async () => {
        if (startBtn.classList.contains('btn--disabled')) return;
        let carMovingProgress: ReturnType<typeof setInterval>;
        const startTime: number = new Date().getTime();
        startBtn.classList.add('btn--disabled');
        stopBtn.classList.remove('btn--disabled');
        console.log('startTime :', startTime);
        carFigure.classList.remove('parking');
        this.model
          .API_controlEngine(carId, 'started')
          .then((result) => {
            const finishMilliSeconds = result.distance / result.velocity;
            const step = 100 / finishMilliSeconds;
            let currentProgress = 0;
            carMovingProgress = setInterval(() => {
              currentProgress += step;
              if (carFigure) carFigure.style.left = `${currentProgress * 100}%`;
            }, 100);
            return this.model.API_controlEngine(carId, 'drive');
          })
          .then((result) => {
            console.log('this.raceIsActive from 2 promise :', this.raceIsActive);
            if (this.raceIsActive) {
              if (!currentWinnerId) {
                this.raceIsActive = false;
                currentWinnerId = carId;
                const finishTime: number = new Date().getTime();
                const winnerTime = (finishTime - startTime) / 1000;
                const winner = { id: carId, time: winnerTime, color: carColor, name: carName };
                this.model.API_handleWinner(winner).then(() => {
                  console.log(this.model.API_getWinners());
                });
                currentWinnerId = null;
                console.log('winnerTime :', winnerTime);
              }
            }
            console.log(result);
          })
          .catch((error: Error) => {
            console.log(error);
            startBtn.classList.remove('btn--disabled');
            stopBtn.classList.add('btn--disabled');
          })
          .finally(() => {
            clearInterval(carMovingProgress);
            setTimeout(() => {
              startBtn.classList.remove('btn--disabled');
              stopBtn.classList.add('btn--disabled');

              carFigure.style.left = '0%';
            }, 8000);
          });
      };
      const handleStopCar = async () => {
        const result = await this.model.API_controlEngine(carId, 'stopped');
        stopBtn.classList.add('btn--disabled');
        startBtn.classList.remove('btn--disabled');

        carFigure.classList.add('parking');

        console.log(result);
      };
      const handleRemoveCar = (id: number) => {
        this.model.API_removeCar(id);
        const carItem = target.closest('.car-box');
        carItem?.remove();
      };
      const handleSelectCar = (id: number) => {
        const nameInput = document.querySelector('#update-name-input') as HTMLInputElement;
        const colorInput = document.querySelector('#update-color-input') as HTMLInputElement;
        const idInput = document.querySelector('#update-id-input') as HTMLInputElement;
        nameInput.value = carNameBox?.textContent || '';
        colorInput.value = carColor || '';
        idInput.value = carId.toString() || '';
      };

      switch (action) {
        case 'start':
          handleStartCar();
          break;
        case 'stop':
          handleStopCar();
          break;
        case 'select':
          handleSelectCar(carId);
          break;
        case 'remove':
          handleRemoveCar(carId);
          break;
        case 'create-winner':
          // this.model.API_handleWinner(carId, 5);
          break;
        default:
          break;
      }

      //   if (
      //     e.target instanceof HTMLElement &&
      //     e.target.hasAttribute('data-car-action') &&
      //     e.target.hasAttribute('data-carId')
      //   ) {
      //     if (action === 'start') {
      //       //
      //     }
      //     if (action === 'stop') {
      //       //
      //     }
      //   }
      // });

      // handleStartCar() {

      // }
      // handleStopCar() {

      // }
    });
  }
}
