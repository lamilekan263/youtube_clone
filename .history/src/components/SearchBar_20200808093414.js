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
          <Paper elevation ={6}>
              <form>
                <TextField fullwidth></TextField>
              </form>
          </Paper>
        )
    }
}

export default Search