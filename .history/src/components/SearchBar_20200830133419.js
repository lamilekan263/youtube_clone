import React from 'react';


class Search extends React.Component{
 
    state ={
        searchTerm : ''
    }
    handleChange = (e) =>{
        this.setState({searchTerm : e.target.value})
        
    }

    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchTerm)
        console.log(this.state.searchTerm)
    }
    render(){
        return(
            <div className='search-bar ui segment'>
                <form onsclassName='ui form'>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.searchTerm} onChange={ this.handleChange} placeholder="Search video" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Search