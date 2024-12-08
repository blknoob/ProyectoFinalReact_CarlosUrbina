import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContain = () => {
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const { detailId } = useParams();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const detailRef = doc(db, "Inventario", detailId);
        const resp = await getDoc(detailRef);
        if (resp.exists()) {
          setDetail({ ...resp.data(), id: resp.id });
          
        }
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [detailId]);
  

  if (loading) {
    return <p className="text-center text-lg">Cargando detalles...</p>;
  }

  return <ItemDetail detail={detail} />;
};

export default ItemDetailContain;
