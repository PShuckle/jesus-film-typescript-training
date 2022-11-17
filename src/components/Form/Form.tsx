// import { Box, Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, Fragment } from "react";
import { useState } from "react";

interface FormProps {
  addTask: (taskName: string) => void;
}

export const Form = ({ addTask }: FormProps) => {
  const [textInput, setTextInput] = useState("");

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    addTask(textInput);
  };

  useEffect(() => {
    setTextInput("");
  }, [addTask]);

  return (
    <Fragment>
      <Box width="100%" sx={{ display: "flex" }}>
        <TextField
          onChange={handleTextInputChange}
          label="Enter Task Name"
          value={textInput}
          variant="outlined"
          fullWidth={true}
          sx={{ marginRight: 5 }}
        ></TextField>
        <Button variant="outlined" onClick={handleButtonClick}>
          Submit Task
        </Button>
      </Box>
    </Fragment>
  );
};

// export default Form;
