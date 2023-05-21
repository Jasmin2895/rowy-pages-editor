import { getDocs, collection } from "firebase/firestore";
import getDb from "./db.mjs"

const collection_name = "elementsProperties";

export const findAll = async () => {
    const doc_refs = await getDocs(collection(getDb(), collection_name))

    const res = {}

    doc_refs.forEach(property => {
        let propertyData = property.data()
        let elementId = propertyData.elementId;
        res[elementId] = {
            style: {
                color: propertyData.fontColor?.hex || 'black',
                fontSize: `${propertyData.fontSize}px` || '12px'
            },
            text: propertyData.text,
            imageUrl: propertyData.image
        };
    })

    return res
}