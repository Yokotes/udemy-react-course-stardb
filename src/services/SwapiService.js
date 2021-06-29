export default class SwapiService {
  _api = "https://swapi.dev/api";
  _imgBase = "https://starwars-visualguide.com/assets/img";

  async getResource(path) {
    const res = await fetch(this._api + path);

    if (!res.ok) {
      throw new Error(`Can't fetch resource by path: ${this._api + path}. Error status: ${res.status}`);
    }

    return await res.json();
  }

  // GET Methods
  getAllPeople = async () => {
    const res = await this.getResource('/people');
    return res.results.map(this._transformPeople);
  }

  getPeopleById = async (id) => {
    const person = await this.getResource(`/people/${id}`);
    return this._transformPeople(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource('/planets');
    return res.results.map(this._transformPlanet);
  }

  getPlanetById = async (id) => {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async() => {
    const res = await this.getResource('/starships');
    return res.results.map(this._transformStarship);
  }

  getStarshipById = async (id) => {
    const starship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(starship);
  }

  // Image functions
  getPersonImg = ({id}) => {
    return `${this._imgBase}/characters/${id}.jpg`
  }

  getPlanetImg = ({id}) => {
    return `${this._imgBase}/planets/${id}.jpg`
  }

  getStarshipImg = ({id}) => {
    return `${this._imgBase}/starships/${id}.jpg`
  }

  // Transform functions
  _extractId(data) {
    const regex = '/([0-9]*)/$'
    return data.url.match(regex)[1]
  }

  _transformPlanet = (data) => {
    const id = this._extractId(data)

    return {
      id,
      name: data.name,
      population: data.population,
      rotationPeriod: data.rotation_period,
      diameter: data.diameter
    }
 
  }

  _transformPeople = (data) => {
    const id = this._extractId(data);

    return {
      id,
      name: data.name,
      gender: data.gender,
      birthYear: data.birth_year,
      eyeColor: data.eye_color,
    }
  }

  _transformStarship = (data) => {
    const id = this._extractId(data);

    return {
      id,
      name: data.name,
      model: data.model,
      manufacturer: data.manufacturer,
      costInCredits: data.cost_in_credits,
      length: data.length,
      crew: data.crew,
      passengers: data.passengers,
      cargoCapacity: data.cargo_capacity
    }
  }
}