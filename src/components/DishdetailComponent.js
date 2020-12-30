import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {


    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                <CardImg width="100%" src={this.props.selected.image} alt={this.props.selected.name}/>
                <CardBody>
                  <CardTitle><h4>{this.props.selected.name}</h4></CardTitle>
                  <CardText>{this.props.selected.description}</CardText>
                </CardBody>
            </Card>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(commentsArr) {

        if (commentsArr != null) {

            return (

                commentsArr.map((com) => {

                    return (
                        <ul key={com.id} className="list-unstyled pl-0">        
                    <li >
                      --{com.author} {new Intl.DateTimeFormat('en-US', 
                      {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                              }).format(new Date(com.date))}
                    </li>
                  {com.comment}
              </ul>
                    );

                })

            );

        } else {
            return (
                <div></div>
            );
        }
    }


    render() {
        if (this.props.selected != null) {
            return (
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-5 mt-1">
                  {this.renderDish(this.props.selected)}
                </div> 
                <div className="col-12 col-md-5 mt-1"> 
                  <h4>Comments</h4>
                    {this.renderComments(this.props.selected.comments)} 
                </div>
              </div>
            </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }

}

export default DishDetail;