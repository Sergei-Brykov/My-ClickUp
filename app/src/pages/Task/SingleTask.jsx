import { MainInput } from "../../copmponents/Inputs/MainInput";
import { MainLabel } from "../../copmponents/Inputs/MainLabel";
import { MainTextarea } from "../../copmponents/Inputs/MainTextarea";
import { BreadCrums } from "../../copmponents/BreadCrums";
import styles from "./styles.module.css";
import { CloseButton } from "../../copmponents/Buttons/CloseButton";

export function SingleTask({ task, board, column, onClose }) {
  if (!task) return null;

  return (
    <div>
      <BreadCrums board={board} column={column} task={task} />

      <MainLabel fontSize={24} htmlFor={"task-title"}>
        Task title:
      </MainLabel>
      <MainInput id={"task-title"} value={task.title} />
      <MainLabel htmlFor={"task-title"}>Task title:</MainLabel>
      <MainTextarea value={task.shortDescription} />
    </div>
  );
}
