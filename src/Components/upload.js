import React from 'react';
import { Link } from 'react-router-dom';

class upload extends React.Component {

    constructor() {
        super();
        this.state = {status: 'No content uploaded yet'};
    };

    onChange(event) {
        let files = event.target.files;
        const reader = new FileReader();
        reader.onload = () => {
            let res = reader.result;
            var parser = new DOMParser(), xmlDoc = parser.parseFromString(res, "text/xml");
            var arr = Array.from(xmlDoc.getElementsByTagName("programme"));
            console.log(arr);
            this.props.callbackFromParent(arr);
            this.setState({status: 'Upload successful! Please click the "Continue" button below'});
        };
        reader.readAsText(files[0]);
    };

    render() {
        return (
            <div className="upload-container">
                <form>
                    <label className="upload-status">
                        Upload file:
                        <input type="file" accept=".xml" name="file" onChange={(event) => this.onChange(event)}/>
                    </label>
                    <br />
                    <div className="upload-status">Upload status: {this.state.status}</div>
                </form>
                <Link to={"/home"}>
                    <div className="continue-button">Continue</div>
                </Link>
            </div>
        )
    };
};

export default upload;