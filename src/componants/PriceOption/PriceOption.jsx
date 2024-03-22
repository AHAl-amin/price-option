import PropTypes from 'prop-type';

const PriceOption = ({option}) => {
    const{name ,price ,features} = option;
    return (
        <div>
            <h2>
                <span className='text-6xl'>{price}</span>
                <span className='text-6xl'>/mon</span>
            </h2>
        </div>
    );
};
PriceOption.propTypes ={
    option:PropTypes.object
}

export default PriceOption;