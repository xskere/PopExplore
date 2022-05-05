export class FileUploadUsers {
  key!: string;
  email!: string;
  name!: string;
  description!: string;
  number!: string;
  country1!: string;
  country2!: string;
  country3!: string;
  photoUrl!: string;
  userType!: string;
  file: File;
  constructor(email: string, name: string, description: string, number: string, country1: string, country2: string, country3: string, file: File, userType: string) {
    this.email = email;
    this.number = number;
    this.name = name;
    this.description = description;
    this.country1 = country1;
    this.country2 = country2;
    this.country3 = country3;
    this.file = file;
    console.log(userType);
    if(userType === "") {
      this.userType = "Huésped"
    }else{
      this.userType = "Anfitrión";
    }
  }

}
