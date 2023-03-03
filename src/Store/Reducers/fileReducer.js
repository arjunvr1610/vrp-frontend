import axios from "axios";

const initialState = {
  fileData: {},
  fileUploadStatus: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === "UPLOAD") {
    return {
      fileData: {},
      fileUploadStatus: true,
    };
  } else {
    return state;
  }
};

export default reducer;
