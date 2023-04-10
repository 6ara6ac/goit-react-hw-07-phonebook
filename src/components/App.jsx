import { useSelector } from "react-redux";
import { selectIsLoading, selectError } from "redux/selectors";

import { ContactForm } from "./Phonebook/ContactForm";
import { ContactList } from "./ListContacts/ContactList";
import { Section } from "./Section/Section";
import { Filter } from "./Filter/Filter";



export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return <> 
  <Section mainTitle={'Phonebook'}>
  <ContactForm />
  </Section>
  <Section title={'Contacts'}>
  {isLoading && !error && <b>Request in progress...</b>}
  <Filter/>
  <ContactList />
  </Section>
  </>
};
