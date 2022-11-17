import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import React from "react";
import { Task } from "../../data";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";

interface TaskCardProps {
  task: Task;
  deleteTask: (id: string) => void;
  updateTaskCompleted: (id: string, completed: boolean) => void;
}

const TaskCard = ({ task, deleteTask, updateTaskCompleted }: TaskCardProps) => {
  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTaskCompleted(task.id, e.target.checked);
  };

  return (
    <>
      <Card
        variant="outlined"
        sx={{
          minWidth: "30%",
          marginRight: 2,
          maxHeight: "50%",
        }}
        data-testid={`${task.name}-card`}
        // data-testid={task.name + "-card"}
      >
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ marginRight: 5 }}>
            <Typography variant="h5">{task.name}</Typography>
            <Typography>{task.completed ? "Completed" : "Pending"}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormControlLabel
              control={<Checkbox onChange={handleCheckboxChange} />}
              label={
                <Typography variant="button" color="textSecondary">
                  COMPLETED
                </Typography>
              }
            />
            <Button startIcon={<DeleteIcon />} onClick={handleDeleteTask}>
              Delete
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default TaskCard;
