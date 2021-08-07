import React, { Component } from "react";
import { saveAs } from "@progress/kendo-file-saver";

class FileUploadButton extends Component {
  handleFileUpload = (event) => {
    console.log(event.target.files[0].name);
    //const file = event.target.files[0];
    //saveAs(file, file.name);
  };

  render() {
    return (
      <React.Fragment>
        <input
          ref="fileInput"
          onChange={this.handleFileUpload}
          type="file"
          style={{ display: "none" }}
          // multiple={false}
        />
        <button onClick={() => this.refs.fileInput.click()}>Upload File</button>
      </React.Fragment>
    );
  }
}
export default FileUploadButton;
