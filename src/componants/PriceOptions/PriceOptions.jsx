import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    [
        {
          "id": 1,
          "name": "Basic",
          "price": 50,
          "features": ["Access to cardio area", "Access to weightlifting area", "Locker rental"]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 80,
          "features": ["Access to cardio area", "Access to weightlifting area", "Group fitness classes", "Sauna access"]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 120,
          "features": ["Access to cardio area", "Access to weightlifting area", "Group fitness classes", "Personal trainer sessions", "Towel service", "Swimming pool access"]
        }
      ]
      
    return (
        <div>
            <h2 className="text-6xl">Best price in the town</h2>
            {
             PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;