import React from "react";
import { Dropdown} from "react-bootstrap";

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
                <Drop.Item className={style.Dropdown} onClick={handleEdit} aria-label="Edit">
                    <i className="fas- fa-edit" />
                </Drop.Item>
                <Drop.Item className={style.Dropdown} onClick={handleDelet} aria-label="Delet">
                    <i className="fas- fa-trash-alt" />
                </Drop.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};