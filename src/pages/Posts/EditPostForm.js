import React, { useEffect, useRef, useState } from "react";
import { Form, Button, Row, Col, Container, Alert, Image } from "react-bootstrap";
import { useHistory, useParams } from "react-router"

import { axiosReq } from "../../api/axiosDefaults";

function EditPostForm(){
    const [ errors, setErrors ] = useState({});
    const [postData, setPostData ] = useState({
        title: "",
        content: "",
        image: "", 
    });
    const { title, content, image } = postData;
    const imageInput = useRef(null); 
    const history = useHistory();
    const { id } = useParams();


    useEffect(() => {
        const handleMount = async () =>{
            try {
                const { data } = await axiosReq.get('/posts/${id}/')
                const { title, content, image, is_owner } = data;

                is_owner ? setPostData({ title, content, image }) : history.push("/");
            } catch (err) {
                //consol.log
            }
        }; handleMount();
    }, [history, id]);


    const handleChange = (e) =>{
        setPostData({
            ...postData,
            [e.target.name]: e.target.value
        });
    };

    const handleChangeImage = (e) => {
        if (e.target.files.length) {
            URL.revokeObjectURL(image);
            setPostData({
                ...postData,
                image: URL.createObjectURL(e.target.files[0]),
            });
        }
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("content", content);

        if (imageInput?.current?.files[0]){
            formData.append("image",imageInput.current.files[0]);
        }
        try {
            await axiosReq.put('/posts/$%{id}/', formData);
            history.push('/posts/${id}');
        } catch (err) {
            //consol.log (err);
            if (err.response?.status !== 401){
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    type="text" 
                    name="title" 
                    value={title} 
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.title?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>Content</Form.Label>
                <Form.Control 
                    type="text" 
                    row={6}
                    name="content" 
                    value={content} 
                    onChange={handleChange}
                />
            </Form.Group>
            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}

            <Button className={styles.Button} onClick={() => 
                history.goBack()}> 
                Cancel </Button>
            
            <Button className={styles.Button} type="submit">
                Save</Button>

        </div>
    );

    return (
        <Form onSubmit={handeSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container className={'${styles.content} d-flex flex-column justify-content-center'}>
                        <Form.Group className="text-center">
                            <figure>
                                <Image className={styles.Image} src={image} rounded />
                            </figure>
                            <div>
                            <Form.Label className={'${styles.Button} btn'} 
                            htmlFor="image-upload" >
                                Change the Image
                            </Form.Label>
                            </div>
                            <Form.File 
                                id="image-upload"
                                accept="image/*"
                                onChange={handleChangeImage}
                                ref={imageInput}
                                />
                        </Form.Group>
                        {errors?.image?.map((messgae, idx) => {
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        })}
                        <div className="d-md-none">{textFields}</div>
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-blokc p-o p-md-2">
                        <Container className={styles.content}>
                            {textFields}
                        </Container>
                </Col>
             </Row>
        </Form>
    );

}

export default EditPostForm;