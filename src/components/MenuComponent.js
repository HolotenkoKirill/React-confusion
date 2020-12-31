import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

    function RenderMenuItem ({selected, onClick}) {
        return (
            <Card>
                <Link to={`/menu/${selected.id}`}>
                	<CardImg width="100%" src={selected.image} alt={selected.name} />
                	<CardImgOverlay>
                	    <CardTitle>{selected.name}</CardTitle>
                	</CardImgOverlay>
            	</Link>
            </Card>
        );
    }

    const Menu = (props) => {

        const menu = props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={dish.id}>
                    <RenderMenuItem selected={dish} />
                </div>
            );
        });

        return (
            <div className="container">
	            <div className="row">
	            	<Breadcrumb>
	            		<BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
	            		<BreadcrumbItem active>Menu</BreadcrumbItem>
	            	</Breadcrumb>
	            	<div className="col-12">
	            		<h3>Menu</h3>
	            		<hr/>
	            	</div>
	            </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;