import React from 'react';
import { Paper, TextField , Container  } from '@material-ui/core'

class Search extends React.Component{
 
    state ={
        searchTerm : ''
    }
    handleChange = (e) =>{
        this.setState({searchTerm : e.target.value})
        
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        const { searchTerm } = this.state;
        const { onsearchSubmit } = this.props;
        onsearchSubmit(searchTerm)
    }
    render(){
        return(
            <Container
          <Paper elevation ={6} style = {{padding : '25px'}}>
              <form onSubmit = {this.handleSubmit}>
                <TextField fullWidth label = "Search..." onChange = {this.handleChange}/>
              </form>
          </Paper>
        )
    }
}

export default Search