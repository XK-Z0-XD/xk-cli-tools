import { spawnSync } from "child_process";

/**
 * @classdesc GitHub Repository Class
 */
class Repository {
  private static directory?: string;
  // public static 
  constructor(dir?:string){
    Repository.directory = dir;
  }
  
  public static listBranches(){
    let result = spawnSync("git branch");

  }
  /**
   * List Branch Information
   */
  public static branchInfo(){

  }
}
export default Repository;