import React from 'react';
import { Paper, TextField } from '@material-ui/core'

class Search extends React.Component{
    constructor(){
        super();
        this.state ={

        }
    }


    render(){
        return(
          <Paper elevation ={6} style = {{padding : '25px'}}>
              <form onSubmit = {this.handleSubmit}>
                <TextField fullWidth label = "Search..." onChange = {}/>
              </form>
          </Paper>
        )
    }
}

export default Search