import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import { Item } from "./ContactsItem.styled";

export const ContactItem =({id, name , phone})=> {
    const dispatch = useDispatch()

    const handleDelete = () => dispatch(deleteContact(id))

    return <Item key={id}>{name} : {phone}
    <button onClick={handleDelete}>delete</button>
    </Item>

}