import React from 'react';
import { Paper, TextField } from '@material-ui/core'

class Search extends React.Component{
 
    state ={
        searchTerm : ''
    }
    handleChange = (e) =>{
        console.log(e.target.value)
    }


    render(){
        return(
          <Paper elevation ={6} style = {{padding : '25px'}}>
              <form onSubmit = {this.handleSubmit}>
                <TextField fullWidth label = "Search..." onChange = {this.handleChange}/>
              </form>
          </Paper>
        )
    }
}

export default Search