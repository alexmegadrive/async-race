import { html } from 'code-tag';
import { INewWinner, Model } from './api';
import { UISwitch as uiControls } from '../templates/navHTML';
import { garage as garageView } from '../templates/garageHTML';
import { winners as winnersView } from '../templates/winnersHTML';
import { IGarageCar, IWinner, GarageCars, WinnerCars, IStartEngineResponse, WinSort, WinSortOrder } from './api';

enum WinnersSort {
  time = 'time',
  wins = 'wins',
}

export class View {
  model: Model;
  app: HTMLElement | null;
  currentPageGarage: number;
  currentPageWinners: number;
  raceIsActive: boolean;
  winnersSort: WinSort;
  winnersSortOrder: WinSortOrder;
  constructor() {
    this.model = new Model();
    this.app = document.querySelector('#app');
    this.currentPageGarage = 1;
    this.currentPageWinners = 1;
    this.raceIsActive = false;
    this.winnersSort = WinSort.time;
    this.winnersSortOrder = WinSortOrder.asc;
  }

  renderUI() {
    if (this.app) {
      this.app.insertAdjacentHTML('beforeend', uiControls);
      this.app.insertAdjacentHTML('beforeend', garageView);
      this.app.insertAdjacentHTML('beforeend', winnersView);
    }
    this.renderGarageCars(this.currentPageGarage);
    this.addControlListeners();
    this.addCarControlListeners();
    this.addSortWinnersListeners();
    this.renderGaragePaginationBtns();
  }

  async renderWinners(page: number, sort = WinSort.time, order = WinSortOrder.desc) {
    const winnersList = document.querySelector('#winners-list');
    const winners: WinnerCars = (await this.model.API_getWinners(page, sort, this.winnersSortOrder)).cars;
    const winnersTemplate = html`<table class="GeneratedTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Car</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        *
      </tbody>
    </table>`;
    const index = winnersTemplate.indexOf('*');
    let winnerRows = '';
    if (winnersList) {
      winnersList.innerHTML = '';
    }
    winners.forEach((winner) => {
      winnerRows += `<tr>
      <th>${winner.id}</th>
      <th><div class="car" style="background: ${winner.color}"></div></th>
      <th>${winner.name}</th>
      <th>${winner.wins}</th>
      <th>${winner.time}</th>
      </tr>`;
    });

    let winnersTable = winnersTemplate.substring(0, index - 1) + winnerRows + winnersTemplate.substring(index);
    winnersList?.insertAdjacentHTML('beforeend', winnersTable);
  }

  addSortWinnersListeners() {
    const sortSelector = document.querySelector('#winners-sort') as HTMLElement;

    sortSelector.addEventListener('change', (e) => {
      const sortType = (e.target as HTMLSelectElement).value;

      if (sortType === 'time-asc') {
        this.winnersSort = WinSort.time;
        this.winnersSortOrder = WinSortOrder.asc;
      }
      if (sortType === 'wins-desc') {
        this.winnersSort = WinSort.wins;
        this.winnersSortOrder = WinSortOrder.desc;
      }
      if (sortType === 'time-desc') {
        this.winnersSort = WinSort.time;
        this.winnersSortOrder = WinSortOrder.desc;
      }
      if (sortType === 'wins-asc') {
        this.winnersSort = WinSort.wins;
        this.winnersSortOrder = WinSortOrder.asc;
      }
      this.renderWinners(1, this.winnersSort, this.winnersSortOrder);
    });
  }

  async renderGarageCars(page: number) {
    const response = await this.model.API_getCars(page);
    const garage = document.querySelector('#garage-list');

    if (garage) garage.innerHTML = '';
    response.cars.forEach((car: IGarageCar) => {
      const carHtml = this.renderGarageCar(car);
      garage?.insertAdjacentHTML('beforeend', carHtml);
    });
  }

  async pureRenderWinners(winners: WinnerCars, sort = WinnersSort.time) {
    const winnersList = document.querySelector('#winners-list');
    const winnersTemplate = html`<table class="GeneratedTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Car</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        *
      </tbody>
    </table>`;
    const index = winnersTemplate.indexOf('*');
    const sortFunc =
      sort === WinnersSort.time
        ? (a: IWinner, b: IWinner) => a.time - b.time
        : (a: IWinner, b: IWinner) => b.wins - a.wins;
    let winnerRows = '';
    if (winnersList) {
      winnersList.innerHTML = '';
    }
    winners.sort(sortFunc).forEach((winner) => {
      winnerRows += `<tr>
      <th>${winner.id}</th>
      <th><div class="car" style="background: ${winner.color}"></div></th>
      <th>${winner.name}</th>
      <th>${winner.wins}</th>
      <th>${winner.time}</th>
      </tr>`;
    });
    let winnersTable = winnersTemplate.substring(0, index - 1) + winnerRows + winnersTemplate.substring(index + 1);
    winnersList?.insertAdjacentHTML('beforeend', winnersTable);
  }

  pureRenderGarageCars(cars: GarageCars) {
    const garage = document.querySelector('#garage-list');

    if (garage) garage.innerHTML = '';
    cars.forEach((car: IGarageCar) => {
      const carHtml = this.renderGarageCar(car);
      garage?.insertAdjacentHTML('beforeend', carHtml);
    });
  }

