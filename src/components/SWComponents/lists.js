import withData from "../../helpers/hoc-helper"
import SwapiService from "../../services/SwapiService";
import ItemList from "../ItemList/ItemList"

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = new SwapiService();

const PersonList = withData(ItemList, getAllPeople)

const PlanetList = withData(ItemList, getAllPlanets)

const StarshipList = withData(ItemList, getAllStarships)

export {
  PersonList,
  PlanetList,
  StarshipList
}