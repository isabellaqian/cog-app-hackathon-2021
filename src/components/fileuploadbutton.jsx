import React, { Component } from "react";
import { saveAs } from "@progress/kendo-file-saver";
import uploadVideoOrImage from "./uploadVideoOrImage.png";

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
        <button onClick={() => this.refs.fileInput.click()}>
          <img
            src={uploadVideoOrImage}
            alt="uploadVideoOrImage.png"
            style={{
              width: "25%",
              height: "11%",
              position: "absolute",
              top: "65%",
              left: "46%",
            }}
          />
        </button>
      </React.Fragment>
    );
  }
}
export default FileUploadButton;
