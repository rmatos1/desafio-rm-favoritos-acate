import { gql } from "@apollo/client";

const CHARACTER = gql`
    query {
        characters {
            results {
                id
                name
                species
                gender
                image
            }
        }
    }
`

export default CHARACTER;