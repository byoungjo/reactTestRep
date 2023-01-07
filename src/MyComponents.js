import PropTypes from 'prop-types';

const MyComponents = ({name,favoriteNumber, children}) => {
    return (
        <div>나의 콤포넌트 {name}<br />
        children 값은 {children}<br />
        좋아하는 숫자{favoriteNumber}
        </div>
    );
};

MyComponents.defaultProps = {
    name: '기본이름'
};
MyComponents.propTypes = {
    name : PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
export default MyComponents;