export class Info {
  public photoImagePath: string;
  public primaryCommonName: string;
  public formattedScientificName: string;
  public color: string;
  public duration: string;
  public source: string;
  public description: Text;
  public uses: Text;
  public conservationInfo: Text;
  public notes: Text;
  public amount: number;

  constructor(photoImagePath: string, primaryCommonName: string, formattedScientificName: string, color: string, duration: string, source: string, description: Text, uses: Text, conservationInfo: Text, notes: Text, amount: number) {
    this.photoImagePath = photoImagePath;
    this.primaryCommonName = primaryCommonName;
    this.formattedScientificName = formattedScientificName;
    this.color = color;
    this.duration = duration;
    this.source = source;
    this.description = description;
    this.uses = uses;
    this.conservationInfo = conservationInfo;
    this.notes = notes;
    this.amount = amount;
  }
}
