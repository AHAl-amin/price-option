// import PropTypes from 'prop-type';

import Feature from "../Feature/Feature";

const PriceOption = ({option}) => {
    const{name ,price ,features} = option;
    return (
      <div className="">
          <div className="bg-blue-500 rounded-lg  p-5 text-center my-4 space-y-5 ">
            <h2>
                <span className='text-6xl'>{price}</span>
                <span className='text-3xl'>/mon</span>

            </h2>
            <h2 className="text-4xl font-bold">{name}</h2>
            {
                features.map((feature ,index )=> <Feature key={index} feature={feature}></Feature>)
            }
        <button className="btn bg-green-300">Buy now</button>
        </div>
      </div>
    );
};
// PriceOption.propTypes ={
//     option:PropTypes.object
// }

export default PriceOption;