import { carBrands, carModels } from '../data/cars';

interface IQueryPair {
  key: string;
  value: string;
}
export interface IGarageCar {
  id: number;
  name: string;
  color: string;
}

export interface IWinnerCar {
  id: number;
  wins: number;
  bestTime: string;
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

export type GarageCars = IGarageCar[];
export type WinnerCars = IWinnerCar[];

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
      const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
      const brand = carBrands[Math.floor(Math.random() * carBrands.length)];
      const model = carModels[Math.floor(Math.random() * carModels.length)];
      const name = brand + ' ' + model;
      // console.log(name, color);
      this.API_createCar(name, color);
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
      // console.log('response :', response);
      // console.log('result getcars:', result);
      this.garageCars = cars;
    } else {
      const response = await fetch(
        `${this.baseUrl}/garage${this.generateQueryString([
          { key: '_page', value: page.toString() },
          { key: '_limit', value: perPage.toString() },
        ])}`
      );
      cars = await response.json();
      totalCount = Number(response.headers.get('X-Total-Count'));
      // console.log('totalPagesCount :', totalCount);
      // console.log('response :', response);
      // console.log('result getcars :', result);
      this.garageCars = cars;
    }
    return { cars, totalCount };
  }

  async API_getWinners() {
    const cars = this.API_getCars(0);
    const response = await fetch(`${this.baseUrl}/winners`);
    const result = await response.json();
    // console.log('winners from api :', result);
    return result;
  }


  async API_getCar(id: number) {
    const response = await fetch(`${this.baseUrl}/garage/${id}`, {
      method: 'GET',
    });
    const result = await response.json();
    console.log(result);
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
    console.log(result);
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

  async API_removeCar(id: number) {
    const response = await fetch(`${this.baseUrl}/garage/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    console.log(result);
    return response;
  }

  

  async API_handleWinner(winner: INewWinner) {
    // console.log('new winner :', winner);
    const { id, time, name, color } = winner;
    this.API_getWinner(id).then(async (response) => {
      if (response.ok) {
        const result: IWinner = await response.json();
        console.log('найден winner, update :', result);
        const wins = result.wins + 1;

        let bestTime = time < Number(winner.time) ? time : Number(winner.time);
        // if (time < bestTime) bestTime = time;
        const updatedWinner = { id, time, color, name, wins };

        await this.API_updateWinner(updatedWinner);
        // const winners = await this.API_getWinners();
        // console.log('winners', winners);
      } else {
        console.log('response не найден, create :', response);
        // console.log('не найден, создаем нового');
        await this.API_createWinner(winner);
        // const winners = await this.API_getWinners();
        // console.log('winners', winners);
      }
    });
    const winners = await this.API_getWinners();
    console.log('winners', winners);
    // const response = await this.API_getWinner(id);

    // await this.API_getWinner(id)
    //   .then(async (response) => {
    //     console.log('response handlewinner :', response);
    //     const result: IWinner = response.json();
    //     console.log('result handlewinner :', result);
    //     if (response.ok) {
    //       // const result: IWinner = await response.json();
    //       // const winner = response.json();
    //       const wins = result.wins + 1;
    //       let bestTime = winner.time;
    //       if (time < bestTime) bestTime = time;
    //       this.API_updateWinner(id, wins, bestTime);
    //     } else {
    //       this.API_createWinner(winner);
    //       console.log('Winner not found, creating winner');
    //       console.log('result found winner :', response);

    //       // console.log('response :', response);
    //       // console.log('response json:', response.json());
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // console.log('all winners', this.API_getWinners);
  }

  async API_getWinner(id: number) {
    const response = await fetch(`${this.baseUrl}/winners/${id}`, {
      method: 'GET',
    });
    // const result = await response.json();
    // console.log('result getWinner:', result);

    return response;
  }

  async API_createWinner(winner: INewWinner) {
    // console.log(' create winner enter:', winner);
    const { id, time, color, name } = winner;

    const response = await fetch(`${this.baseUrl}/winners`, {
      method: 'POST',
      body: JSON.stringify({ id, wins: 1, time, color, name }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const result = await response.json();
    // console.log('create winnr result', result);
    return result;
  }

  // async API_handleWinner(id: number, time: number) {
  //   this.API_getWinners();

  //   const winner = await this.API_getWinner(id)
  //     .then((winner) => {
  //       console.log(winner);
  //       // if (!winner) {
  //       //   this.API_createWinner(id, time);
  //       // }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // console.log('winner API_handleWinner:', winner);

  //   // if (!winner) {
  //   //   this.API_createWinner(id, time);
  //   // }
  //   // await this.API_getWinner(id)
  //   //   .then((result) => {
  //   //     console.log('result :', result);
  //   //     console.log('ветка есть winer');
  //   //     // const response = result.json();
  //   //     // const wins = response.wins++ ;
  //   //     const wins = 1;
  //   //     // const time = response.time;
  //   //     this.API_updateWinner(id, wins, time);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log('ветка нет winer');
  //   //     this.API_createWinner(id, time);
  //   //   });

  //   // if (!winner) {
  //   //   console.log('ветка нет winer');

  //   //   this.API_createWinner(id, time);
  //   // } else {
  //   //   console.log('ветка есть winer');
  //   //   console.log('winner :', winner);

  //   //   const wins = winner.wins++;
  //   //   const time = winner.time;
  //   //   this.API_updateWinner(id, wins, time);
  //   // }
  // }
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
    // console.log('result :', result);
    // console.log(result);
  }
}
