 import './FilterButton.css'
 import Button from '@mui/material/Button';
 import ButtonGroup from '@mui/material/ButtonGroup';

 
 export default function FilterButton(props) {
  return (
    <ButtonGroup>
    <Button
    sx={{
      backgroundColor: '#7EBBF1',
      '&:hover': {
        backgroundColor: '#C6E5F3',
        color: 'black'
      },
      color: 'white'
    }}
      type="button"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}>
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> gigs</span>
    </Button>
    </ButtonGroup>
  )
}