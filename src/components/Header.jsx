import PropTypes from 'prop-types';

function Header({
  text = 'Feedback UI',
  bgColor = 'rgba(0,0,0,0.4)',
  textColor = '#bb1b99',
}) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}
// note - should use jd default params i.e
// bgcolor='rgba(0,0,0,0.4)'at function level
// Header.defaultProps = {
//   text: 'Feedback UI',
//   bgColor: 'rgba(0,0,0,0.4)',
//   textColor: '#ff6a95',
// };
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
