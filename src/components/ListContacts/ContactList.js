import { List } from "./ContactList.styled"
import { ContactItem } from "components/ContactItem/ComtactItem";
import { useDispatch, useSelector } from "react-redux"
import { selectVisibleContacts } from "redux/selectors"
import { fetchContacts } from "redux/operations";
import { useEffect } from "react";

export const ContactList = () => {

  const dispatch = useDispatch()
  const contactsList = useSelector(selectVisibleContacts)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


    
  
    return <List>
    {contactsList.length > 0 && contactsList.map(({id, name, phone})=>{
      return (
      <ContactItem
      key={id}
      id={id}
      name={name}
      phone={phone}/>
      );
    })}

    </List>
}

