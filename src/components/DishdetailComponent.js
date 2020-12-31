import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';




function RenderDish({dish}) {
    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                  <CardTitle><h4>{dish.name}</h4></CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div></div>
        );
    }
}

function RenderComments({comments}) {

    if (comments != null) {

        return (

            comments.map((com) => {

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


const DishDetail = (props) =>{
    if (props.selected != null) {
        return (
            <div className="container">
                <div className="row">
                  <Breadcrumb>
                    <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.selected.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                    <h3>{props.selected.name}</h3>
                    <hr/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-5 mt-1">
                  <RenderDish dish= {props.selected} />
                </div> 
                <div className="col-12 col-md-5 mt-1"> 
                  <h4>Comments</h4>
                   <RenderComments comments={props.comments} />
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


export default DishDetail;