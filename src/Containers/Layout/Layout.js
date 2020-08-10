import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, onDataUpdate} from '../../actions/index';
import {listData, updatedData} from '../../reducers';
import SearchBar from '../../Components/SearchBar/SearchBar'
import SearchResults from '../../Components/SearchResults/SearchResults';
import EditForm from '../../Components/EditForm/EditForm';
import DetailsModal from '../../Components/DetailsModal/DetailsModal';
/**
 * Layout is container which contains different components 
 */
class Layout extends Component {
    constructor(props){
        super(props);
        this.searchResultData = this.searchResultData.bind(this);
        this.settingState = this.settingState.bind(this);
        this.modifiedData = this.modifiedData.bind(this);
        this.state = {
            searchData: [], //searched data will be stored in this array for sometime
            editForm: false,
            showDetails: false,
            selectedItem: null,
            showResult: false,
            
        }
    }

    componentDidMount() {
        this.props.getData();
    }

    componentWillReceiveProps(nextProps){
        const { data, setUpdatedData } = {...nextProps};
        if(setUpdatedData && setUpdatedData.length) this.settingState(setUpdatedData, true);
        else this.settingState(data,true);
    }

    settingState(data,showResult){
        this.setState({
            searchData: data,
            showResult
        })
    }

    searchResultData(searchData,showResult){
        if(!searchData.length && !showResult) return this.settingState([],false);
        if(showResult) {
            this.settingState(searchData,true);
        }
    }

    /**
     * 
     * @param {id} id is used to find result from store data which is unique id
     * clickHandler is used to send data of selected item from search results
     * to edit form
     */

    clickHandler (id) {
        let requiredObj = [...this.state.searchData];
        requiredObj = requiredObj.find((list) => list.id === id);
        this.setState({
                ...this.state,
                searchData: [requiredObj],
                editForm: false,
                showDetails: true
            });
    }
    editDetails (id) {
        let requiredObj = [...this.state.searchData];
        requiredObj = requiredObj.find((list) => list.id === id);
        this.setState({
                ...this.state,
                searchData: [requiredObj],
                editForm: true,
                showDetails: false
            });
    }

    modifiedData () {
        let data = arguments[0]
        this.props.updateData(data);
        this.setState({
            ...this.state,
            searchData: [],
            editForm: false,
            showResult: true
        })
    }

    cancelEdit = () =>{
        this.setState({
            ...this.state,
            searchData: [...this.props.data],
            editForm: false,
            showResult: true,
            showDetails: false
        })
    }

    render(){
        const {editForm, showResult, showDetails} = {...this.state};
        let searchOptions = (
            <div className="show--search--options">
                    <SearchBar resultData={this.searchResultData} searchData={this.props.data} ></SearchBar>
                    {
                        showResult ? <SearchResults clickHandler={(id)=>this.clickHandler(id)} listData={this.state.searchData} /> : null
                    }
            </div>
        );
        return (
            <section>
                { editForm &&  !showDetails ? null : searchOptions }
                { showDetails ? <DetailsModal cancel={this.cancelEdit}  editDetails={(id)=>this.editDetails(id)} data={this.state.searchData}/> : null }
                { editForm ? <EditForm cancel={this.cancelEdit} updatedData={this.modifiedData} data={this.state.searchData[0] } /> : null }                
            </section>
        )
    }
}

Layout.propTypes = {
    data: PropTypes.arrayOf(
		PropTypes.shape({
		userId: PropTypes.number,
		id: PropTypes.number,
		title: PropTypes.string,
		body: PropTypes.string
	})
	),
    setUpdatedData: PropTypes.arrayOf(
		PropTypes.shape({
		userId: PropTypes.number,
		id: PropTypes.number,
		title: PropTypes.string,
		body: PropTypes.string
	})
	),
    getData: PropTypes.func,
    updateData: PropTypes.func
}

const mapStateToProps = (state) => ({
    data: listData(state),
    setUpdatedData: updatedData(state)
})

const mapDispatchToProps  = dispatch => bindActionCreators({
        getData: fetchData,
        updateData: onDataUpdate
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Layout);