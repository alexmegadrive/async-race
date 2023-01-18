import { carBrands, carModels } from '../data/cars';

interface IQueryPair {
  key: string;
  value: string;
}
export interface IGarageCar {
  id: number;
  name: string;
  color: string;
  wins?: number;
  time?: number;
}
export interface IWinner {
  id: number;
  wins: number;
  time: number;
  name: string;
  color: string;
}
export interface INewWinner {
  id: number;
  time: number;
  name: string;
  color: string;
}
export interface IStartEngineResponse {
  distance: number;
  velocity: number;
}
export enum WinSort {
  id = 'id',
  wins = 'wins',
  time = 'time',
}
export enum WinSortOrder {
  asc = 'ASC',
  desc = 'DESC',
}
export type GarageCars = IGarageCar[];
export type WinnerCars = IWinner[];
export interface IGetCarsResponse {
  cars: GarageCars | WinnerCars;
  totalCount: number;
}
export class Model {
  garageCars: GarageCars;
  winnerCars: WinnerCars;
  baseUrl: string;

  constructor() {
    this.garageCars = [];
    this.winnerCars = [];
    this.baseUrl = 'http://localhost:3000';
  }

  generateQueryString(queryParams: IQueryPair[] = []) {
    return `?${queryParams.map((x) => `${x.key}=${x.value}`).join('&')}`;
  }

  generateCars() {
    const count = 100;
    for (let i = 0; i < count; i++) {
      const brand = carBrands[Math.floor(Math.random() * carBrands.length)];
      const model = carModels[Math.floor(Math.random() * carModels.length)];
      const name = brand + ' ' + model;
      let color = Math.floor(Math.random() * 16777215).toString(16);
      const colorStr = '#' + (color.length === 5 ? '0' + color : color);

      this.API_createCar(name, colorStr);
    }
  }

  async API_controlEngine(id: number, action: string) {
    const response = await fetch(
      `${this.baseUrl}/engine${this.generateQueryString([
        { key: 'id', value: id.toString() },
        { key: 'status', value: action },
      ])}`,
      { method: 'PATCH' }
    );
    return await response.json();
  }

  async API_getCars(page: number) {
    const perPage = 7;
    let cars: GarageCars = [];
    let totalCount = 0;

    if (!page && !perPage) {
      const response = await fetch(`${this.baseUrl}/garage`);
      cars = await response.json();
    } else {
      const response = await fetch(
        `${this.baseUrl}/garage${this.generateQueryString([
          { key: '_page', value: page.toString() },
          { key: '_limit', value: perPage.toString() },
        ])}`
      );
      cars = await response.json();
      totalCount = Number(response.headers.get('X-Total-Count'));
    }
    return { cars, totalCount };
  }

  async API_getWinners(page: number, sort: WinSort, order: WinSortOrder) {
    const perPage = 10;
    let cars: WinnerCars = [];
    let totalCount = 0;

    if (!page && !perPage) {
      const response = await fetch(`${this.baseUrl}/winners`);

      cars = await response.json();
    } else {
      const response = await fetch(
        `${this.baseUrl}/winners${this.generateQueryString([
          { key: '_page', value: page.toString() },
          { key: '_limit', value: perPage.toString() },
          { key: '_sort', value: sort },
          { key: '_order', value: order },
        ])}`
      );
      cars = await response.json();
      totalCount = Number(response.headers.get('X-Total-Count'));
    }
    return { cars, totalCount };
  }

  async API_getCar(id: number) {
    const response = await fetch(`${this.baseUrl}/garage/${id}`, {
      method: 'GET',
    });
    const result = await response.json();
    console.log('result :', result);
    return result;
  }

  async API_createCar(name: string, color: string) {
    const response = await fetch(`${this.baseUrl}/garage`, {
      method: 'POST',
      body: JSON.stringify({ name, color }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
  }

  async API_updateCar(id: number, name: string, color: string) {
    const response = await fetch(`${this.baseUrl}/garage/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ name, color }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    console.log(result);
  }

  async API_removeCar_Garage(id: number) {
    const response = await fetch(`${this.baseUrl}/garage/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    console.log(result);
    return response;
  }

  async API_removeCar_Winners(id: number) {
    const response = await fetch(`${this.baseUrl}/winners/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    return response;
  }

  async API_handleWinner(winner: INewWinner) {
    const { id, time, name, color } = winner;

    this.API_getWinner(id).then(async (response) => {
      if (response.ok) {
        const result: IWinner = await response.json();
        console.log('найден winner, проводим update :', result);
        let bestTime = time < Number(result.time) ? time : Number(result.time);
        const updatedWinner = { id, time: bestTime, color, name, wins: (result.wins += 1) };

        await this.API_updateWinner(updatedWinner);
      } else {
        console.log('winner не найден, проводим create :', response);
        await this.API_createWinner(winner);
      }
    });
  }

  async API_getWinner(id: number) {
    const response = await fetch(`${this.baseUrl}/winners/${id}`, {
      method: 'GET',
    });
    return response;
  }

  async API_createWinner(winner: INewWinner) {
    const { id, time, color, name } = winner;
    const response = await fetch(`${this.baseUrl}/winners`, {
      method: 'POST',
      body: JSON.stringify({ id, wins: 1, time, color, name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    return result;
  }

  async API_updateWinner(updatedWinner: IWinner) {
    const { id, time, color, name, wins } = updatedWinner;
    const response = await fetch(`${this.baseUrl}/winners/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ wins, time, name, color }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    console.log('result patch Update Winner  :', result);
    return result;
  }
}
