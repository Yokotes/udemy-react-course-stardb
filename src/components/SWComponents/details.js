import SwapiService from "../../services/SwapiService"
import ItemDetails from "../ItemDetails/ItemDetails";
import { Record } from "../ItemDetails/ItemView"

const {
  getPersonImg,
  getPlanetImg,
  getStarshipImg,
  getPeopleById,
  getPlanetById,
  getStarshipById
} = new SwapiService();

const PersonDetails = ({ itemId }) => {
  return (
    <ItemDetails
      id = {itemId}
      getImageUrl={getPersonImg}
      getData={getPeopleById}
    >
      <Record
        field="gender"
        label="Gender"
      />
      <Record
        field="birthYear"
        label="Birth Year"
      />
      <Record
        field="eyeColor"
        label="Eye Color"
      />
    </ItemDetails>
  )
}

const PlanetDetails = ({ itemId }) => {
  return (
    <ItemDetails
      id = {itemId}
      getImageUrl={getPlanetImg}
      getData={getPlanetById}
    >
      <Record
        field="population"
        label="Population"
      />
      <Record
        field="rotationPeriod"
        label="Rotation Period"
      />
      <Record
        field="diameter"
        label="Diameter"
      />
    </ItemDetails>
  )
}

const StarshipDetails = ({ itemId }) => {
  return (
    <ItemDetails
      id = {itemId}
      getImageUrl={getStarshipImg}
      getData={getStarshipById}
    >
      <Record
        field="model"
        label="model"
      />
      <Record
        field="length"
        label="Length"
      />
      <Record
        field="costInCredits"
        label="Cost"
      />
    </ItemDetails>
  )
}

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}