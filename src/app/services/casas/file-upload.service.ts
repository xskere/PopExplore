import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from "@angular/fire/compat/database";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {finalize, Observable} from "rxjs";
import {FileUploadHouses} from "../../models/houses/file-upload-houses.model";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private storage: AngularFireStorage;
  private db: AngularFireDatabase;
  constructor(db: AngularFireDatabase, storage: AngularFireStorage) {
    this.storage= storage;
    this.db = db;
  }
  pushFileToStorage(basePath: string, fileUploadHouses: FileUploadHouses): Observable<number| undefined> {
    const filePath = `${basePath}/${fileUploadHouses.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUploadHouses.file);
    uploadTask.snapshotChanges().pipe(finalize(() => {
      storageRef.getDownloadURL().subscribe(downloadURL => {
        fileUploadHouses.url = downloadURL;
        fileUploadHouses.name = fileUploadHouses.file.name;
        this.saveFileData(basePath, fileUploadHouses);
      });
    })).subscribe();
    return uploadTask.percentageChanges();
  }

  getFiles(basePath: string, numFiles: number): AngularFireList<FileUploadHouses> {
      // @ts-ignore
    return this.db.list(basePath, ref =>
        ref.limitToLast(numFiles)
      );
  }

  deleteFile(basePath: string, fileUploadHouses: FileUploadHouses): void {
      this.deleteFileDatabase(basePath, fileUploadHouses.key)
        .then(() => {
          this.deleteFileStorage(basePath, fileUploadHouses.name);
        })
        .catch(error => console.log(error));
  }

  private deleteFileDatabase(basePath: string, key: string): Promise<void> {
    return this.db.list(basePath).remove(key);
  }

  private deleteFileStorage(basePath: string, name: string): void {
    const storageRef = this.storage.ref(basePath);
    storageRef.child(name).delete();
  }

  private saveFileData(basePath: string, fileUploadHouses: FileUploadHouses): void {
    this.db.list(basePath).push(fileUploadHouses);
  }
}
