import React from 'react';


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
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                    <div className="medium-6 cell">
                        <label>Input Label
                        <input type="text" placeholder=".medium-6.cell" />
                        </label>
                    </div>

                    </div>
                </div>
                </form>
        )
    }
}

export default Search