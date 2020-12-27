import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent'

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCampsite: null
        };
    }

    conCampsiteSelect(campsite) {
        this.setState({selectedCampsite: campsite});
    }

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.conCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>                    
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    { directory }
                </div>
                <CampsiteInfo className="row" campsite={this.state.selectedCampsite} />
            </div>  
        );
    }
}

export default Directory;