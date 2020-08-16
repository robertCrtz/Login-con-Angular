import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class Datos {
  placa: string;
  marca: string;
  tipo: string;
  color: string;
  anio: string;
}

@Injectable()

export class AppService{
  private DatosCollection: AngularFirestoreCollection<Datos>;
  datos: Observable<Datos[]>

  private itemDoc: AngularFirestoreDocument<Datos>;

  constructor(private afs: AngularFirestore){
    this.DatosCollection = afs.collection<Datos>('datos');
    this.datos = this.DatosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Datos;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  selectedDatos(){
    return this.datos;
  }

  agregarDatos(datos: Datos){
    this.DatosCollection.add(datos);
  }

  eliminarDato(dato){
    this.itemDoc = this.afs.doc<Datos>(`datos/${dato.id}`);
    this.itemDoc.delete();
  }

  EditarDato(dato){
    this.itemDoc = this.afs.doc<Datos>(`datos/${dato.id}`);
    this.itemDoc.update(dato);
  }
}
