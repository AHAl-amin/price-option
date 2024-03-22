import { FaCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div className="text-left ">
            <p className="flex items-center gap-2"><FaCheckCircle></FaCheckCircle> {feature}</p>
            <button></button>
        </div>
     
    );
};

export default Feature;