import attachConsumer from "../../helpers/attachConsumer";
import ItemDetails from "../ItemDetails/ItemDetails";
import { Record } from "../ItemDetails/ItemView"

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
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

const mapMethodsToProps = ({
  getPeopleById,
  getPersonImg
}) => {
  return {
    getData: getPeopleById,
    getImageUrl: getPersonImg
  }
}

export default attachConsumer(PersonDetails, mapMethodsToProps)