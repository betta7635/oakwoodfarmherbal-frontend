export class Plan {
  public photoImagePath: string;
  public planName: string;
  public planLocation: string;
  public planDescription: Text;
  public planNotes: Text;
  private id: number;

  constructor(photoImagePath: string, planName: string, planLocation: string, planDescription: Text, planNotes: Text, id: number) {
    this.photoImagePath = photoImagePath;
    this.planName = planName;
    this.planLocation = planLocation;
    this.planDescription = planDescription;
    this.planNotes = planNotes;
    this.id = id;
  }
}
