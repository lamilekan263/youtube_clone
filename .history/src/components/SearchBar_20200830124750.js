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
            <div className='search-bar ui segment'>
                <form className='ui form'>
                    <div class="field">
                        <label>Video Search</label>
                        <input type="text" name="last-name" placeholder="Searc" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search