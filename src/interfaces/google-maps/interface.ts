import type {IModal} from "@interfaces/modal/interface";
import type {ReactNode} from "react";

export interface GenericModalProps<T extends { id: number }> extends IModal<T> {
  children?: ReactNode;
}
