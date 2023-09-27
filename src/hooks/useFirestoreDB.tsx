import { db } from 'src/config';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  where,
  query,
  updateDoc,
} from 'firebase/firestore';
import { PathSliceType } from 'src/types';

export const useFirestoreDB = () => {
  async function getPathesFromDB() {
    try {
      const data = await getDocs(collection(db, 'pathes'));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const mapedData: PathSliceType[] = data.docs.map(doc => ({
        ...doc.data(),
      }));

      return mapedData;
    } catch (e) {
      console.error('Database error: ', e);
    }
  }

  async function addPathToDB(data: PathSliceType) {
    await addDoc(collection(db, 'pathes'), data);
  }

  async function deletePathFromDB(id: PathSliceType['id']) {
    const path = await getPathFromDBById(id);

    if (path?.ref) await deleteDoc(path?.ref);
  }

  async function switchIsPathFavoriteInDB(id: PathSliceType['id']) {
    const path = await getPathFromDBById(id);

    if (path) {
      const newValue = !path?.data.isFavorite;
      await updateDoc(path.ref, { isFavorite: newValue });
    }
  }

  async function getPathFromDBById(id: PathSliceType['id']) {
    const pathQuery = query(collection(db, 'pathes'), where('id', '==', id));
    const querySnapshot = await getDocs(pathQuery);

    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];

      return { ref: doc.ref, data: doc.data() };
    }
  }

  return {
    getPathesFromDB,
    addPathToDB,
    deletePathFromDB,
    switchIsPathFavoriteInDB,
  };
};
