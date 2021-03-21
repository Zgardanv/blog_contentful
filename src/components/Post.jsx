import React from 'react';
import Spinner from './Spinner';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg} from 'reactstrap';

const Post = ({ article }) => {
    const { title, image, description, date } = article.fields;
    const formatedDate = date.substr(0, date.indexOf('T'));
    const formatedTime = date.substr(date.indexOf('T') + 1);
    return (
        <div className='post col-6'>
            <Card >
                <CardBody>
                    {image ? <CardImg className='image' src={image.fields.file.url} alt={title} /> : <Spinner />}
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardText>
                        {description}
                    </CardText>
                    <CardSubtitle>Posted on: {formatedDate} at {formatedTime}</CardSubtitle>
                </CardBody>

            </Card>
        </div>
    );
}

export default Post;
