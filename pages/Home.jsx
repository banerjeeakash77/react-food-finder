
import { Button } from "semantic-ui-react";
import Header from "../src/components/common/Header";
import { Link } from "react-router-dom";

const Home=()=>{
    return (
       //inside of openening--->if anything is being passe-->called props
       //inside of parent ---->called children
        <Header title="Green Recipes" bgClass="bg-image">
            
            <Button
            content="SEARCH RECIPES"
            color="primary"
            as={Link}
            to="/recipes"
            size="big"
            />
         </Header>   

    )
}

export default Home;