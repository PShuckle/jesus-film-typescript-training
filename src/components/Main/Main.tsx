import { Title } from "../Title";
import { Form } from "../Form";
import TaskCard from "../TaskCard/TaskCard";
import { Box } from "@mui/material";
import { Task } from "../../data";
import { useState } from "react";
import { v4 } from "uuid";

const Main = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    // setTasks(tasks.concat({ name: taskName, completed: false, id: v4() }))
    setTasks([...tasks, { name: taskName, completed: false, id: v4() }]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTaskCompleted = (taskId: string, completed: boolean) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          // task.completed = completed;
          return {
            ...task,
            completed,
          };
        }
        return task;
      })
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "30vh",
          width: "50%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title label="To Do List" fontSize={120}></Title>
        <Form addTask={addTask}></Form>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
          alignItems: "space-evenly",
          flexWrap: "wrap",
          width: "70%",
          height: "50vh",
        }}
      >
        {tasks.map((task) => {
          return (
            <TaskCard
              task={task}
              deleteTask={deleteTask}
              updateTaskCompleted={updateTaskCompleted}
            ></TaskCard>
          );
        })}
      </Box>
    </Box>
  );
};

export default Main;
