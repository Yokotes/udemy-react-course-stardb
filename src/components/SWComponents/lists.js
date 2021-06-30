import attachConsumer from "../../helpers/attachConsumer";
import withData from "../../helpers/withData"
import ItemList from "../ItemList/ItemList"

const mapMethodsToPersonProps = ({ getAllPeople }) => {
  return {
    getData: getAllPeople
  }
}

const mapMethodsToPlanetProps = ({ getAllPlanets }) => {
  return {
    getData: getAllPlanets
  }
}

const mapMethodsToStarshipProps = ({ getAllStarships }) => {
  return {
    getData: getAllStarships
  }
}

const PersonList = attachConsumer(withData(ItemList), mapMethodsToPersonProps)

const PlanetList = attachConsumer(withData(ItemList), mapMethodsToPlanetProps)

const StarshipList = attachConsumer(withData(ItemList), mapMethodsToStarshipProps)

export {
  PersonList,
  PlanetList,
  StarshipList
}