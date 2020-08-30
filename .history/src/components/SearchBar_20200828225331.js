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
            <form>
                <div class="grid-container">
                    <div class="grid-x grid-padding-x">
                    <div class="medium-6 cell">
                        <label>Input Label
                        <input type="text" placeholder=".medium-6.cell">
                        </label>
                    </div>
                    <div class="medium-6 cell">
                        <label>Input Label
                        <input type="text" placeholder=".medium-6.cell">
                        </label>
                    </div>
                    </div>
                </div>
                </form>
        )
    }
}

export default Search