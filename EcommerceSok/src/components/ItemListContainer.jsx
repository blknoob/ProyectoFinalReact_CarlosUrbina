import { useEffect, useState } from "react";
import Itemlist from "./Itemlist";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId, subCategoryId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let inventarioRef;

      if (subCategoryId) {
        inventarioRef = query(
          collection(db, "Inventario"),
          where("subCategory", "==", subCategoryId)
        );
      } else if (categoryId) {
        inventarioRef = query(
          collection(db, "Inventario"),
          where("category", "==", categoryId)
        );
      } else {
        inventarioRef = collection(db, "Inventario");
      }

      const resp = await getDocs(inventarioRef);
      const data = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setProducts(data);
      setLoading(false);
    };

    fetchData();
  }, [categoryId, subCategoryId]);

  return (
    <div>
      {loading ? (
        <p className="text-center text-lg">Cargando productos...</p>
      ) : (
        <Itemlist product={products} />
      )}
    </div>
  );
};

export default ItemListContainer;
