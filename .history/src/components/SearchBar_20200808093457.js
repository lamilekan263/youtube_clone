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
          <Paper elevation ={6} style = {{}}>
              <form>
                <TextField fullwidth label = "Search..."></TextField>
              </form>
          </Paper>
        )
    }
}

export default Search