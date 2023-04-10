import { selectFilter } from "redux/selectors"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "redux/filterSlice"
import { FilterStyled, Input } from "./Filter.styled"


export const Filter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilter)
  
  const handleFilterChange = ({currentTarget: {value}}) => {
    dispatch(changeFilter(value))
  }
 

  return <FilterStyled>
  <label htmlFor="filter">Filter
  <Input type="text" name="filter" value={filter} onChange={handleFilterChange}/>
  </label>
  </FilterStyled>
}