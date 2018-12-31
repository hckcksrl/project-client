import React from "react"
import {Mutation, Query} from "react-apollo"
import {Delete_Project} from "./queries"



export default class DeleteProject extends React.Component{
    render(){
        return(
            <Query query={}>
                            <Mutation mutation={Delete_Project}></Mutation>
            </Query>
        )
    }
}