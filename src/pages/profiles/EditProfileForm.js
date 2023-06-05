import React, {useEffect, useState, useRef} from "react";
import { useHistory, useParams } from "react-router-dom";
import { Form, Row, Col, Container, Image, Button, Alert } from "react-bootstrap";

import axiosReq from "../../api/axiosDefaults";
import { useCurrentUser, useSetCurrentUser } from "../../contexts/CurrentUserContext";

const EditProfileForm = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const { id } = useParams();
    const history = useHistory();
    const imageFile = useRef();


    const [profileData, setProfileData] = useState({
        name: "",
        content: "",
        image: "",
    });

    const { name, content, image } = profileData;

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const handleMount = async () => {
            
        }
    })

}
