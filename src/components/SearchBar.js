import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    };

    onSearchBarSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
        // Call callback function from parent component -- API
    };

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.onSearchBarSubmit}>
                    <div className="">
                        <label htmlFor="search-input" className="display-5">
                            Search
                        </label>
                        <input
                            type="text"
                            id="search-input"
                            className="form-control form-control-lg"
                            placeholder="Enter your search term"
                            // Creating a controled input – storting data on component
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
