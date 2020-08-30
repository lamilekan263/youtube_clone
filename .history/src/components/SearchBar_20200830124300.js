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
            <div className=''>

            </div>
        )
    }
}

export default Search