  async renderGaragePaginationBtns() {
    const paginationContainer = document.querySelector('#garage-pagination');
    const response = await this.model.API_getCars(0);
    const totalCount = response.totalCount;
    const totalPages = Math.ceil(totalCount / 7);

    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';
    if (totalPages > 1) {
      paginationContainer.innerHTML = html`
        <div style="display: flex; flex-direction:column">
          <div>Entries: ${totalCount.toString()}</div>
          <div>Page:</div>
        </div>
      `;
      for (let i = 1; i <= totalPages; i++) {
        const pagBtn = document.createElement('button');
        pagBtn.classList.add('pagination__button');
        pagBtn.setAttribute('data-page', i.toString());
        pagBtn.innerText = i.toString();
        pagBtn.onclick = () => {
          if (!paginationContainer) return;
          const pagBtns: NodeListOf<HTMLElement> = paginationContainer.querySelectorAll('.pagination__button');
          pagBtns.forEach((btn) => btn.classList.remove('pagination__button--active'));
          pagBtn.classList.add('pagination__button--active');
          this.currentPageGarage = i;
          this.renderGarageCars(this.currentPageGarage);
        };
        if (paginationContainer) paginationContainer.append(pagBtn);
      }
      paginationContainer
        .querySelector(`[data-page="${this.currentPageGarage}"]`)
        ?.classList.add('pagination__button--active');
    }
  }
  async renderWinnersPaginationBtns() {
    const paginationContainer = document.querySelector('#winners-pagination');
    const response = await this.model.API_getWinners(0, WinSort.time, WinSortOrder.asc);
    const totalCount = response.totalCount;
    const totalPages = Math.ceil(totalCount / 10);

    if (!paginationContainer) return;

    paginationContainer.innerHTML = '';
    if (totalPages > 1) {
      paginationContainer.innerHTML = html` <div style="display: flex; flex-direction:column">
        <div>Entries: ${totalCount.toString()}</div>
        <div>Page:</div>
      </div>`;

      for (let i = 1; i <= totalPages; i++) {
        const pagBtn = document.createElement('button');
        pagBtn.classList.add('pagination__button');
        pagBtn.setAttribute('data-page', i.toString());
        pagBtn.innerText = i.toString();
        pagBtn.onclick = () => {
          if (!paginationContainer) return;
          const pagBtns: NodeListOf<HTMLElement> = paginationContainer.querySelectorAll('.pagination__button');
          pagBtns.forEach((btn) => btn.classList.remove('pagination__button--active'));
          pagBtn.classList.add('pagination__button--active');
          this.currentPageWinners = i;
          this.renderWinners(i, this.winnersSort, this.winnersSortOrder);
        };
        if (paginationContainer) paginationContainer.append(pagBtn);
      }
      paginationContainer
        .querySelector(`[data-page="${this.currentPageWinners}"]`)
        ?.classList.add('pagination__button--active');
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
        <button class="btn car-controls__btn" data-car-id="${car.id.toString()}" data-car-action="test-create-winner">
          <i>[test] create winner</i>
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
          <div class="car" style="background: ${car.color}"></div>
        </div>
      </div>
    </div>`;
    return carHtml;
  }

  addControlListeners() {
    const garageControls = document.querySelector('#garage-controls') as HTMLElement;
    const garageView = document.querySelector('#garage-view') as HTMLElement;
    const winnersView = document.querySelector('#winners-view') as HTMLElement;
    const navigateGarage = document.querySelector('#switch-garage');
    const navigateWinners = document.querySelector('#switch-winners');

    navigateGarage?.addEventListener('click', () => {
      if (garageView) garageView.hidden = false;
      if (winnersView) winnersView.hidden = true;
    });
    navigateWinners?.addEventListener('click', () => {
      if (garageView) garageView.hidden = true;
      if (winnersView) winnersView.hidden = false;
      this.renderWinnersPaginationBtns();
      this.renderWinners(this.currentPageWinners, this.winnersSort, this.winnersSortOrder);
    });
    garageControls?.addEventListener('click', async (e) => {
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
    const startBtns: NodeListOf<HTMLElement> = document.querySelectorAll('[data-car-action="start"]');
    const stopBtns: NodeListOf<HTMLElement> = document.querySelectorAll('[data-car-action="stop"]');
    startBtns.forEach((btn) => btn.classList.remove('btn--disabled'));
    stopBtns.forEach((btn) => btn.classList.add('btn--disabled'));
    cars.forEach((car) => {
      car.style.left = '0';
      car.classList.add('parking');
    });
  }
  handleCreateCar() {
    const nameInput = document.querySelector('#new-name-input') as HTMLInputElement;
    const colorInput = document.querySelector('#new-color-input') as HTMLInputElement;
    const name = nameInput.value;
    const color = colorInput.value;
    if (name) {
      this.model.API_createCar(name, color);
      this.renderGaragePaginationBtns();
      this.renderGarageCars(this.currentPageGarage);
      nameInput.value = '';
    } else alert('Please type name');
  }

  async handleUpdateCar() {
    const nameInput = document.querySelector('#update-name-input') as HTMLInputElement;
    const colorInput = document.querySelector('#update-color-input') as HTMLInputElement;
    const idInput = document.querySelector('#update-id-input') as HTMLInputElement;
    const name = nameInput.value;
    const id = Number(idInput.value);
    const color = colorInput.value;

    await this.model.API_updateCar(id, name, color);
    this.renderGarageCars(this.currentPageGarage);
    nameInput.value = '';
    idInput.value = '';
  }

  handleGenerateCars() {
    this.model.generateCars();
    setTimeout(() => {
      this.renderGarageCars(this.currentPageGarage);
      this.renderGaragePaginationBtns();
    }, 1000);
  }

  handleStartRace() {
    this.raceIsActive = true;
    const startBtns: NodeListOf<HTMLElement> = document.querySelectorAll('[data-car-action="start"]');
    startBtns.forEach((el) => el.click());
  }

  addCarControlListeners() {
    const garageList = document.querySelector('#garage-list');
    let currentWinnerId: number | null;

    garageList?.addEventListener('click', async (e) => {
      const target = e.target as HTMLElement;
      const box = target.closest('.car-box') as HTMLElement;
      if (!box) return;
      const action = target.getAttribute('data-car-action') || 'stopped';
      const carId = Number(box.getAttribute('data-car-id'));
      const carColor = box.getAttribute('data-car-color') || '';
      const carNameBox = box.querySelector('.car-controls__name') as HTMLElement;
      const startBtn = box.querySelector('[data-car-action="start"]') as HTMLElement;
      const stopBtn = box.querySelector('[data-car-action="stop"]') as HTMLElement;
      const carName = carNameBox.innerText || '';
      const carFigure = box?.querySelector('.car') as HTMLElement;

      const handleStartCar = async () => {
        const startTime: number = new Date().getTime();
        if (startBtn.classList.contains('btn--disabled')) return;
        let carMovingProgress: ReturnType<typeof setInterval>;

        startBtn.classList.add('btn--disabled');
        stopBtn.classList.remove('btn--disabled');
        box.classList.remove('car--looser');
        carFigure.classList.remove('parking');
        carFigure.style.left = '0';
        this.model
          .API_controlEngine(carId, 'started')
          .then((result: IStartEngineResponse) => {
            const finishMilliSeconds = result.distance / result.velocity;
            const step = 100 / finishMilliSeconds;
            let currentProgress = 0;

            carMovingProgress = setInterval(() => {
              currentProgress += step;
              if (carFigure && startBtn.classList.contains('btn--disabled')) {
                carFigure.style.left = `${currentProgress <= 1 ? currentProgress * 100 : 100}%`;
              }
              stopBtn.addEventListener('click', () => {
                clearInterval(carMovingProgress);
                return;
              });
            }, 100);
            return this.model.API_controlEngine(carId, 'drive');
          })
          .then((result) => {
            if (this.raceIsActive) {
              if (!currentWinnerId) {
                this.raceIsActive = false;
                currentWinnerId = carId;
                const finishTime: number = new Date().getTime();
                const winnerTime = (finishTime - startTime) / 1000;
                const winner = { id: carId, time: winnerTime, color: carColor, name: carName };
                this.model.API_handleWinner(winner);
                this.renderWinnerMessage(winner);
                currentWinnerId = null;
              }
            }
          })
          .catch((error: Error) => {
            console.log(error);
            startBtn.classList.remove('btn--disabled');
            stopBtn.classList.add('btn--disabled');
            box.classList.add('car--looser');
            setTimeout(() => {
              box.classList.remove('car--looser');
            }, 5000);
          })
          .finally(() => {
            clearInterval(carMovingProgress);
            startBtn.classList.remove('btn--disabled');
            stopBtn.classList.add('btn--disabled');
          });
      };
      const handleStopCar = async () => {
        const result = await this.model.API_controlEngine(carId, 'stopped');
        stopBtn.classList.add('btn--disabled');
        startBtn.classList.remove('btn--disabled');
        carFigure.style.left = '0';
        carFigure.classList.add('parking');
      };
      const handleRemoveCar = async (id: number) => {
        await this.model.API_removeCar_Garage(id);
        await this.model.API_removeCar_Winners(id);
        this.renderGarageCars(this.currentPageGarage);
        this.renderGaragePaginationBtns();
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
        case 'test-create-winner':
          const time = Math.random() * 10;
          this.model.API_handleWinner({ id: carId, time: time, color: carColor, name: carName });
          break;
        default:
          break;
      }
    });
  }

  renderWinnerMessage(winner: INewWinner) {
    const message: HTMLElement = document.createElement('div');
    message.innerHTML = html`<div class="modal modal--active" id="modal">
      <div>${winner.name.toUpperCase()} IS WINNER!</div>
      <div>TIME: ${winner.time.toString()}</div>
      <div>ID: ${winner.id.toString()}</div>
    </div>`;
    this.app?.append(message);
    setTimeout(() => {
      message.remove();
    }, 3000);
  }
}
