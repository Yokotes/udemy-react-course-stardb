import attachConsumer from "../../helpers/attachConsumer"
import ItemDetails from "../ItemDetails/ItemDetails"
import { Record } from "../ItemDetails/ItemView"

const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}>
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

const mapMethodsToProps = ({
  getPlanetById,
  getPlanetImg
}) => {
  return {
    getData: getPlanetById,
    getImageUrl: getPlanetImg
  }
}

export default attachConsumer(PlanetDetails, mapMethodsToProps);