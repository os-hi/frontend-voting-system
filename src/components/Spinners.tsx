import { Spinner } from "@chakra-ui/react";
const Spinners = () => {
    return ( 
        <div className="flex flex-col justify-center items-center">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='white'
                color='purple.500'
                size='xl'
            />
            <h1 className="mt-3 text-xl font-bold text-center">Loading</h1>
            <p className="font-light text-xs">Please wait...</p>
        </div>
     );
}
 
export default Spinners;