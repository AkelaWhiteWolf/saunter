import { db } from 'src/config';
import { getDocs, collection, addDoc } from 'firebase/firestore';
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

  return { getPathesFromDB, addPathToDB };
};
