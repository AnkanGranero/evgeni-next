import { fetchEntries } from "../api";
import { TypeCvitemSkeleton } from "../types";

export default async function fetchCVItems() {
const response = await fetchEntries<TypeCvitemSkeleton>("cvitem");
return response.items
}