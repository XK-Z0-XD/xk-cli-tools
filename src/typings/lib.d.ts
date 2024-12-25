
export interface Task {
  /**
   * 
   */
  id: number;
  /**
   * Task Description
   */
  text: string;
  /**
   * date created on
   */
  createOn: string;
  
  dateDone: string;
  type: "todo"
  done: boolean;
}