import attachConsumer from "../../helpers/attachConsumer"
import ItemDetails, { Record } from "../ItemDetails/ItemView"

const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}>
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

const mapMethodsToProps = (swapiService) => {
  console.log(swapiService)
  return {
    getData: swapiService.getStarshipById,
    getImageUrl: swapiService.getStarshipImg
  }
}

export default attachConsumer(StarshipDetails, mapMethodsToProps)