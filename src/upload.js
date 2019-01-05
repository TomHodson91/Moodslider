import React from 'react';

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
            console.log(xmlDoc)
            this.setState({foo: 'Upload successful!'});
        }
        reader.readAsText(files[0])
    }

    render() {
        return (
            <form>
                <label>
                    Upload file:
                    <input type="file" accept=".xml" name="file" onChange={(event) => this.onChange(event)}/>
                </label>
                <br />
                <div>Upload status: {this.state.foo}</div>
            </form>
        )
    }
}

export default upload;