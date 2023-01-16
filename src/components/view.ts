import { html } from 'code-tag';
import { Model } from './model';
import { UISwitch as uiControls } from '../templates/navHTML';
// import { UISwitch, controls } from '../templates/controlsHTML';
import { garage as garageView } from '../templates/garageHTML';
import { header } from '../templates/headerHTML';
import { winners as winnersView } from '../templates/winnersHTML';
import { IGarageCar, IWinner, GarageCars, WinnerCars, IGetCarsResponse } from './model';
// import { IWinner } from './model';

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
  winnersSort: WinnersSort;
  // currentWinnerId: number | null;
  constructor() {
    this.model = new Model();
    this.app = document.querySelector('#app');
    this.currentPageGarage = 1;
    this.currentPageWinners = 1;
    this.raceIsActive = false;
    this.winnersSort = WinnersSort.time;
    // this.currentWinnerId = null;
  }

  renderUI() {
    if (this.app) {
      this.app.insertAdjacentHTML('beforeend', uiControls);
      // this.app.insertAdjacentHTML('beforeend', controls);
      this.app.insertAdjacentHTML('beforeend', garageView);
      this.app.insertAdjacentHTML('beforeend', winnersView);
    }
    this.renderGarageCars(this.currentPageGarage);
    this.addControlListeners();
    this.addCarControlListeners();
    this.addSortWinnersListeners();
    // this.renderGaragePaginationBtns();
    const getCars = this.model.API_getCars.bind(this.model);
    const renderCars = this.pureRenderGarageCars.bind(this);

    const testGaragaRender = this.renderPaginationBtnsTemplate.bind(this.model, 'garage', getCars, renderCars);
    // const testWinnersRender = this.renderPaginationBtnsTemplate.bind(this.model, 'garage', getWinners, renderWinners);
    testGaragaRender();
    // const getWinners = this.model.API_getWinners.bind(this.model);

    // const testGarage = this.renderPaginationBtnsTemplate.bind(
    //   this,
    //   getCars,
    //   this.renderGarageCars,
    //   this.currentPageGarage,
    //   '#garage-pagination'
    // );

    // testGarage();
  }

  async renderWinners(page: number, sort = WinnersSort.time) {
    const winnersList = document.querySelector('#winners-list');
    const winners: WinnerCars = (await this.model.API_getWinners(page)).cars;
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

    console.log('winners :', winners);
    winners.sort(sortFunc).forEach((winner) => {
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
      if (sortType === 'time') this.renderWinners(1, WinnersSort.time);
      if (sortType === 'wins') this.renderWinners(1, WinnersSort.wins);
    });
  }

  async renderGarageCars(page: number) {
    const response = await this.model.API_getCars(page);
    const garage = document.querySelector('#garage-list');
    const totalCount = response.totalCount;

    if (garage) garage.innerHTML = '';

    response.cars.forEach((car: IGarageCar) => {
      const carHtml = this.renderGarageCar(car);
      garage?.insertAdjacentHTML('beforeend', carHtml);
    });

    // this.renderPaginationBtns(totalCount);
  }

  async pureRenderWinners(winners: WinnerCars, sort = WinnersSort.time) {
    const winnersList = document.querySelector('#winners-list');
    // const winners: IWinner[] = (await this.model.API_getWinners(page)).winners;
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

    // console.log('winners :', winners);
    winners.sort(sortFunc).forEach((winner) => {
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

  pureRenderGarageCars(cars: GarageCars) {
    // console.log('pureRenderGarageCars :', cars);
    const garage = document.querySelector('#garage-list');
    if (garage) garage.innerHTML = '';
    // console.log('garage :', garage);
    cars.forEach((car: IGarageCar) => {
      const carHtml = this.renderGarageCar(car);
      // console.log('carHtml :', carHtml);
      garage?.insertAdjacentHTML('beforeend', carHtml);
    });
  }

  async renderGaragePaginationBtns() {
    const paginationContainer = document.querySelector('#garage-pagination');
    if (!paginationContainer) return;

    const response = await this.model.API_getCars(0);
    const totalCount = response.totalCount;
    // this.renderPaginationBtns(totalCount);
    const totalPages = Math.ceil(totalCount / 7);

    paginationContainer.innerHTML = '';
    if (totalPages > 1) {
      paginationContainer.innerHTML = 'Page: ';
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
      // console.log('currentPageGarage :', this.currentPageGarage);
    }
  }
  async renderWinnersPaginationBtns() {
    const paginationContainer = document.querySelector('#winners-pagination');
    if (!paginationContainer) return;

    // console.log('trigger');
    const response = await this.model.API_getWinners(0);
    // console.log('response :', response);
    const totalCount = response.totalCount;
    // this.renderPaginationBtns(totalCount);
    const totalPages = Math.ceil(totalCount / 10);

    console.log('paginationContainer :', paginationContainer);
    paginationContainer.innerHTML = '';
    if (totalPages > 1) {
      paginationContainer.innerHTML = 'Page: ';
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
          this.renderWinners(this.currentPageWinners);
        };
        if (paginationContainer) paginationContainer.append(pagBtn);
      }
      paginationContainer
        .querySelector(`[data-page="${this.currentPageWinners}"]`)
        ?.classList.add('pagination__button--active');
    }
  }

  // renderGaragePagination() {
  //   console.log('trigger1');
  //   return () =>
  //     this.renderPaginationBtnsTemplate(this.model.API_getCars, this.currentPageGarage, '#garage-pagination');
  // }

  async renderPaginationBtnsTemplate(
    type: 'garage' | 'winners',
    callbackGet: (page: number) => Promise<IGetCarsResponse>,
    callbackRender:
      | ((array: GarageCars) => void)
      | ((winners: WinnerCars, sort: WinnersSort = WinnersSort.time) => void)
    // callbackGet: (
    //   page: number
    // ) => Promise<{ cars: GarageCars; totalCount: number }> | Promise<{ winners: IWinner[]; totalCount: number }>,
    // callbackRender: (page: number) => void,
    // pageVar: number,
    // containerId: string
  ) {
    if (type === 'garage') {
    }
    // let callbackGet: (
    // page: number
    // ) => Promise<{ cars: GarageCars; totalCount: number }> | Promise<{ winners: IWinner[]; totalCount: number }>;
    // let callbackRender: (array: GarageCars) => void;
    let pageVar: number;
    let containerId: string;

    // callbackGet = this.model.API_getCars;
    // callbackRender = this.pureRenderGarageCars;
    pageVar = this.currentPageGarage;
    containerId = '#garage-pagination';

    const response = await callbackGet(0);
    const totalCount = response.totalCount;
    const perPage = containerId === '#garage-pagination' ? 7 : 10;
    const totalPages = Math.ceil(totalCount / perPage);
    const paginationContainer = document.querySelector(`${containerId}`);
    if (paginationContainer) paginationContainer.innerHTML = '';
    if (totalPages > 1) {
      if (paginationContainer) paginationContainer.innerHTML = 'Page: ';
      for (let i = 1; i <= totalPages; i++) {
        const pagBtn = document.createElement('button');
        pagBtn.classList.add('pagination__button');
        pagBtn.setAttribute('data-page', i.toString());
        pagBtn.innerText = i.toString();
        pagBtn.onclick = async () => {
          if (!paginationContainer) return;
          const pagBtns: NodeListOf<HTMLElement> = paginationContainer.querySelectorAll('.pagination__button');
          pagBtns.forEach((btn) => btn.classList.remove('pagination__button--active'));
          pagBtn.classList.add('pagination__button--active');
          // this.currentPageGarage = i;
          // console.log('this.currentPageGarage :', this.currentPageGarage);
          // console.log('callbackRender :', callbackRender);
          const response = await callbackGet(i);
          console.log('response :', response);
          callbackRender(response.cars);
        };
        if (paginationContainer) paginationContainer.append(pagBtn);
      }
      // document.querySelector(`[data-page="${this.currentPageGarage}"]`)?.classList.add('pagination__button--active');
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
    const getWinners = this.model.API_getWinners.bind(this.model);
    const renderWinners = this.pureRenderWinners.bind(this);
    const testWinnersRender = this.renderPaginationBtnsTemplate.bind(this.model, 'garage', getWinners, renderWinners);

    navigateGarage?.addEventListener('click', () => {
      if (garageView) garageView.hidden = false;
      if (winnersView) winnersView.hidden = true;
    });
    navigateWinners?.addEventListener('click', () => {
      if (garageView) garageView.hidden = true;
      if (winnersView) winnersView.hidden = false;
      // this.renderWinnersPaginationBtns();
      testWinnersRender();
      this.renderWinners(this.currentPageWinners);
    });
    garageControls?.addEventListener('click', async (e) => {
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
  }

  handleGenerateCars() {
    this.model.generateCars();
    setTimeout(() => {
      this.renderGarageCars(this.currentPageGarage);
      this.renderGaragePaginationBtns();
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
        // console.log('startTime :', startTime);
        carFigure.classList.remove('parking');
        carFigure.style.left = '0';
        this.model
          .API_controlEngine(carId, 'started')
          .then((result) => {
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
              // if (carFigure)
            }, 100);
            return this.model.API_controlEngine(carId, 'drive');
          })
          .then((result) => {
            // console.log('this.raceIsActive from 2 promise :', this.raceIsActive);
            if (this.raceIsActive) {
              if (!currentWinnerId) {
                this.raceIsActive = false;
                currentWinnerId = carId;
                const finishTime: number = new Date().getTime();
                const winnerTime = (finishTime - startTime) / 1000;
                const winner = { id: carId, time: winnerTime, color: carColor, name: carName };
                this.model.API_handleWinner(winner);
                // this.model.API_handleWinner(winner).then(() => {
                //   console.log(this.model.API_getWinners());
                // });
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
            startBtn.classList.remove('btn--disabled');
            stopBtn.classList.add('btn--disabled');
            // if (startBtn.classList.contains('btn--disabled')) {
            //   setTimeout(() => {
            //     startBtn.classList.remove('btn--disabled');
            //     stopBtn.classList.add('btn--disabled');
            //     carFigure.style.left = '0%';
            //   }, 8000);
            // }
          });
      };
      const handleStopCar = async () => {
        const result = await this.model.API_controlEngine(carId, 'stopped');
        stopBtn.classList.add('btn--disabled');
        startBtn.classList.remove('btn--disabled');
        carFigure.style.left = '0';
        carFigure.classList.add('parking');

        console.log(result);
      };
      const handleRemoveCar = async (id: number) => {
        await this.model.API_removeCar(id);
        // const carItem = target.closest('.car-box');
        // carItem?.remove();
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
