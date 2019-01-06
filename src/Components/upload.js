import React from 'react';
import { Link } from 'react-router-dom';

class upload extends React.Component {

    constructor() {
        super();
        this.state = {foo: 'No content uploaded yet'};
    }

    onChange(event) {
        let files = event.target.files;
        const reader = new FileReader();
        reader.onload = () => {
            let res = reader.result;
            var parser = new DOMParser(), xmlDoc = parser.parseFromString(res, "text/xml");
            var arr = Array.from(xmlDoc.getElementsByTagName("programme"))
            console.log(arr)
            this.props.callbackFromParent(arr);
            this.setState({foo: 'Upload successful! Please click the "Continue" button below'});
        }
        reader.readAsText(files[0]);
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Upload file:
                        <input type="file" accept=".xml" name="file" onChange={(event) => this.onChange(event)}/>
                    </label>
                    <br />
                    <div>Upload status: {this.state.foo}</div>
                </form>
                <Link to={"/home"} className="link">
                    <button>Continue</button>
                </Link>
                <div>Hi {this.props.listNameFromParent}</div>
            </div>
        )
    }
}

export default upload;