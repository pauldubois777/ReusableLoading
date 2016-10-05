export class ActiveTask {
  constructor(
    public description: string = "Task",
    public startDate: Date = new Date()
  ){}
}