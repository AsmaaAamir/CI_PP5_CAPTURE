import React from "react";
import { Dropdown} from "react-bootstrap";
import { useHistory } from "react-router";
import styles from "../../src/styles/MoreDropdown.module.css";

const MoreOptions = React.forwardRef(({ onClick}, ref) => (
    <i className="fas- fa-ellipsis" ref={ref} onClick={
        (e) => {
            e.preventDefault();
            onClick(e);
        }}
    />    
));

export const MoreDropdown = ({ handleEdit, handleDelet }) => {
    return (
        <Dropdown className="ml-auto" drop="left">
            <Dropdown.Toggle as={MoreOptions}/>
            <Dropdown.Menu className="text-center" popperConfid={{ strategy: "fixed" }}>
                <Drop.Item className={styles.Dropdown} onClick={handleEdit} aria-label="Edit">
                    <i className="fas- fa-edit" />
                </Drop.Item>
                <Drop.Item className={style.Dropdown} onClick={handleDelet} aria-label="Delet">
                    <i className="fas- fa-trash-alt" />
                </Drop.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export const ProfileEditDropdown = ({ id }) => {
    const history = useHistory();
    return (
        <Dropdown className={'ml-auto- px-3 ${stlyes.Absolute}'} drop="left">
            <Dropdown.Toggle as={MoreOptions} />
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => history.push('/profiles/${id}/edit')} >
                    <i className="fas fa-edit" /> Edit Profile 
                </Dropdown.Item>
                <Dropdown.Item onClick={() => history.push('/profiles/${id}/edit.username')} >
                    <i className="fas id-card" /> Change Username 
                </Dropdown.Item>
                <Dropdown.Item onClick={() => history.push('/profiles/${id}/edit/password')} >
                    <i className="fas fa-key" /> Change Password 
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};