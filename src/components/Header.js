// import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //     console.log('click')
  // }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? `red` : `green`}
        text={showAdd ? `Close` : `Add`}
        onClick={onAdd}
      />
    </header>
  );
};
Header.defaultProps = {
  title: 'Task Tracker',
};

//css in js
/* <h1 style={{ color: 'red' }}>{title}</h1> */

//3 diff color btns easy
/* <Button color='green' text='Hello' />
<Button color='blue' text='Hello2' />
<Button color='red' text='Hello3' /> */

export default Header;
